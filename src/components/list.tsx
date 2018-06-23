import * as React from 'react'
// import { Container, Row, Col } from 'reactstrap'
import ContextHOC from './hoc'

interface ListProps {
  id: number
}

class List extends React.Component<ListProps, {}> {
  render() {
    console.log('affffff', this.props)
    return (
      <div>OLA</div>
    )
  }
}

export default ContextHOC(List)
