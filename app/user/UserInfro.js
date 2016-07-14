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
    TouchableOpacity,
    ListView
}  from 'react-native';
export default class UserInfor extends  Component{
   // var phonecout =0;
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
        this.state ={
            dataSource:ds.cloneWithRows(['13800000000','15000000000','13200000000']),
            phonecout:0
        };
        const {navigator} = this.props;

    }
    render(){
      //  const {response, navigator} = this.props;
        return(
            <View >
                <View style={styles.headlayout}>
                    <TouchableOpacity
                        onPress={ () =>this._onBackClick() }>
                        <Image style={styles.headback}
                               source={require('../../images/setting_back_bg.png')}/>
                    </TouchableOpacity >
                    <Text style={styles.container}>
                        个人信息
                    </Text>
                </View>
                <View style={styles.headiconlayout}>
                    <Text style={styles.headicontext}>头像</Text>
                    <Text style={styles.container}></Text>
                    <Image
                        style={styles.headicon}
                        source={require('../../images/default_head_icon.png')}/>
                </View>
                <View style={styles.viewline}/>
                <View style={styles.publiclayout}>
                    <Text style={styles.headicontext}>
                        呢称
                    </Text>
                    <Text style={styles.name}>
                        名字
                    </Text>
                    <Image
                        style={styles.nameicon}
                        source={require('../../images/perinfor_arrow.png')}/>
                </View>
                    <ListView
                        dataSource={this.state.dataSource}
                        style={styles.listviewstyle}
                        initialListSize={3}
                        renderRow ={(rowData)=>
                        <View style={styles.phonelayout}>
                            <Text style={styles.phonetitle}>联系电话</Text>
                             <Text style={styles.phonetext}>{rowData}</Text>
                        </View>}
                    />
                <View style={styles.layoutexit}>
                    <Text style={styles.exittext}>退出登陆</Text>
                </View>
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
        flex:1,
        textAlign:'center'
    },
    headlayout:{
        flex: 1,
        flexDirection:'row',
        alignItems: 'center',
        height:40,
        backgroundColor:'#efefef'
    },
    publiclayout:{
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
        height:40,
        backgroundColor:'#ffffff'
    },
    headback:{
        width:40,
        height:40
    },
    headiconlayout:{
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
        height:80,
        backgroundColor:'#ffffff'
    },
    headicontext:{
        marginLeft:10,
        alignItems:'center',
        justifyContent:'center'
    },
    headicon:{
        width:75,
        height:75,
        alignItems:'flex-end',
        justifyContent:'center'
    },
    viewline:{
        height:2,
        backgroundColor:'#efefef',
        margin:5
    },
    nameicon:{
        width:40,
        height:40,
        alignItems:'flex-end',
        justifyContent:'center'
    },
    name:{
        flex:1,
        alignItems:'center',
        textAlign:'right'
    },
    phonelayout:{
        marginTop:5,
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor:'#ffffff'
    },
    layoutexit:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        height:40,
        backgroundColor:'#ffffff',
        marginTop:5
    },
    exittext:{
        textAlign:'center',
        fontSize:16
    },
    phonetext:{
        flex:1,
        alignItems:'center',
        textAlign:'right',
        fontSize:16,
        marginRight:10
    },
    phonetitle:{
        alignItems:'flex-start',
        justifyContent:'center',
        fontSize:16,
        marginLeft:10
    },
    listviewstyle:{
        height:140,
        overflow:'hidden'
    },
});