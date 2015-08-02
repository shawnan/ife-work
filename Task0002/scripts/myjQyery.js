/**
 * Created by Administrator on 2015/7/26.
 */

// 实现一个简单的Query
function $(selector) {
    // 可以通过id获取DOM对象，通过#标示，例如
    if(selector.match(/^#/)) {
        if(selector.match(/^#.*\s\./)) {
            //返回id为adom的DOM所包含的所有子节点中，第一个样式定义包含class的对象
            var tmp = document.getElementById(selector.substring(1, selector.indexOf(".")));
            return tmp.querySelector(selector);
        }
        else {
            // 返回id为adom的DOM对象
            return document.getElementById(selector.substr(1));
        }
    }
    if(selector.match(/^\./)) {
        // 可以通过样式名称获取DOM对象，例如
        // 返回第一个样式定义包含class的对象
        return document.querySelector(selector);
    }
    if(selector.match(/^\[/)) {
        if(selector.match(/^\[.*=.*/)) {
            // 返回第一个包含属性data-time且值为2015的对象
            var nodeList = document.getElementsByName("*");
            for(var n in nodeList) {
                if (n.getAttribute(selector.substring(1, selector.indexOf("="))) ===
                    selector.substring(selector.indexOf("="), selector.length)) {
                    return n;
                }
            }
        }
        else{
            // 可以通过attribute匹配获取DOM对象，例如
            // 返回第一个包含属性data-log的对象
            var nodeList = document.getElementsByName("*");
            for(var n in nodeList) {
                if (n.hasAttribute(selector.substring(1, selector.indexOf("=")))) {
                    return n;
                }
            }
        }
    }
    else
    {
        return document.getElementsByTagName(selector);
    }

}