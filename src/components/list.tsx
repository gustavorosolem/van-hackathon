import * as React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import ContextHOC from './hoc'

interface ListProps {
  itemsList: any
}

class List extends React.Component<ListProps, {}> {
  render() {
    const { itemsList } = this.props
    return (
      <ListGroup style={{marginBottom: 20}}>
        {itemsList && itemsList.map((element, index) => {
          const title = element.name
          console.log(title)
          return (
            <ListGroupItem key={index}>{title}</ListGroupItem>
          )
        })}
      </ListGroup>
    )
  }
}

export default ContextHOC(List)
