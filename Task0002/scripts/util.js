/**
 * Created by Administrator on 2015/7/14.
 */
// 判断arr是否为一个数组，返回一个bool值
/* 原则上可以使用instanceof操作符来检测Array，但是当存在多个全局作用域（像一个页面包含
多个frame的时候）就会出现问题。如果Array在拎一个frame中定义，就会返回false。
因此，最合适的办法是检测其原生的构造函数。
 */
function isArray(value) {
    // your implement
    //if((arr instanceof Array) || (Array.isArray(arr)))
    //    return true;
    //else
    //    return false;
    return Object.prototype.toString.call(value) == "[object Array]";
}

// 判断fn是否为一个函数，返回一个bool值
/*简单的使用过typeof来判断是否是函数也存在问题，比如Safari第四版都会对增则表达式返回“function”*/
function isFunction(value) {
    // your implement
    //if(typeof fn === "function")
    //    return true;
    //else
    //    return false;
    return Object.prototype.toString.call(value) == "[object Function]";
}


// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    // 非引用类型
    if(src == null || typeof src != "object") {
        return src;
    }
    //日期对象
    if(src instanceof Date)
        return new Date(src.getTime());
    //数组类型
    if(isArray(src))
    {
        var clone = new Array();
        for(var i = 0, len = src.length; i < len; i++)
            clone.push(src[i]);
        return clone;
    }
    //Object类型
    if(src instanceof Object)
    {
        var clone = new Object();
        for(var key in src) {
            clone[key] = arguments.callee(src[key]);
        }
        return clone;
    }
}

//返回传递给他的任意对象的类
function isClass(o){
    if(o===null) return "Null";
    if(o===undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8,-1);
}

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    // your implement
    var newArr = new Array();
    for(var a in arr)
        if(newArr.indexOf(arr[a]) == -1)
            newArr.push(arr[a]);
    return newArr;
}
//去除数组中的空白
function removeArrayBlank(arr) {
    // your implement
    var newArr = new Array();
    for(var a in arr)
        if(arr[a] !== "")
            newArr.push(arr[a]);
    return newArr;
}
// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    // your implement
    var newStr="";
    for(var i = 0; i < str.length; i++)
        if(str[i] !== ' ')
            newStr+=str[i];
    return newStr;
}
// 很多同学肯定对于上面的代码看不下去，接下来，我们真正实现一个trim
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    // your implement
    var newStr = str.replace(/(^\s*)|(\s*$)/g,"");
    return newStr;
}
function allTrim(str){
    var newStr = str.replace(/(\s*)/g,"");
    return newStr;
}
// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    // your implement
    //arr.forEach(fn);
    for(var a = 0; a<arr.length; a++)
        fn(arr[a]);
}
// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each2(arr, fn) {
    // your implement
    arr.forEach(fn);
    //for(var a = 0; a<arr.length; a++)
    //    fn(arr[a], a);
}
// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    var i = 0;
    for(var a in obj)
        i++;
    return i;
}

// 判断是否为邮箱地址
function isEmail(emailStr) {
    // your implement
    var Rex = new RegExp("^[a-z]([a-z0-9]*[-_]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})?$","g");
    return Rex.test(emailStr);
}

// 判断是否为手机号
function isMobilePhone(phone) {
    // your implement
    var Rex = /\d{11}/g;
    return Rex.test(phone);
}
// 判断element是不是有className这个样式
function hasClass(element, className) {
    // your implement
    if(element != null) {
        var reg = new RegExp('(^|\s*)' + className + '($|\s*)');
        return element.className.match(reg);
    }
    else {
        return false;
    }
}
// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    // your implement
    if(!hasClass(element, newClassName)) {
        element.className += " " + newClassName;
    }
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    // your implement
    if(hasClass(element,oldClassName)){
        var reg = new RegExp('(^|\s*)' + oldClassName +'($|\s*)');
        element.className = element.className.replace(reg, " ");
    }
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    // your implement
    if(element.parentNode === siblingNode.parentNode)
        return true;
    else
        return false;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    // your implement
    var location = new Object();
    location.x = element.screenX;
    location.y = element.screenY;
    console.log(location.x);
    console.log(location.y);
    location.x = getTop(element);
    location.y = getLeft(element);
    console.log(location.x);
    console.log(location.y);
    location.x = element.getBoundingClientRect().bottom - element.offsetHeight;
    location.y = element.getBoundingClientRect().right - element.offsetWidth;
    console.log(element.getBoundingClientRect());
    console.log(location.x);
    console.log(location.y);
    return location;
}
// your implement
//获取元素的纵坐标（相对于窗口）
function getTop(e){
    var offset=e.offsetTop;
    if(e.offsetParent!=null) offset+=getTop(e.offsetParent);
    return offset;
}
//获取元素的横坐标（相对于窗口）
function getLeft(e){
    var offset=e.offsetLeft;
    if(e.offsetParent!=null) offset+=getLeft(e.offsetParent);
    return offset;
}

