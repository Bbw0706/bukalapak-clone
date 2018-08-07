import React, {Component} from 'react';
import {Platform, StyleSheet,  View} from 'react-native';
import { Container, Icon,Header,Text, Content, Button} from 'native-base';

import SwipersImage from "./component/SwipersImage.js"

export default class Loginscreen extends Component{
   static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: '#fff',
        elevation : 0
      },
      headerLeft: (
        <Text style={{marginLeft:20}}>Keuntungan Mendaftar</Text>
      ),
      headerRight: (
        <Text style={{marginRight:20, color : "#dd0057"}}>Menu Lain</Text>
      ),
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTintColor: '#000',
    };
  };
  render() {
    return (
      <Container>
        <Content>
          
          <SwipersImage />

          <View style={{flex : 1, flexDirection:"row", margin:22,marginTop:10, justifyContent:"center"}}>
            <View style={{width : "40%", marginRight:5}}>
              <Button block light iconLeft onPress={() => this.props.navigation.navigate("Login")}>
                <Text>Login</Text>
              </Button>
            </View>

            <View style={{width : "40%", marginLeft:5}}>
              <Button block danger iconLeft style={{backgroundColor:"#dd0057"}}>
                <Text>Daftar Akun</Text>
              </Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
