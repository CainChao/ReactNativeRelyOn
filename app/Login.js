/**
 * yc
 */
'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ToastAndroid,
    Platform,
    Image,
    BackAndroid,
    TextInput,
    TouchableNativeFeedback,
    Navigator,
} from 'react-native';
import * as url from './constants/ApiConstans';
//import RequestDate from './network/RequestBuilder'
import MainPage from  './MainPage';
export default class Login extends Component {
    constructor(props){
    super(props);
    this.state ={
      loginAccount:null,
      loginPws:null,
      logindata:null,
        loaded:false,
    };
  }
    render() {
        return (
         < View style = { styles.container } >
                < Image
                  style = { styles.headimage }
                  source = { require('../images/logo.png') }
                />
                < View
                    style = { styles.inputlayout } >
                        < Image
                            style = { styles.iconleft }
                            source = { require('../images/login_account.png') }/>
                        < TextInput style = { styles.inputtext }
                            placeholder = '请输入账号'
                            multiline = { true }
                            autoFocus = { true }
                            numberOfLines = {1}
                            onChangeText ={(text) => this.setState({loginAccount:text})}
                            />
                </View>
                < View
                    style = { styles.inputlayout } >
                    < Image
                        style = { styles.iconleft }
                        source = { require('../images/login_pws.png') }/>
                    < TextInput
                        style = { styles.inputtext }
                        placeholder = '请输入密码'
                        multiline = { true }
                        secureTextEntry = { true }
                        autoFocus = { true }
                        numberOfLines = {1}
                        onChangeText ={(text) => this.setState({loginPws:text})}/>
                </View>
                < TouchableNativeFeedback
                    onPress = {() => this._onButtonCommit(this.state.loginAccount,this.state.loginPws)}>
                    <View
                      style={styles.style_view_commit}  >
                        <Text style={{color:'#fff'}}>
                           登录
                        </Text>
                    </View>
                </TouchableNativeFeedback>

        </View>
        );
    }
    _onButtonCommit(account,pws) {
        const {navigator} = this.props;
        if(account==null){
            ToastAndroid.show('用户名不能为空',ToastAndroid.SHORT);
        }else if(pws == null){
            ToastAndroid.show('密码不能为空',ToastAndroid.SHORT);
        }else{
            console.log('frist'+this.state.loaded);
            console.log('requestdata'+this.state.requestdata);
            if(navigator){
                navigator.push({
                    name:'MainPage',
                    component:MainPage
                });
            }
            //
            //var params = {'app_source':'5','user':account,'password':pws};
            //var requestJson = this.RequestBuilder(params,url.LOGIN);
            //console.log('requestJson'+requestJson.toString());
            //console.log('requestJsonResult'+requestJson.result);
            //if(requestJson.result===0){
            //    ToastAndroid.show('登陆成功，正在为您跳转...',ToastAndroid.SHORT);
            //
            //}else{
            //    ToastAndroid.show(requestJson.data.error_msg+'',ToastAndroid.SHORT);
            //}
            //    this.RequestBuilder(params,url.LOGIN);
            //    let requestJson = this.state.logindata;
            //ToastAndroid.show('正在请求数据。。。',1000);
            //setTimeout(()=> {
            //    console.log('timeout....loaded'+this.state.loaded);
            //    console.log('timeout....logindata'+this.state.logindata);
            //    if(this.state.loaded){
            //        if(navigator){
            //            navigator.push({
            //                name:'UserInfor',
            //                component:UserInfor,
            //                params:{
            //                    requestJson
            //                }
            //            });
            //        }
            //    }
            //}, 1000);
        }
    }
    RequestBuilder(params,address){
       return fetch(url.PATH_APP_CONTENT+address,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify(params)
        }).then((response) => response.json())
           //.then((responseData) =>{
           //    this.setState({
           //        logindata:responseData,
           //        loaded:true
           //    });
           //})
            .catch(function(error){
                ToastAndroid.show(error.toString(),ToastAndroid.SHORT);
            });
    }
    //componentDidUpdate(prevProps,prevState){
    //    console.log('componentDidUpdate..............loaded'+this.state.loaded);
    //    console.log('componentDidUpdate.............logindata'+this.state.logindata);
    //    if(this.state.loaded){
    //        //const {navigator} = this.props;
    //        let requestJson = this.state.logindata;
    //        if(requestJson.result==0){
    //            console.log(requestJson.result);
    //            if(prevProps.navigator){
    //                prevProps.navigator.push({
    //                        name:'MainPage',
    //                        component:MainPage,
    //                        params:{
    //                            requestJson
    //                        }
    //                    });
    //            }
    //            }else{
    //                ToastAndroid.show(requestJson.data.error_msg,ToastAndroid.SHORT);
    //            }
    //    }
    //}
    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }

    }
    componentWillUnmount() {
            if (Platform.OS === 'android') {
                BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
            }

    }
    onBackAndroid = () => {
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            return false;
        }
        this.lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        return true;
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    headimage: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 105,
        height: 168,
        marginTop: 50,
    },
    inputlayout: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        width: 200,
    },
    iconleft: {
        width: 34,
        height: 34,
    },
    style_view_commit: {
        backgroundColor: '#63B8FF',
        height: 35,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        marginTop: 10,
    },
    contantlayout: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    inputtext: {
        width: 166,
    },
});
