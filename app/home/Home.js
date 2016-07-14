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
    ScrollView,
    TextInput,
    Image
} from 'react-native';
import ScrollableTabView ,{ScrollableTabBar,}from 'react-native-scrollable-tab-view';
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state ={

        };
    }
    render(){
        return(
            <ScrollableTabView
                initialPage={0}
                renderTabBar={() => <ScrollableTabBar />}
            >
                <Text tabLabel='Tab #1'>Tab1</Text>
                <Text tabLabel='Tab #2 '>Tab2</Text>
                <Text tabLabel='Tab #3 '>Tab3</Text>
                <Text tabLabel='Tab #4 '>Tab4</Text>
                <Text tabLabel='Tab #5'>Tab5</Text>
                <Text tabLabel='Tab #6'>Tab6</Text>
                <Text tabLabel='Tab #7 '>Tab7</Text>
                <Text tabLabel='Tab #8 '>Tab8</Text>
                <Text tabLabel='Tab #9 '>Tab9</Text>
                <Text tabLabel='Tab #10'>Tab10</Text>
            </ScrollableTabView>
        );
    }
    _scrollOnScroll(){}
}
const styles = StyleSheet.create({
    headlelayout:{
        flexDirection:'row',
        height:50,
        backgroundColor:'#ffffff'
    },
    headleicon:{
      width:40,
        height:40,
    },
    headleinput:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    scrollstyles:{
        flex:1,
        backgroundColor:'#ff0000',
    },
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
