import React , {Component} from "react";
import {Container, Content, Text, Button} from "native-base";
import {Image, View} from "react-native"

const FavoritContent = ({navigation}) => (
	<View style={{flex : 1}}>
        <Image 
	          style={{width:"100%", height:300, marginTop:40}} 
	          source={require("../../../../../assets/Account/4.png")} 
        />
        <View style={{bottom:100, marginRight:20, marginLeft:20}}>
          <Text style={{textAlign:"center", fontSize:13, color:"#aaa"}}>
          	Segera login di Bukalapak agar kamu bisa menandai berbagai macam barang favoritmu
          </Text>
        </View>

        <Button 
          block 
          danger 
          style={{bottom:35,backgroundColor:"#dd0057", marginLeft:40, marginRight:40}}
          onPress={() => navigation.navigate("Login")}
        >
          <Text>Login</Text>
        </Button>
	</View>
)

export default FavoritContent;