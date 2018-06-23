import * as React from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap'
import Context from './context'
import List from './list'

interface TemplateState {
  list: any
}

class Template extends React.Component<{}, TemplateState> {
  state = {
    list: [
      {
        title: String,
        id: String
      }
    ]
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then(res => {
      const list = res.data;
      console.log('BBBBBBB', list)
      this.setState(prevState => ({
        ...prevState,
        list: list
      }))
    })
  }
  render() {
    const { list } = this.state
    return (
      <Context.Provider value={list}>
        <Container>
          <Row>
            <Col>
                <h1 className="display-3">Wishlist</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <List />
            </Col>
          </Row>
        </Container>
      </Context.Provider>
    )
  }
}

export default Template
