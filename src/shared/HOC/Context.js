/**
 * 上下文组件
 */
import React, {Component} from 'react';

class ContextProvider extends Component {
  getChildContext () {
    const { children, ...rest } = this.props
    return rest
  }

  render () {
    return this.props.children
  }
}

class Context extends Component {
  constructor (props) {
    super(props)
    const { children, ...rest } = props
    const contextTypes = Object.keys(rest).reduce(
      (acc, current) => {
        acc[current] = () => {}
        return acc
      },
      {}
    )
    ContextProvider.childContextTypes = contextTypes
  }

  render () {
    return <ContextProvider {...this.props} />
  }
}

export default Context