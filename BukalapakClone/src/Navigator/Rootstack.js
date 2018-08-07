import React, {Component} from "react";
import {createStackNavigator} from "react-navigation"
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Homescreen from "../Home/Homescreen.js"
import Loginscreen from "../Login/Loginscreen.js"

const HomeStack = createStackNavigator(
	{
		Home: Homescreen,
		Login: Loginscreen
	},
	{
		initialRouteName: 'Home',
	    /* The header config from HomeScreen is now here */
	    navigationOptions: {
	      headerStyle: {
	        backgroundColor: '#dd0057',
	      },
	      headerTintColor: '#fff',
	      headerTitleStyle: {
	        fontWeight: 'bold',
	      },
	    },
	}
)


const Rootstack = createMaterialBottomTabNavigator(
	{
	    Home: HomeStack,
	},
	{
	    navigationOptions: ({ navigation }) => ({
	      tabBarIcon: ({ focused, tintColor }) => {
	        const { routeName } = navigation.state;
	        let iconName;
	        if (routeName === 'Home') {
	          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
	        }

	        return <Ionicons name={iconName} size={25} color={tintColor} />;
	      },
	    }),
	    initialRouteName: 'Home',
	    activeTintColor: '#dd0057',
	    inactiveTintColor: 'grey',
	    barStyle: { backgroundColor: '#fff' },
	}
)

export default Rootstack