import * as React from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap'
import Context from './context'
import List from './list'

interface TemplateState {
  id: number
}

class Template extends React.Component<{}, TemplateState> {
  state = {
    id: 0,
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

    this.setState(prevState => ({
      ...prevState,
      id: 1
    }))
  }
  render() {
    const { list } = this.state
    return (
      <Context.Provider value={this.state.id}>
        <Container>
          <Row>
            <Col>
                <h1 className="display-3">Wishlist</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <List />
              <ul>
                {list && list.map((element, index) => {
                  return (
                    <li key={index}>{element.title}</li>
                  )
                })}
              </ul>
            </Col>
          </Row>
          <Row>
            <Col xs="3">.col-3</Col>
            <Col xs="auto">.col-auto - variable width content</Col>
            <Col xs="3">.col-3</Col>
          </Row>
          <Row>
            <Col xs="6">.col-6</Col>
            <Col xs="6">.col-6</Col>
          </Row>
          <Row>
            <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
            <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
            <Col sm="4">.col-sm-4</Col>
          </Row>
          <Row>
            <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .col-sm-order-2 .col-sm-offset-2</Col>
          </Row>
          <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>.col-sm-12 .col-md-6 .col-md-offset-3</Col>
          </Row>
          <Row>
            <Col sm={{ size: 'auto', offset: 1 }}>.col-sm .col-sm-offset-1</Col>
            <Col sm={{ size: 'auto', offset: 1 }}>.col-sm .col-sm-offset-1</Col>
          </Row>
        </Container>
      </Context.Provider>
    )
  }
}

export default Template
