import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import { Container} from 'native-base';

import Searchbar from "./component/Searchbar.js"
import IconBar from "./component/IconBar.js"
import ContentScreen from "./component/Contents/ContentScreen.js"

export default class Homescreen extends Component{
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Searchbar />,
      headerRight : <IconBar navigation={navigation}/>
    }
  };

  render() {
    return (
      <Container style={styles.container}>
        
        <ContentScreen {...this.props}/>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  }
});
