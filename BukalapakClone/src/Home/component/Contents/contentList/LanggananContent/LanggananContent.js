import React , {Component} from "react";
import {Container, Content, Text, Button} from "native-base";
import {Image, View} from "react-native"

const LanggananContent = () => (
	<View style={{flex : 1}}>
        <Image 
	          style={{width:"100%", height:300, marginTop:40}} 
	          source={require("../../../../../assets/Account/3.png")} 
        />
        <View style={{bottom:100, marginRight:20, marginLeft:20}}>
          <Text style={{textAlign:"center", fontSize:17, marginBottom:10}}>Halaman belum dapat diakses</Text>
          <Text style={{textAlign:"center", fontSize:13, color:"#aaa"}}>
          	Kamu harus melakukan login terlebih dahulu untuk melihat halaman ini
          </Text>
        </View>

		<Button 
          block 
          danger 
          style={{bottom:70,backgroundColor:"#dd0057", marginLeft:40, marginRight:40}}
          onPress={() => navigation.navigate("Login")}
        >
            <Text>Login</Text>
        </Button>
	</View>
)

export default LanggananContent;