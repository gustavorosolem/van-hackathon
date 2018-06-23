import * as React from 'react'
import Context from './context'

const ContextHOC = WrappedComponent => {
  class ComponentWrapper extends React.Component<{}, {}> {
    render() {
      const { ...props } = this.props
      return (
        <Context.Consumer>
          {itemsList => {
            console.log('ITEMS INSIDE HOC = ', itemsList)
            return <WrappedComponent {...props} itemsList={itemsList || null} />
          }}
        </Context.Consumer>
      )
    }
  }
  return ComponentWrapper
}

export default ContextHOC
