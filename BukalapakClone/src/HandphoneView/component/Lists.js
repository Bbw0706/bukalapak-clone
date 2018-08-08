import React, { Component } from 'react';
import {View,TouchableOpacity, Alert} from "react-native"
import { Container, Header, Content, List, Icon,ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
export default class Lists extends Component {
  render() {
    return (
        <View>
          <List style={{marginRight:20}}>
            <ListItem>
              <Body>
                <Text>Xiaomi Redmi 4A</Text>
                <Text note>32 ulasan 60 diskusi</Text>
                <Text style={{color :"#dd0057", marginTop:10}}>
                  Rp1.494.000 <Text style={{color:"green", fontSize:11}}>Cicilan 0%</Text>
                </Text>
              </Body>
              <Right>
                <Icon note active name="more" />
              </Right>
            </ListItem>
          </List>

          <List style={{marginRight:20}}>
            <ListItem>
              <Body>
                <Text note style={{color:"#000"}}>Gratis Ongkir J&T 1x per hari</Text>
                <Text note style={{color:"#000"}}>Kode Promo : KIRIMJT</Text>
                <Text note style={{fontSize:12}}>*Maksimal potongan Rp 20.000 /transaksi</Text>
              </Body>
              <Right>
                <Icon note active name="ios-arrow-forward" />
              </Right>
            </ListItem>
          </List>

          <List style={{marginRight:20}}>
            <ListItem>
              <Body style={{marginBottom:20}}>
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                  <View>
                    <Text note style={{fontSize:12}}>Cicilan 0% - 3 bulan</Text>
                    <Text note style={{fontSize:12}}>Cicilan 0% - 6 bulan</Text>
                    <Text note style={{fontSize:12}}>Cicilan 0% - 12 bulan</Text>
                  </View>
                  <View>
                    <Text note style={{fontSize:12, color:"#dd0057"}}>
                      Rp498.000<Text style={{color:"#aaa",fontSize:12,}}>/bulan</Text>
                    </Text>
                    <Text note style={{fontSize:12, color:"#dd0057"}}>
                      Rp249.000<Text style={{color:"#aaa",fontSize:12,}}>/bulan</Text>
                    </Text>
                    <Text note style={{fontSize:12, color:"#dd0057"}}>
                      Rp124.500<Text style={{color:"#aaa",fontSize:12,}}>/bulan</Text>
                    </Text>
                  </View>
                </View>
              </Body>
            </ListItem>
            <TouchableOpacity 
              style={{bottom:20}}
              onPress={() =>Alert.alert(
                'Bank Belum Tersedia',
                'Coba lain kali',
                [
                  {text: 'Tutup', onPress: () => null},
                ],
                { cancelable: false }
              )}
            >
              <Text style={{fontSize:12, color:"#dd0057", textAlign:"center"}}>
                Bank penyedia Cicilan
              </Text>
            </TouchableOpacity>
          </List>

          <List style={{marginRight:20}}>
            <ListItem>
              <Body>
                <View style={{flexDirection:"row", justifyContent:"space-between",marginLeft:10}}>
                  <View>
                    <Text note style={{fontSize:12, color:"#aaa"}}>STOK</Text>
                    <Text note style={{fontSize:12}}>>100</Text>
                  </View>
                   <View>
                    <Text note style={{fontSize:12, color:"#aaa"}}>TERJUAL</Text>
                    <Text note style={{fontSize:12}}>717</Text>
                  </View>
                   <View>
                    <Text note style={{fontSize:12, color:"#aaa"}}>PEMINAT</Text>
                    <Text note style={{fontSize:12}}>1676</Text>
                  </View>
                   <View>
                    <Text note style={{fontSize:12, color:"#aaa"}}>DILIHAT</Text>
                    <Text note style={{fontSize:12}}>653847</Text>
                  </View>
                </View>
              </Body>
            </ListItem>
          </List>


          <List style={{marginBottom:30}}>
            <ListItem avatar>
              <Left>
                <Thumbnail style={{backgroundColor:"#dd0057", bottom:20}} source={{ uri: 'https://previews.123rf.com/images/mahabiru/mahabiru1604/mahabiru160400045/54695576-business-corporate-letter-s-logo-design-vector-colorful-hexagonal-triangle-letter-s-logo-vector-temp.jpg' }} />
              </Left>
              <Body>
                <Text note style={{color:"#dd0057"}}>Supermarket Lorem Ipsum</Text>
                <Text note>Recommended Seller</Text>
                <Text note style={{color:"#dd0057"}}>100%(11913 feedback)</Text>
                <Text note>Jakarta Utara</Text>
                <Text note>Waktu kirim pesanan +- 15 Jam</Text>
              </Body>
            </ListItem>
          </List>
        </View>
    );
  }
}