import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Searchbar from "./component/Searchbar.js"
import IconBar from "./component/IconBar.js"

export default class Homescreen extends Component{
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Searchbar />,
      headerRight : <IconBar navigation={navigation}/>
    }
  };

  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});