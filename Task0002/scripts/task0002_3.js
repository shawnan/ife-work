/**
 * Created by shawn on 2015/7/21.
 */
//还有一点没有做好的是，点击白色小按钮后是直接跳转的，不是滚动的
/*
图片数量及URL均在HTML中写好
可以配置轮播的顺序（正序、逆序）、是否循环、间隔时长
图片切换的动画要流畅
在轮播图下方自动生成对应图片的小点，点击小点，轮播图自动动画切换到对应的图片
*/
//换方向第一下有问题
var changeClock;
var picWidth = 800;
var cur;
addClickEvent($("#stop"),function(){
    clearInterval(changeClock);
})
//开始
addClickEvent($("#goLeft"),function(){
    if(changeClock)
        $("#stop").click();
    changeClock = setInterval(function(){
        changePicture(-picWidth);
    }, 2000);
});
addClickEvent($("#goRight"),function(){
    if(changeClock)
        $("#stop").click();
    changeClock = setInterval(function(){
        changePicture(picWidth);
    }, 2000);
});
//点击圆点按钮
var circles = document.getElementById('select-ol').getElementsByTagName('li');
console.log(circles);
for(var i = 0, len = circles.length; i < len; i++){
    $.click(circles[i], function(){
        clearInterval(changeClock);
        var e = arguments[0] || window.event,
            target = e.srcElement ? e.srcElement : e.target;
        var oldLen = parseFloat(scrollImg.style.left);
        var newLen = -((target.value + 1) * picWidth);
        if (picWidth < 0){
            changePicture(newLen - oldLen);
        } else {
            changePicture(oldLen - newLen);
        }
        //scrollImg.style.left = -((target.value + 1) * picWidth) + "px";
        if(target.id != "select-ol") {
            setClass(target);
        }
        return false;
    });
}

//切换
scrollImg = $("#scroll-img");
function changePicture(imgWidth){ //图片轮转
    var newLen, oldLen;
    var time = 300;              // 切换总时间
    var interval = 10;            // 切换间隔
    var speed = imgWidth / (time / interval);    // 每次切换位移量
    newLen = parseFloat(scrollImg.style.left) + imgWidth; //切换后right值
    oldLen = parseFloat(scrollImg.style.left);  //切换前right值
    if(speed < 0 && oldLen <= (imgWidth * 6))
    {
        scrollImg.style.left = imgWidth + "px";
        newLen = imgWidth * 2;
    }
    if(speed > 0 && oldLen >= 0)
    {
        scrollImg.style.left = -imgWidth * 5 + "px";
        newLen = -imgWidth * 4;
    }
    function move(){
        var scrollImg = $("#scroll-img");
        oldLen = parseFloat(scrollImg.style.left);
        if((speed < 0 && newLen < oldLen) ||
            (speed > 0 && newLen > oldLen)){
            scrollImg.style.left = oldLen + speed + "px";
            s = setTimeout(move, interval);
        }
    }
    move();
    if(speed > 0){
        if(Math.abs(newLen) <= 100){
            setLiClass(4);
        } else {
            setLiClass(Math.abs(Math.floor((newLen) / picWidth) + 1));
        }
    } else {
        setLiClass(Math.abs(Math.ceil((newLen) / picWidth) + 1))
    }
}
function setClass(target){
    //alert($(".active").id);
    removeClass($(".active"), "active");
    addClass($("#"+target.id), "active");
    //document.getElementById(target.id).style.backgroundColor = "#fff";
}
function setLiClass(index){
    removeClass($(".active"), "active");

    if(index < 5){
        addClass($("#select-li" + index), "active");
    } else {
        addClass($("#select-li0" ), "active");
    }
}
