/**
 * Created by yc
 *2016/7/11 0011.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Platform,
    Text,
    View,
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './home/Home';
import Person from './user/Person';
import ShoppingCar from './shoppingcar/ShoppingCar';

let HOME_TAB = 'homeTab';
let HOME_NORMAL = require('../images/homeview_normal.png');
let HOME_PRESS = require('../images/homeview_select.png');

let SHOPPING_TAB = 'shoppingTab';
let SHOPPING_NORMAL = require('../images/shopping_normal.png');
let SHOPPING_PRESS = require('../images/shopping_select.png');

let PERSOR_TAB ='personTab';
let PERSOR_NORMAL = require('../images/person_normal.png');
let PERSOR_PRESS = require('../images/person_select.png');

export default class MainPage extends Component {
    constructor(){
        super();
        this.state={
            selectedTab: HOME_TAB,
            tabBarShow:true
        }
    }
    //渲染每一个Tab
    _renderTabItem(img, selectedImg, tag, title, childView) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab===tag}
                renderIcon={()=><Image style={styles.tabIcon} source={img}/>}
                title={title}
                selectedTitleStyle={styles.selectedTitleStyle}
                renderSelectedIcon={()=><Image style={styles.tabIcon} source={selectedImg}/>}
                onPress={()=>this.setState({selectedTab:tag})}>
                {childView}
            </TabNavigator.Item>
        );
    }
    //每一项Tab所对应的View视图
    _createChildView(tag) {
        let renderView;
        switch (tag) {
            case HOME_TAB:
                renderView = <Home />;
                break;
            case SHOPPING_TAB:
                renderView = <ShoppingCar />;
                break;
            case PERSOR_TAB:
                renderView = <Person />;
                break;
            default:
                break;
        }
        return (<View style={styles.container}>{renderView}</View>)
    }
    render() {
        let {tabBarShow} = this.state;
        console.log(tabBarShow);
        return (
            <View style={styles.container}>
                <TabNavigator
                    hidesTabTouch={false}
                    sceneStyle={{paddingBottom: 0}}
                    tabBarStyle={tabBarShow ? styles.tabNav : styles.tabNavHide}>
                    {this._renderTabItem(HOME_NORMAL, HOME_PRESS, HOME_TAB, '首页', this._createChildView(HOME_TAB))}
                    {this._renderTabItem(SHOPPING_NORMAL, SHOPPING_PRESS, SHOPPING_TAB, '购物车', this._createChildView(SHOPPING_TAB))}
                    {this._renderTabItem(PERSOR_NORMAL, PERSOR_PRESS, PERSOR_TAB, '我的',  this._createChildView(PERSOR_TAB))}
                </TabNavigator>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabNav: {
        height: 60,
        backgroundColor: '#FFF',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderTopColor: '#E8E8E8'
    },
    tabNavHide: {
        position: 'absolute',
        top: Dimensions.get('window').height,
        height: 0
    },
    selectedTitleStyle: {
        color: '#3a84b8'
    },
    badgeBg: {
        width: 14,
        height: 14,
        marginTop: 6
    },
    badgeText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 10,
        backgroundColor: Platform.OS === 'android' ? null : 'transparent'
    },
    tabIcon: {
        height: 30,
        width: 30,
        resizeMode: 'cover'
    }
});

