import * as React from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap'
import ReactLoading from 'react-loading'
import Context from './context'
import List from './list'
import AddItem from './addItem'

const hostname = '34.217.212.155'
// const hostname = '172.16.12.63:8080'

interface TemplateState {
  list: any
  loading: boolean
}

class Template extends React.Component<{}, TemplateState> {
  state = {
    list: [],
    loading: false
  }
  componentDidMount() {
    this.getItems()
  }
  getItems() {
    this.setState(prevState => ({
      ...prevState,
      loading: true
    }))
    axios.get(`http://${hostname}/products/`).then(res => {
      const list = res.data;
      console.log('BBBBBBB', list)
      this.setState(prevState => ({
        ...prevState,
        list: list
      }))
    }).catch(res => {
      console.log(res)
      alert('Error. Try again')
    }).then(res => {
      console.log(res)
      this.setState(prevState => ({
        ...prevState,
        loading: false
      }))
    })
  }
  render() {
    const { list, loading } = this.state
    console.log(loading)
    return (
      <Context.Provider value={list}>
        <Container>
          <Row>
            <Col>
              <h1 className="display-4">Wishlist</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <AddItem updateItems={this.getItems} />
            </Col>
          </Row>
          <Row>
            <Col>
              {loading ? (
                <div style={{textAlign: 'center'}}>
                  <div style={{display: 'inline-block'}}>
                    <ReactLoading type="spin" color="#CCC" height={50} width={50} />
                  </div>
                </div>
              ) : <List />}
            </Col>
          </Row>
        </Container>
      </Context.Provider>
    )
  }
}

export default Template
