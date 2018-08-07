import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import { Container} from 'native-base';

import SwipersImages from "./component/SwipersImages";
import GridIcon from "./component/GridIcon";
import CardAjakTeman from "./component/CardAjakTeman";
import FlashSale from "./component/FlashSale";

const HomeContent = () => (
  <View>
      <SwipersImages />
      <Text style={{color:'#000', fontWeight:'900', left:35, fontSize:14}}>E-Voucher, tiket & investasi</Text>
      <GridIcon />
      <CardAjakTeman />
      <FlashSale />
  </View>
)


export default HomeContent;