/**
 * Created by Meatha on 2017/7/22.
 */
//获取ID的方法
function $(id) {
    return document.getElementById(id);
}

//定义两个计数变量
var index = 2;
var flagTop = 1;

//改变背景图片
function changeImg(){
    var leftImg = $("leftPic");
    var rightBottom = $(index);
    leftImg.style.backgroundImage ="url(images/bigpic"+index+".jpg)";
    rightBottom.style.backgroundImage = "url(images/border.png)";
    index++;
    if(index > 3){
        index = 1;
    }

    //消除背景
    var rightTop = $(flagTop);
    rightTop.style.backgroundImage ="none";
    flagTop++;
    if(flagTop > 3){
        flagTop = 1;
    }
}

window.onload = function () {
    setInterval(changeImg,2000);
}


