import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import A from '../../components/A/A'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {
  config = {
    navigationBarTitleText: 'Taro 组件化方案测试'
  }

  state = {
    list: [{
      x: 1
    }]
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        list: [{
          x: 1
        }, {
          x: 2
        }, {
          x: 3
        }]
      })
    }, 2000)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onAClickHandler = (item) => {
    Taro.showToast({
      title: `test A click ${item}`
    })
  }

  render () {
    return (
      <View className='index'>
        {/* <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View>{this.props.counter.num}</View> */}
        <View><Text>单个组件 A 引用</Text></View>
        <A t={4} onClick={this.onAClickHandler.bind(this, 4)} />
        <View><Text>=============分割线=============</Text></View>
        <View><Text>=============分割线=============</Text></View>
        <View><Text>循环输出 A 组件</Text></View>
        {this.state.list.map((item, idx) => <A t={item.x} key={`A_${idx}`} onClick={this.onAClickHandler.bind(this, item.x)} />)}
      </View>
    )
  }
}

export default Index
