/**
 * Created by shawn on 2015/7/18.
 */
//$.on($.("#calc-date"), "click", calcDate);
document.getElementById("calc-date").addEventListener("click",calcDate);
function calcDate() {
    var inputArray = $("#input-date").value.split("-");
    var inputDate = new Date();
    inputDate.setFullYear(inputArray[0], inputArray[1], inputArray[2]);

    var nowDate = new Date();
    var seconds = (inputDate.getTime() -nowDate.getTime())/ 1000;
    var year = seconds/(60*24*365);
    console.log(year);
    var month = (seconds%(60*24*365))/30;
    var day = (seconds%(60*24*365))%30;
    $("#label-date").innerHTML =  year +"年" + month + "月"  + day +"天";

}