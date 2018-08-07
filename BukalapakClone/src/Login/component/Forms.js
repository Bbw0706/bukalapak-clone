import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Button,Text, Input, Label } from 'native-base';
import {View} from "react-native"

export default class Forms extends Component {
  render() {
    return (
        <View>
          <Form style={{marginLeft : 10, marginRight:25, marginBottom:40}}>
            <Item stackedLabel>
              <Label style={{fontSize : 12, fontWeight:"900"}}>E-MAIL / USERNAME / NOMOR HANDPHONE</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label style={{fontSize : 12, fontWeight:"900"}}>PASSWORD</Label>
              <Input />
            </Item>
          </Form>
          <Button block danger style={{backgroundColor:"#dd0057", marginRight:23, marginLeft:23}}>
            <Text>Login</Text>
          </Button>
        </View>
    );
  }
}