/**
 * Created by Administrator on 2015/7/31.
 */

//var suggestData = ['Text1', 'Text23', 'Textsdf'];
var wordsLi = $("#tips-div .active");
addEvent(window, "keydown", function(event){

    var e = arguments[0] || window.event,
        target = e.srcElement ? e.srcElement : e.target;
    if(event.keyCode === 39 || event.keyCode === 37) //
    {

    }
    if(event.keyCode === 40) //下
    {
        if(wordsLi == null)
            wordsLi = $("#tips-div").firstChild.firstChild;
        else if(wordsLi.nextSibling != null && wordsLi != wordsLi.parentNode.lastChild)
        {
            wordsLi = wordsLi.nextSibling;
        }
        else
        {
            wordsLi =  $("#tips-div").firstChild.firstChild;
        }
        if($(".active") != null) {
            removeClass($(".active"), "active");
        }
        addClass(wordsLi, "active");
        event.preventDefault();
        return false;
    }
    else if(event.keyCode === 38){ //上
        if(wordsLi == null)
            wordsLi = $("#tips-div").firstChild.lastChild;
        else if(wordsLi.previousSibling != null && wordsLi != wordsLi.parentNode.firstChild)
        {
            wordsLi = wordsLi.previousSibling;
        }
        else
        {
            wordsLi =  $("#tips-div").firstChild.lastChild;
        }
        if($(".active") != null) {
            removeClass($(".active"), "active");
        }
        addClass(wordsLi, "active");
        event.preventDefault();
        return false;
    }
    else if(event.keyCode === 13) { //Enter
        $("#search-input").value = wordsLi.innerText;
    }
    else
    {
        //自定义数据模式。
//            if($("#search-input").value.length > 0){
//                $("#tips-div").innerText = "";
//                $("#tips-div").hidden=false;
//                var ul = document.createElement("ul");
//                for(var i = 0, len = suggestData.length; i < len; i++)
//                {
//                    var li = document.createElement("li");
//                    li.innerText =suggestData[i];
//                    ul.appendChild(li);
//                }
//                $("#tips-div").appendChild(ul);
//            } else {
//                $("#tips-div").innerText = "";
//                $("#tips-div").hidden = true;
//            }
        if($("#tips-div").hidden === true)
        {
            //服务器端获取数据模式
            ajax("http://localhost:8888/suggest",
                {
                    type:"post",
                    onsuccess:function(data, xhr){
                        var data = data.split(",");
                        $("#tips-div").innerText = "";
                        $("#tips-div").hidden=false;
                        var ul = document.createElement("ul");
                        for(var i = 0, len = data.length; i < len; i++)
                        {
                            var li = document.createElement("li");
                            li.innerText =data[i];
                            ul.appendChild(li);
                        }
                        $("#tips-div").appendChild(ul);
                    }
                });
        }
    }
});
addClickEvent($("#tips-div"), function(){
    var e = arguments[0] || window.event,
        target = e.srcElement ? e.srcElement : e.target;
    if($(".active") != null) {
        removeClass($(".active"), "active");
    }
    addClass(target, "active");
    $("#search-input").value = target.innerText;
});
addEvent($("#tips-div"), "mouseover", function(){
    var e = arguments[0] || window.event,
        target = e.srcElement ? e.srcElement : e.target;
    if($(".active") != null) {
        removeClass($(".active"), "active");
    }
    if(target != $("#tips-div"))
        addClass(target, "active");
});