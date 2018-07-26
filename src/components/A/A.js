import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './A.scss'

export default class A extends Component {

  componentWillMount () {
    console.log('Component A will mount, props.t:', this.props.t)
  }

  componentDidMount () {
    console.log(this.props)
    console.log('Component A did mount, props.t:', this.props.t)
  }

  componentWillReceiveProps (nextProps) {
    // console.log(this.props)
    // console.log(nextProps)
    console.log('Component A will receive props:', this.props, nextProps)
  }

  componentWillUnmount () { }

  onClickHandler () {
    this.props.onClick()
  }

  render () {
    return (
      <View className='a'>
        <Button onClick={this.onClickHandler.bind(this)}>点我</Button>
        <Text>A Component {this.props.t}</Text>
      </View>
    )
  }
}
