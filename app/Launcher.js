/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
} from 'react-native';
import Login from './Login'
export default class Laucher extends Component {
  constructor(props) {
    super(props);
    var {navigator} = props;
    setTimeout(()=> {
      navigator.replace({name: 'Login', component: Login})
    }, 1000);
  }
  render() {
    return (
          <View style={styles.container}>
            <Text>程序启动中。。。。</Text>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    width:360 ,
    height:640 ,
  },
});


