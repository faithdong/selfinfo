/*
 * @Author: zhongxd 
 * @Date: 2018-03-16 16:19:51 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-03-16 16:26:25
 * 公共类方法
 */

 class Utils {
     /**
      * 生成UUID
      */
    static UUID(){
        function S4() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
         }
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
        //return uuid;
    }
 }
 export default Utils;
