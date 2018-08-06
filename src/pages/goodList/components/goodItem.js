import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Button, Image } from '@tarojs/components'
import './gooditem.scss'
export default class GoodItem extends Component {
  handleClick (tit) {
    console.log(tit)
  }
  render() {
    const { good } = this.props
    return (<View className='msite-rec__good'>
      <View className='msite-rec__good-inner'>
        <View className='msite-rec__good-pic bg_stamp'>
          <Image className='msite-rec__good-pic__img' src={good.imageurl} />
            <View className='msite-rec__good-reason'>大家都在买的热销商品</View>
        </View>
        <View className='msite-rec__good-desc'>{good.wname}</View>
          <View className='msite-rec__good-price'><Text>¥ </Text>39<Text>.00</Text></View>
          <View className='msite-rec__good-tip'>
            好评率100%
        </View>
          <View onClick={this.handleClick.bind(this, good.wname)} report-eventid='MRecommHome_RSimilarities' report-eventparam='0_30509758484_1523587658249574906112' report-eventlevel='1' className='msite-rec__good-btn'>
            看相似
        </View>
        </View>
    </View>)
  }
}