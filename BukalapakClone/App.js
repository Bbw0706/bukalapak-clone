import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Rootstack from "./src/Navigator/Rootstack.js"

export default class App extends Component{
  render() {
    return (
      <Rootstack />
    );
  }
}

