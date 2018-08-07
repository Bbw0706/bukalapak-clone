import React, {Component} from "react";
import {createStackNavigator} from "react-navigation"
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Homescreen from "../Home/Homescreen.js"
import Loginscreen from "../Login/Loginscreen.js"
import Accountscreen from "../Account/Accountscreen.js"
import Cartscreen from "../Cart/Cartscreen.js"

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

const AccountStack = createStackNavigator(
	{
		Account : Accountscreen,
		Login: Loginscreen		
	},
	{
		initialRouteName:"Account",
		navigationOptions: {
	      headerStyle: {
	        backgroundColor: '#fff',
	      },
	      headerTintColor: '#000',
	      headerTitleStyle: {
	        fontWeight: 'bold',
	      },
	    },
	}
)

const CartStack = createStackNavigator(
	{
		Cart : Cartscreen,
	},
	{
		initialRouteName:"Cart",
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
	    Cart: CartStack,
	    Account : AccountStack
	},
	{
	    navigationOptions: ({ navigation }) => ({
	      tabBarIcon: ({ focused, tintColor }) => {
	        const { routeName } = navigation.state;
	        let iconName;
	        if (routeName === 'Home') {
	          iconName = `ios-home`;
	        } else if (routeName === 'Cart') {
	          iconName = `md-cart`;
	        }	else if (routeName === 'Account') {
	          iconName = `ios-people`;
	      	}
	        return <Ionicons name={iconName} size={25} color={tintColor} />;
	      },
	    }),
	    shifting:true,
	    initialRouteName: 'Home',
	    activeTintColor: '#dd0057',
	    inactiveTintColor: 'grey',
	    barStyle: { backgroundColor: '#fff' },
	}
)

export default Rootstack