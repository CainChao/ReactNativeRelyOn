/**
 * Created by yc
 *2016/7/11 0011.
 */
/**
 * Created by yc
 *2016/7/11 0011.
 */
'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state ={

        };
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    购物车模块
                </Text>
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
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});
