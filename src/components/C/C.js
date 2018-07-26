import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import B from '../B/B'
import './C.scss'

export default class C extends Component {

  componentWillMount () {
  }

  componentDidMount () {

  }

  componentWillReceiveProps (nextProps) {

  }

  componentWillUnmount () { }

  render () {
    return (
      <View className='c'>
        <View><Text>组件 C 开始</Text></View>
        <B><Text>C 嵌套 B，再传入点子元素</Text></B>
        <View><Text>组件 C 结束</Text></View>
      </View>
    )
  }
}
