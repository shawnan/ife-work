/**
 * Created by shawn on 2015/7/21.
 */
//还有一点没有做好的是，点击白色小按钮后是直接跳转的，不是滚动的
var changeClock;

addClickEvent($("#stop"),function(){
    clearInterval(changeClock);
})
//开始
addClickEvent($("#goLeft"),function(){
    if(changeClock)
        $("#stop").click();
    changeClock = setInterval(function(){
        changePicture(1349);
    }, 2000);
});
addClickEvent($("#goRight"),function(){
    if(changeClock)
        $("#stop").click();
    changeClock = setInterval(function(){
        changePicture(-1349);
    }, 2000);
});
//点击圆点按钮
addClickEvent($("#select-ol"),function(){
    clearInterval(s);
    var e = arguments[0] || window.event,
        target = e.srcElement ? e.srcElement : e.target;
    //scrollImg.style.right =((target.value - 1) * 1349) + "px";
    changePicture(target.value * 1349);
    if(target.id != "select-ol") {
        setClass(target);
    }
    return false;
});
//切换
var s;
var scrollImg = $("#scroll-img");
function changePicture(imgWidth){ //图片轮转
    var newLen, oldLen;
    var time = 300;              // 切换总时间
    var interval = 10;            // 切换间隔
    var speed = imgWidth / (time / interval);    // 每次切换位移量
    newLen = new Number($("#scroll-img").style.right.split("px")[0]) + imgWidth;
    oldLen = new Number($("#scroll-img").style.right.split("px")[0]);
    if(speed < 0 && oldLen <= Math.abs(imgWidth) - 100)
    {
        scrollImg.style.right = Math.abs(imgWidth * 5) + "px";
        newLen = Math.abs(imgWidth  * 4);
    }
    if(speed > 0 && oldLen >= imgWidth * 5)
    {
        scrollImg.style.right = "0px";
        newLen = imgWidth;
        //setTimeout(changePicture, 1000);
    }
    function move(){
        oldLen = new Number($("#scroll-img").style.right.split("px")[0]);
        if((0 > speed && oldLen > newLen) ||
            (0 < speed && oldLen < newLen)){
            scrollImg.style.right = oldLen + speed + "px";
            //setAll(newLen);
            s = setTimeout(move, interval);
        }
    }
    move();
    if(speed > 0)
        setLiClass(Math.floor((newLen+100) / 1349));
    else
        setLiClass(Math.abs(Math.ceil((newLen - 100) / 1349)))
}
function setClass(target){
    //alert($(".active").id);
    removeClass($(".active"), "active");
    addClass($("#"+target.id), "active");
    //document.getElementById(target.id).style.backgroundColor = "#fff";
}
function setLiClass(index){
    removeClass($(".active"), "active");
    if(index < 5)
        addClass($("#select-li" + index), "active");
    else
        addClass($("#select-li0" ), "active");
}
