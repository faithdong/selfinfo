/*
 * @Author: zhongxd 
 * @Date: 2018-03-16 00:01:52 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-03-16 16:37:03
 * realm 数据库定义
 */

import Realm from 'realm';

'use strict'
//const Realm = require('realm');

 class AccountInfoSchema extends Realm.Object{}

 AccountInfoSchema.schema = {
    name: 'AccountInfo',
    
    properties: {
       
        account_name:'string',
        login_name_one:'string',
        login_name_two:'string',
        login_pwd:'string'
    },
 };

 export default new Realm({schema: [AccountInfoSchema]});


