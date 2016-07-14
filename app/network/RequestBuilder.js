/**
 * Created by yc
 * 2016/6/30 0030.
 */
'use strict'
import * as url from '../constants/ApiConstans';
import {ToastAndroid} from 'react-native';
export default class RequestDate extends Component{
    /**
     *
     * @param params   传入json格式
     * @param address   请求的地址
     * @returns {Promise.<T>} 返回一个json数据
     * @constructor
     */
    static RequestBuilder(params,address){
        return fetch(url.PATH_APP_CONTENT+address,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify(params)
        }).then(response => response.json())
            .catch((error) =>{
                console.log('error:'+error);
                ToastAndroid.show(error.toString(),ToastAndroid.SHORT);
            });
    }
}