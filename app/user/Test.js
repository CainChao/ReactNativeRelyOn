/**
 * Created by yc
 *2016/7/4 0004.
 */
/**
 * Created by ys
 * 2016/7/1 0001.
 */
'use strict';
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableNativeFeedback,
    ListView
}  from 'react-native';
export default class Test extends  Component{

    render(){

        return(
            <View style={styles.container}>
                <Test>
                    测试，你好
                </Test>
            </View>
        );
    }
    readerphone(phones){
        return(
            <View style={styles.phonelayout}>
                <Text style={styles.phonetext}>{phones[this.state.phonecout]}</Text>
                <Text style={styles.phonetitle}>联系电话{this.state.phonecout+1}</Text>
            </View>
        );
    }
    _onBackClick(){
        const {navigator} = this.props;
        if(navigator) {
            navigator.pop();
        }
        return true;
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    headlayout:{
        flex:1,
        flexDirection:'row',
        height:50,
        backgroundColor:'#efefef'
    },
    publiclayout:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#ffffff'
    },
    headback:{
        width:50,
        height:40,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    headicontext:{
        alignItems:'flex-start',
        justifyContent:'center',
        marginLeft:10
    },
    headicon:{
        width:75,
        height:75,
        alignItems:'flex-end',
        marginRight:10,
        borderRadius:50
    },
    viewline:{
        height:2,
        backgroundColor:'#efefef',
        margin:10
    },
    nameicon:{
        width:50,
        height:50,
        alignItems:'flex-end',
        justifyContent:'center'
    },
    phonelayout:{
        margin:10,
        height:50,
        flex:1,
        flexDirection:'row',
        backgroundColor:'#ffffff'
    },
    layoutexit:{
        height:50,
        backgroundColor:'#ffffff'
    },
    exittext:{
        textAlign:'center',
        fontSize:16,
        margin:10
    },
    phonetext:{
        alignItems:'flex-end',
        justifyContent:'center',
        fontSize:16,
        marginRight:10
    },
    phonetitle:{
        alignItems:'flex-start',
        justifyContent:'center',
        fontSize:16,
        marginLeft:10
    }
});