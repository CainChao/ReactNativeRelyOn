/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict'
import React, { Component } from 'react';
import {
	AppRegistry,
  	Navigator,
} from 'react-native';
import Launcher from './app/Launcher';
class EXinETian_RA extends Component {
	render() {
		var defaultName = 'Launcher';
		var defaultComponent =Launcher;
		return (
			<Navigator
				initialRoute={{params:{name:defaultName,age:0},component:defaultComponent}}
				configureScene={(route) => {
                    if (route.sceneConfig) {
                        let res=route.sceneConfig;
                        res.gestures=null;
                        return res;
                    }
                    return Navigator.SceneConfigs.FloatFromBottom;
                }}

				renderScene={(route, navigator) =>{
                    let DefaultComponent=route.component;
                    let number=0;
                    return <DefaultComponent number={number} {...route.params} navigator={navigator}/>
                }
              }
			/>
		);
	}
}
AppRegistry.registerComponent('EXinETian_RA', () => EXinETian_RA);
