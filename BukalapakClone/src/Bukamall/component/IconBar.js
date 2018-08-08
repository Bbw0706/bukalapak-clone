import React, {Component} from "react";
import {Button, Icon, View} from "native-base";
import {TouchableOpacity} from "react-native";

const IconBar = ({navigation}) => (
  <View style={{flex : 1, flexDirection:"row", marginRight:25, marginLeft :30}}>
	<View style={{flex : 1, marginRight:18, marginLeft : 10}}>
		<TouchableOpacity iconLeft transparent primary onPress={() => navigation.navigate("Login")}>
	      <Icon name='ios-notifications' style={{color: "#dd0057"}}/>
	    </TouchableOpacity>
    </View>

    <View style={{flex : 1}}>
		<TouchableOpacity iconLeft transparent primary onPress={() => navigation.navigate("Login")}>
	      <Icon name='ios-chatbubbles' style={{color: "#dd0057"}}/>
	    </TouchableOpacity>
    </View>
  </View>
)

export default IconBar