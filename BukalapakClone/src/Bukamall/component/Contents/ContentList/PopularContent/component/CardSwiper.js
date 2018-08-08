import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';


import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {
    height:200
  },
  slide1: {
    flex: 1,
  }
})

export default class CardSwiper extends Component {
  render() {
    return (
          <Card>
            <CardItem cardBody>
              <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} activeDotColor="#dd0057">
                <View style={styles.slide1}>
                 <Image 
                  style={{width:"100%", height:200,}} 
                  source={{uri : "https://s1.bukalapak.com/uploads/flash_banner/60803/mobile/s-960-390/Banner_Mobile_J_T.jpg.webp"}} 
                />
                </View>
                <View style={styles.slide1}>
                  <Image style={{width:"100%", height:200,}} source={{uri : "https://s4.bukalapak.com/uploads/flash_banner/49703/mobile/s-960-390/Banner_Mobile_pulsaxl.jpg.webp"}} />
                </View>
                <View style={styles.slide1}>
                  <Image style={{width:"100%", height:200,}} source={{uri : "https://s1.bukalapak.com/uploads/flash_banner/66803/mobile/s-960-390/Banner_Mobile_Copy.jpg.webp"}} />
                </View>
              </Swiper>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon name="thumbs-up"  style={{fontSize:10}}/>
                  <Text style={{fontSize:10}}>14 Hari pengembalian</Text>
                </Button>
              </Left>
              <Right>
                <Text style={{fontSize:10}}>100% Product Aman</Text>
              </Right>
            </CardItem>
          </Card>
    );
  }
}
