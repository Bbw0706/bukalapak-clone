import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {Icon} from "native-base"
import GridView from 'react-native-super-grid';

export default class GridIcon extends Component {
  render() {
    // Taken from https://flatuicolors.com/
    const items = [
      { name: 'Badai Uang', code: 'ios-thunderstorm', color:'#dd0057' }, 
      { name: 'Bukalapak Credits', code: 'ios-card', color:'#dd0057' },
      { name: 'Pulsa Prabayar', code: 'ios-phone-portrait', color:'#1a237e'}, 
      { name: 'Listrik Prabayar', code: 'ios-flash' , color:'#42a5f5'}, 
      { name: 'Listrik Pascabayar', code: 'md-flash' , color:'#42a5f5'},
      { name: 'Air PDAM', code: 'ios-water' , color:'#42a5f5'}, 
      { name: 'Tiket Kereta', code: 'ios-train' , color:'#7e57c2'},
      { name: 'Tiket Pesawat', code: 'ios-jet' , color:'#7e57c2'}, 
      { name: 'Buka Emas', code: 'ios-albums' , color:'#fdd835'},
      { name: 'Live TV', code: 'ios-desktop' , color:'#fb8c00'}, 
      { name: 'Redeem Voucher', code: 'md-card' , color:'#fb8c00'},
      { name: 'Lihat Semua', code: 'ios-more' , color:'#bdbdbd'}
    ];

    return (
      <View style={{height:270}}>
      <GridView
        itemDimension={35}
        items={items}
        spacing= {30}
        renderItem={item => (
        <View>
          <View style={styles.itemContainer}>
          	<Icon name={item.code} style={{color: item.color}}/>
          </View>
            <Text style={styles.itemName}>{item.name}</Text>          
        </View>
        )}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    height:200,
  },
  itemContainer: {
    justifyContent: 'center',
  	alignItems:"center",
    borderRadius: 5,
    height: 30,
  },
  itemName: {
  	textAlign : "center",
    fontSize: 7,
    color: '#000',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});