// 实现一个简单的Query
function $(selector) {
    // 可以通过id获取DOM对象，通过#标示，例如
    if(selector.match(/^#/)) {
        if(selector.match(/^#.*\s\./)) {
            //返回id为adom的DOM所包含的所有子节点中，第一个样式定义包含class的对象
            var tmp = document.getElementById(selector.substring(1, selector.indexOf(".")));
            for(var c in tmp.children){
                if(hasClass(c, selector.substring(selector.indexOf(".")+1))){
                    return c;
                }
            }
            return null;
        }
        else {
            // 返回id为adom的DOM对象
            return document.getElementById(selector.substr(1));
        }
    }
    if(selector.match(/^\./)) {
        // 可以通过样式名称获取DOM对象，例如
        // 返回第一个样式定义包含class的对象
        var all = document.getElementsByTagName("*");
        for(var i = 0, len = all.length; i < len; i++){
            if(hasClass(all[i], selector.substring(selector.indexOf(".")+1))){
                return all[i];
            }
        }
        return null;
    }
    if(selector.match(/^\[/)) {
        if(selector.match(/^\[.*=.*/)) {
            // 返回第一个包含属性data-time且值为2015的对象
            var nodeList = document.getElementsByName("*");
            for(var i = 0, len = nodeList.length; i < len; i++) {
                if (nodeList[i].getAttribute(selector.substring(1, selector.indexOf("="))) ===
                    selector.substring(selector.indexOf("="), selector.length)) {
                    return nodeList[i];
                }
            }
        }
        else{
            // 可以通过attribute匹配获取DOM对象，例如
            // 返回第一个包含属性data-log的对象
            var nodeList = document.getElementsByTagName("*");
            for(var i = 0, len = nodeList.length; i < len; i++) {
                if (nodeList[i].hasAttribute(selector.substring(1, selector.indexOf("=")))) {
                    return nodeList[i];
                }
            }
        }
    }
    else
    {
        return document.getElementsByTagName(selector);
    }
}

// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener, flag) {
    // your implement
    element.addEventListener(event, listener, flag);
}

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    // your implement
    element.removeEventListener(event, listener);
}
// 实现对click事件的绑定
function addClickEvent(element, listener) {
    // your implement
    addEvent(element, "click", listener);
}
// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    // your implement
    element.onkeydown(function(event){
        if(event.keyCode == 13) {
            listener;
        }
    });
}
$.on = function(element, event, listener) {
    element.addEventListener(event, listener);
}

$.un = function(element, event, listener) {
    // your implement
    element.removeEventListener(event, listener);
}

$.click = function(element, listener) {
    addClickEvent(element, listener);
}

$.enter = function(element, listener) {
    addEnterEvent(element, listener);
}
//事件代理
// 先简单一些
function delegateEvent(element, tag, eventName, listener) {
    // your implement
    addEvent($(element), eventName, listener);
}

$.delegate = delegateEvent;

// 判断是否为IE浏览器，返回-1或者版本号
function isIE() {
    // your implement
    var isIE = window.ActiveXObject;
    if (isIE) {
        return 'IE内核';
    }
    else {
        return '非IE内核';
    }
}
//5.1
// 设置cookie
function setCookie(cookieName, cookieValue, expiredays) {
    // your implement
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = cookieName + "=" + escape(cookieValue)+  ((expiredays==null) ? "" : ";expires=" + exdate.toGMTString());
}

// 获取cookie值
function getCookie(cookieName) {
    // your implement
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(cookieName + "=")
        if (c_start!=-1)
        {
            c_start=c_start + cookieName.length+1
            c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        }
    }
    return ""
}

//6.1
//学习Ajax，并尝试自己封装一个Ajax方法。实现如下方法：
function ajax(url, options) {
    // your implement
    var xmlhttp = null;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    var type = "post";
    if(options.type != null) {
        type = options.type;
    }
    var opts = [];
    for(var opt in options.data){
        if(opt != "type") {
            opts.add(opt + "=" + opt.value);
        }
    }
    opts = opts.join("&");
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            options.onsuccess(xmlhttp.responseText, xmlhttp);
        }
        else if(options.onfail != undefined)
        {
            options.onfail(xmlhttp.responseText, xmlhttp);
        }
    }
    xmlhttp.open(type, url+ "?" + opts, true);
    xmlhttp.send();
}