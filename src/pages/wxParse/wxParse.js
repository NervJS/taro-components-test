import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import WxParse from '../../components/wxParse/wxParse'

export default class wxParse extends Component {
  config = {
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTextStyle: 'black',
    navigationBarTitleText: 'WxParse 使用示例',
    backgroundColor: '#eeeeee',
    backgroundTextStyle: 'light'
  }

  componentDidMount() {
    const article = '<div style="color: red">我是HTML代码</div>'
    WxParse.wxParse('article', 'html', article, this.$scope, 5)
  }

  render() {
    return (
      <View>
        <import src='../../components/wxParse/wxParse.wxml' />
        <template is='wxParse' data='{{wxParseData:article.nodes}}'/>
      </View>
    )
  }
}
