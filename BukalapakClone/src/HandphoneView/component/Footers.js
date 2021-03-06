import React, { Component } from 'react';
import {Footer, FooterTab, Button, Text } from 'native-base';
export default class Footers extends Component {
  render() {
    return (
        <Footer>
          <FooterTab>
            <Button light>
              <Text style={{fontSize:15, fontWeight:"600"}}>Kirim pesan</Text>
            </Button>
            <Button danger onPress={() => this.props.navigation.navigate("Payment")}>
              <Text style={{fontSize:15, fontWeight:"600", color:"#fff"}}>Beli</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}