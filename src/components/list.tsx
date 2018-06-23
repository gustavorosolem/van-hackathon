import * as React from 'react'
// import { Container, Row, Col } from 'reactstrap'
import ContextHOC from './hoc'

interface ListProps {
  itemsList: any
}

class List extends React.Component<ListProps, {}> {
  render() {
    console.log('affffff', this.props)
    const { itemsList } = this.props
    return (
      <ul>
        {itemsList && itemsList.map((element, index) => {
          return (
            <li key={index}><span>oi - {element.title}</span></li>
          )
        })}
      </ul>
    )
  }
}

export default ContextHOC(List)
