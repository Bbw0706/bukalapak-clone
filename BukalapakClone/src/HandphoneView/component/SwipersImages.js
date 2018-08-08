import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image
} from 'react-native';

import {Text} from "native-base"

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {
    height:200,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textTitle: {
    fontSize:17, 
    color:"#000", 
    fontWeight:"900",
    bottom:80,
    alignSelf:"center"
  },
  text: {
    bottom:70,
    fontSize:14,
    color:"#aaa",
    alignSelf:"center",
    textAlign:"center",
    width:"75%"
  }
})

export default class SwiperImages extends Component {
  render(){
    return (
      <View style={styles.wrapper} >
      <Swiper showsButtons={false} autoplay={true} activeDotColor="#dd0057">
        <View style={styles.slide1}>
          <Image 
            style={{width:"80%", height:350,}} 
            source={{ uri: 'https://image4.geekbuying.com/ggo_pic/2017-08-19/2017081901028221y8m0sga.jpg' }} 
          />        
        </View>
        <View style={styles.slide1}>
          <Image 
            style={{width:"80%", height:350,}} 
            source={{ uri: 'https://assets.bmdstatic.com/assets/Data/Inventory/Overview/image/Xiaomi%20Redmi%204A.jpg' }} 
          />          
        </View>
        <View style={styles.slide1}>
          <Image 
            style={{width:"80%", height:350,}} 
            source={{ uri: 'https://brpcelltulungagung.com/wp-content/uploads/2017/09/xiaomi-redmi-4a-prime-2.32-grey.jpg' }} 
          />
        </View>
      </Swiper>
      </View>
    );
  }
}