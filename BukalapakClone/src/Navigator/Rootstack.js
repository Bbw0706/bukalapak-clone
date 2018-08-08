import React, {Component} from "react";
import {createStackNavigator} from "react-navigation"
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Icon} from "native-base"

import Homescreen from "../Home/Homescreen.js"
import Loginscreen from "../Login/Loginscreen.js"
import Accountscreen from "../Account/Accountscreen.js"
import Cartscreen from "../Cart/Cartscreen.js"
import Transactionscreen from "../Transaction/Transactionscreen.js"
import HandphoneScreen from "../HandphoneView/HandphoneScreen.js"
import PaymentScreen from "../Payment/PaymentScreen.js"
import BukamallScreen from "../Bukamall/BukamallScreen.js"

const HomeStack = createStackNavigator(
	{
		Home: Homescreen,
		Login: Loginscreen,
		Handphone : HandphoneScreen,
		Payment : PaymentScreen
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

const BukamallStack = createStackNavigator(
	{
		Bukamall: BukamallScreen
	},
	{
		initialRouteName: 'Bukamall',
	    /* The header config from HomeScreen is now here */
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

const TransactionStack = createStackNavigator(
	{
		Transaction : Transactionscreen
	},
	{
		initialRouteName:"Transaction",
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
	    Bukamall : BukamallStack,
	    Cart: CartStack,
	    Transaction: TransactionStack,
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
	        } else if (routeName === 'Transaction') {
	          iconName = `md-repeat`;
	      	} else if (routeName === 'Account') {
	          iconName = `ios-people`;
	      	}

	      	if(routeName === "Bukamall"){
	        	return <Icon type="FontAwesome" name="diamond" style={{color:tintColor, fontSize:20}} />;
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