import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import A from '../../components/A/A'
import B from '../../components/B/B'
import C from '../../components/C/C'

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
    }],
    list2: [
      {
        type: 'a',
        x: 'list2: a'
      },
      {
        type: 'b',
        x: 'list2: b'
      },
      {
        type: 'c',
        x: 'list2: c'
      },
      {
        type: 'a',
        x: 'list2: a'
      }
    ],
    isShowC: true
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps, 'componentWillReceiveProps')
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        list: [{
          x: 10
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
      title: `test A click ${item}`,
      icon: 'none'
    })
  }

  handleToGoodList () {
    Taro.navigateTo({
      url: '/pages/goodList/index'
    })
  }

  changeShow = () => {
    this.setState({
      isShowC: !this.state.isShowC
    })
  }

  render () {
    return (
      <View className='index'>
        <Button onClick={this.handleToGoodList}>点我去商品列表</Button>
        {/* <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View>{this.props.counter.num}</View> */}
        <View className='title'><Text>单个组件 A 引用</Text></View>
        <A t={4} onClick={this.onAClickHandler.bind(this, 4)} />
        <View><Text>=============分割线=============</Text></View>
        <View><Text>=============分割线=============</Text></View>
        <View className='title'><Text>循环输出 A 组件</Text></View>
        {this.state.list.map((item, idx) => <A t={item.x} key={`A_${idx}`} onClick={this.onAClickHandler.bind(this, item.x)} />)}
        <View><Text>=============分割线=============</Text></View>
        <View><Text>=============分割线=============</Text></View>
        <View className='title'><Text>组件 B 包含子元素</Text></View>
        <B>
          <View><Text>组件 B 的子元素</Text></View>
        </B>
        <View className='title'><Text>组件 B 包含组件 A</Text></View>
        <B>
          <A t={100} onClick={this.onAClickHandler.bind(this, 100)} />
        </B>
        <View><Text>=============分割线=============</Text></View>
        <View><Text>=============分割线=============</Text></View>
        <View className='title'><Text>组件 C 嵌套 组件 B</Text></View>
        <C />
        <View><Text>=============分割线=============</Text></View>
        <View><Text>=============分割线=============</Text></View>
        <View className='title'><Text>条件渲染组件</Text></View>
        <Button onClick={this.changeShow}>切换</Button>
        {this.state.isShowC ? <C /> : <A t={'hh'} onClick={this.onAClickHandler.bind(this, 'hh')} />}
        <View className='title'><Text>循环中条件渲染组件</Text></View>
        {this.state.list2.map((item, idx) => {
          return (
            <View key={`xxx_${idx}`}>
              {item.type === 'a' && <A t={item.x} />}
              {item.type === 'b' && <B><Text>{item.tt}</Text></B>}
              {item.type === 'c' && <C />}
            </View>
          )
        })}
      </View>
    )
  }
}

export default Index
