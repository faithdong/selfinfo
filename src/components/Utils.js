/*
 * @Author: zhongxd 
 * @Date: 2018-03-16 16:19:51 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-03-27 14:56:40
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

    static getColor(){
        //定义字符串变量colorValue存放可以构成十六进制颜色值的值
        var colorValue="0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
        //以","为分隔符，将colorValue字符串分割为字符数组["0","1",...,"f"]
        var colorArray = colorValue.split(",");
         var color="#";//定义一个存放十六进制颜色值的字符串变量，先将#存放进去
          //使用for循环语句生成剩余的六位十六进制值
         for(var i=0;i<6;i++){
              //colorArray[Math.floor(Math.random()*16)]随机取出
             // 由16个元素组成的colorArray的某一个值，然后将其加在color中，
             //字符串相加后，得出的仍是字符串
              color+=colorArray[Math.floor(Math.random()*16)];
         }
         return color;
    }
 }
 export default Utils;
