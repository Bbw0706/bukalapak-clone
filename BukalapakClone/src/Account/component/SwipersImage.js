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
    height:300,
    marginTop:60,
    marginBottom:20
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
      <Swiper style={styles.wrapper} showsButtons={false} paginationStyle={{color:"red"}} autoplay={true} activeDotColor="#dd0057">
        <View style={styles.slide1}>
          <Image style={{width:"80%", height:230,}} source={require('../../assets/Account/1.png')} />
          <Text style={styles.textTitle}>Transaksi Lebih Cepat</Text>
          <Text style={styles.text}>
            Kamu cukup menyimpan alamat sekali saja untuk mempercepat transaksi berikutnya
          </Text>          
        </View>
        <View style={styles.slide1}>
          <Image style={{width:"80%", height:230,}} source={require('../../assets/Account/2.png')} />
          <Text style={styles.textTitle}>Belanja lebih murah</Text>
          <Text style={styles.text}>
            Rasakan murahnya belanja dengan menggunakan voucher belanja
          </Text>           
        </View>
        <View style={styles.slide1}>
          <Image style={{width:"80%", height:230,}} source={require('../../assets/Account/3.png')} />
          <Text style={styles.textTitle}>Mencari Barang Favorit</Text>
          <Text style={styles.text}>
            Menemukan barang yang kamu suka dengan fitur favorit
          </Text> 
        </View>
        <View style={styles.slide1}>
          <Image style={{width:"80%", height:230,}} source={require('../../assets/Account/4.png')} />
          <Text style={styles.textTitle}>Belanja lebih praktis</Text>
          <Text style={styles.text}>
            BukaDompet solusi terbaik bagi kamu yang ingin berbelanja lebih praktis dan cepat
          </Text> 
        </View>
      </Swiper>
    );
  }
}