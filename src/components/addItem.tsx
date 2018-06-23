import * as React from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const hostname = '34.217.212.155:8080'
// const hostname = '172.16.12.63:8080'

interface AddItemState {
  sending: boolean
  value: string
}

interface AddItemProps {
  updateItems()
}

class AddItem extends React.Component<AddItemProps, AddItemState> {
  state = {
    sending: false,
    value: ''
  }
  handleChange = e => {
    this.setState({ value: e.target.value })
  }
  onFormSubmit = e => {
    e.preventDefault() // Stop form submit
    this.setState(prevState => ({
      ...prevState,
      sending: true
    }))
    const data = {
      name: this.state.value
    }
    console.log(data)
    axios.post(`http://${hostname}/products/add`, JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      console.log(res.data)
      this.setState({ value: '' })
      this.props.updateItems()
    }).catch(res => {
      console.log(res)
      alert('Error. Try again')
    }).then(() => {
      this.setState(prevState => ({
        ...prevState,
        sending: false
      }))
    })
  }
  render() {
    const { sending } = this.state
    return (
      <div style={{marginBottom: 20}}>
        <Form onSubmit={this.onFormSubmit}>
          <FormGroup>
            <Label for="exampleEmail">Product</Label>
            <Input type="text" name="product" ref="product" value={this.state.value} onChange={this.handleChange} placeholder="Add new product" />
          </FormGroup>
          <Button color="primary" disabled={sending}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default AddItem
