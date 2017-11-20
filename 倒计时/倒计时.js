/**
 * Created by Meatha on 2017/7/22.
 */

//定义的时间
var lastTime = new Date("2018-01-01 00:00:00");

//获取ID的方法
function $(id) {
     return document.getElementById(id);
}

//单位数的解决方法
function handle(num){
    if(num < 10){
        return "0"+num;
    }
    return num;
}

//显示时间
function showTime() {

    //获取当前的时间
    var nowTime = new Date();

    //定义一些变量
    var day,hour,minu,second,dif;

    //计算时间差
    var dif = lastTime - nowTime;

    //对时间差进行处理
    day =Math.floor(dif/(1000*60*60*24));
    hour = Math.floor((dif/1000/60/60)%24);
    minu = Math.floor((dif/1000/60)%60);
    second = Math.floor(dif/1000%60);

    var str = handle(day) + handle(hour) + handle(minu) + handle(second);

    var arr = document.getElementsByName("show");

    for(var i = 0; i < str.length; i++){
        arr[i].innerHTML = str[i];
    }
}

window.onload = function () {
    setInterval(showTime,1000);
}