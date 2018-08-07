import React, {Component} from 'react';
import {Platform, StyleSheet,  View} from 'react-native';
import { Container, Icon,Header,Text, Content, Button} from 'native-base';

import Forms from "./component/Forms.js"

export default class Loginscreen extends Component{
   static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: '#fff',
        elevation : 0
      },
      headerTintColor: '#000',
    };
  };
  render() {
    return (
      <Container>
        <Content>
          <Text style={{marginTop:12, marginLeft: 25, fontSize:20, marginBottom: 20}}>Login</Text>
          <Forms />

          <Text style={{marginTop:10, fontSize:13,alignSelf:"center", color:"#aaa"}}>atau login dengan</Text>

          <View style={{flex : 1, flexDirection:"row", margin:22,marginTop:10, justifyContent:"space-between"}}>
            <View style={{width : "48%"}}>
              <Button block light iconLeft>
                <Icon name='logo-facebook' style={{color:"#0d47a1"}}/>
                <Text>Facebook</Text>
              </Button>
            </View>

            <View style={{width : "48%"}}>
              <Button block light iconLeft>
                <Icon name='logo-google' style={{color:"#ef5350"}}/>              
                <Text>Google</Text>
              </Button>
            </View>
          </View>

          <Text style={{fontSize:13,alignSelf:"center", color:"#aaa"}}>
            Belum punya akun? <Text style={{fontSize:13, color:"#dd0057", fontWeight:"900"}}>Daftar sekarang</Text>
          </Text>

          <Text style={{marginTop:10, fontSize:11,alignSelf:"center", color:"#dd0057"}}>Lupa password ?</Text>

        </Content>
      </Container>
    );
  }
}
