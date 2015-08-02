/**
 * Created by Administrator on 2015/7/27.
 */
//6.3
/*
 第一阶段
 在页面中，有一个单行输入框，一个按钮，输入框中用来输入用户的兴趣爱好，允许用户用半角逗号来作为不同爱好的分隔。
 当点击按钮时，把用户输入的兴趣爱好，按照上面所说的分隔符分开后保存到一个数组，过滤掉空的、重复的爱好，在按钮下方创建一个段落显示处理后的爱好。
 第二阶段
 单行变成多行输入框，一个按钮，输入框中用来输入用户的兴趣爱好，允许用户用换行、空格（全角/半角）、逗号（全角/半角）、顿号、分号来作为不同爱好的分隔。
 当点击按钮时的行为同上
 第三阶段
 用户输入的爱好数量不能超过10个，也不能什么都不输入。当发生异常时，在按钮上方显示一段红色的错误提示文字，并且不继续执行后面的行为；当输入正确时，提示文字消失。
 同时，当点击按钮时，不再是输出到一个段落，而是每一个爱好输出成为一个checkbox，爱好内容作为checkbox的label。
 */
//    $.click($("#submitBtn"), function(){
//        var inputStr = $("#inputText").value;
//        inputStr = allTrim(inputStr);
//        var inputArr = inputStr.split(",");
//        inputArr = uniqArray(inputArr);
//        inputArr = removeArrayBlank(inputArr);
//        //each(inputArr, );
//        $("#showText").innerHTML = inputArr.join("-");
//    });
//    $.click($("#submitBtn"), function(){
//        $("#showText").innerHTML = getInputArr.join("-");
//    });
$.click($("#submitBtn"), function(){
    var interestArr = getInputArr();
    for(var i= 0,len=interestArr.length;i<len;i++)
    {
        var che = document.createElement("input");
        che.type="checkbox";
        che.name="interestCheckBox";
        $("#showDiv").appendChild(che);
        var lab = document.createElement("label");
        lab.innerHTML = interestArr[i].toString();
        $("#showDiv").appendChild(lab);
    }
    $("#inputText").value = "";
});

function getInputArr(){
    var inputStr = $("#inputText").value;
    var inputArr = splitAll(inputStr);
    inputArr = uniqArray(inputArr);
    inputArr = removeArrayBlank(inputArr);
    return inputArr;
}
//根据换行、空格（全角/半角）、逗号（全角/半角）、顿号、分号来作为分隔对字符串进行分隔
function splitAll(str)
{
    str = str.replace(/(\n)/g,";");//所有换行符替换为分号
    str = str.replace(/(\s)/g,";");//所有空格替换为分号
    str = str.replace(/(,)/g,";");//所有半角逗号替换为分号
    str = str.replace(/(，)/g,";");//所有全角逗号替换为分号
    str = str.replace(/(、)/g,";");//所有顿号替换为分号
    return str.split(";");//按分号切割
}
addEvent($("#inputText"), "keydown", function(){
    var inputArr = getInputArr();
    addClass($("#inputTips"), "redText");
    if(inputArr.length < 1) {
        $("#inputTips").innerHTML = "请输入至少一个兴趣";
    } else if(inputArr.length > 10){
        $("#inputTips").innerHTML = "最多只能输入十个兴趣";
    } else {
        $("#inputTips").innerHTML = "";
    }
});