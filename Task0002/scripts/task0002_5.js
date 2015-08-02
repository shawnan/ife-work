/**
 * Created by Administrator on 2015/8/2.
 */

addEvent(document, "mousedown", mouseEventHandler, false);
addEvent(document, "mousemove", mouseEventHandler, false);
addEvent(document, "mouseup", mouseEventHandler, false);
var startX;
var startY;
var lastX;
var lastY;
var moveBlock = null;
var leftBox = $("#left");
var rightBox = $("#right");
var moveFlag = false;
var mouseDiv = $("#mouse-div");
function mouseEventHandler(event){
    var event = arguments[0] || window.event,
        target = event.target ? event.target : event.srcElement;
    event.preventDefault();
    if(event.type == "mousedown") {
        moveFlag = true;
        if (hasClass(target, "block")) {
            moveBlock = target;
            lastX = startX = event.clientX;
            lastY = startY = event.clientY;
        }
    }
    if(event.type == "mousemove"){
        if(moveFlag && moveBlock != undefined) {
            console.log("last" + lastX + "," + lastY);
            console.log("now" + event.clientX + "," + event.clientY);
            console.log("move" + new Number(event.clientX - startX)+","+new Number(event.clientY - startY));
            moveBlock.style.left = new Number(event.clientX - startX) + "px";
            moveBlock.style.top = new Number(event.clientY - startY) + "px";
            lastX = event.clientX;
            lastY = event.clientY;
            moveBlock.style.cursor = "move";
        }
    }
    if(event.type == "mouseup"){
        moveFlag = false;
        if(Math.abs(leftBox.offsetLeft - moveBlock.offsetLeft) > Math.abs(rightBox.offsetLeft - moveBlock.offsetLeft))
        {
            moveBlock.parentNode.removeChild(moveBlock);
            moveBlock.style.left = "0px";
            moveBlock.style.top = "0px";
            rightBox.appendChild(moveBlock);
        }
        else
        {
            moveBlock.parentNode.removeChild(moveBlock);
            moveBlock.style.left = "0px";
            moveBlock.style.top = "0px";
            leftBox.appendChild(moveBlock);
        }

        moveBlock = null;
    }
}