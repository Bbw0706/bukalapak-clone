import React, { Component } from 'react';
import { Image ,View} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardImageExample extends Component {
  render() {
    return (
      <View style={{flex:1, flexDirection : "row", justifyContent:"space-between", margin:20}}>
          <Card style={{width:"45%"}}>
            <CardItem cardBody>
              <Image 
                source={require("../../../../../../assets/Bukamall/1.png")}
                style={{height: 100, width:"100%"}}
              />
            </CardItem>
            <CardItem>
              <Text>Rekomendasi Kami</Text>            
            </CardItem>
          </Card>

          <Card style={{width:"45%"}}>
            <CardItem cardBody>
              <Image 
                 source={require("../../../../../../assets/Bukamall/2.png")}
                 style={{height: 100, width:"100%"}}
              />
            </CardItem>
            <CardItem>
              <Text>Brand Terbaru</Text>
            </CardItem>
          </Card>
      </View>
    );
  }
}