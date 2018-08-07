import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {
    height:210
  },
  slide1: {
    flex: 1
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default class SwipersImages extends Component {
  render(){
    return (
      <Swiper style={styles.wrapper} showsButtons={false} paginationStyle={{top:170, right: 210}} activeDotColor="#dd0057" autoplay={true}>
        <View style={styles.slide1}>
          <Image style={{width:"100%", height:160,}} source={{uri : "https://s1.bukalapak.com/uploads/flash_banner/66803/mobile/s-960-390/Banner_Mobile_Copy.jpg.webp"}} />
        </View>

        <View style={styles.slide1}>
          <Image style={{width:"100%", height:160,}} source={{uri : "https://s3.bukalapak.com/uploads/flash_banner/38903/mobile/s-960-390/914ca5f4-5fc5-46fc-bee0-c3fb1ee2eccd.jpg.webp"}} />
        </View>

        <View style={styles.slide1}>
          <Image style={{width:"100%", height:160,}} source={{uri : "https://s0.bukalapak.com/uploads/flash_banner/56903/mobile/s-960-390/Banner_Mobile__kurir_kemerdekaan.jpg.webp"}} />
        </View>

        <View style={styles.slide1}>
          <Image style={{width:"100%", height:160,}} source={{uri : "https://s1.bukalapak.com/uploads/flash_banner/17903/mobile/s-960-390/Banner_Mobile__kurirsatu.jpg.webp"}} />
        </View>

        <View style={styles.slide1}>
          <Image style={{width:"100%", height:160,}} source={{uri : "https://s3.bukalapak.com/uploads/flash_banner/89903/mobile/s-960-390/Banner_Mobile.jpg.webp"}} />
        </View>

        <View style={styles.slide1}>
          <Image style={{width:"100%", height:160,}} source={{uri : "https://s4.bukalapak.com/uploads/flash_banner/49703/mobile/s-960-390/Banner_Mobile_pulsaxl.jpg.webp"}} />
        </View>

        <View style={styles.slide1}>
          <Image style={{width:"100%", height:160,}} source={{uri : "https://s2.bukalapak.com/uploads/flash_banner/29903/mobile/s-960-390/Banner_Mobile_Copy.jpg.webp"}} />
        </View>

        <View style={styles.slide1}>
          <Image style={{width:"100%", height:160,}} source={{uri : "https://s0.bukalapak.com/uploads/flash_banner/01013/mobile/s-960-390/Banner_Mobile_mandiripu.jpg.webp"}} />
        </View>
      </Swiper>
    );
  }
}