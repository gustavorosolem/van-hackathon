import * as React from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const hostname = '34.217.212.155'
// const hostname = '172.16.12.63:8080'

interface AddItemState {
  sending: boolean
}

interface AddItemProps {
  updateItems()
}

class AddItem extends React.Component<AddItemProps, AddItemState> {
  state = {
    sending: false
  }
  onFormSubmit = e => {
    e.preventDefault() // Stop form submit
    this.setState(prevState => ({
      ...prevState,
      sending: true
    }))
    const data = {
      name: e.target[0].value
    }
    console.log(data)
    axios.post(`http://${hostname}/products/add`, JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      console.log(res.data)
      // this.props.updateItems()
      window.location.reload()
    }).catch(res => {
      this.setState(prevState => ({
        ...prevState,
        sending: false
      }))
      console.log(res)
      alert('Error. Try again')
    })
  }
  render() {
    const { sending } = this.state
    return (
      <div style={{marginBottom: 20}}>
        <Form onSubmit={this.onFormSubmit}>
          <FormGroup>
            <Label for="exampleEmail">Product</Label>
            <Input type="text" name="product" ref="product" placeholder="Add new product" />
          </FormGroup>
          <Button color="primary" disabled={sending}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default AddItem
