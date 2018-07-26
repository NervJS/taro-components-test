import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './B.scss'

export default class B extends Component {

  componentWillMount () {
  }

  componentDidMount () {

  }

  componentWillReceiveProps (nextProps) {

  }

  componentWillUnmount () { }

  render () {
    return (
      <View className='b'>
        <View><Text>组件 B 开始</Text></View>
        {this.props.children}
        <View><Text>组件 B 结束</Text></View>
      </View>
    )
  }
}
