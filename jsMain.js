
var txtScript;
var basedel = 50

$(document).ready(new function() {
    txtScript = document.getElementById("txtScript");
    setTimeout(()=>{
        txtScript.innerHTML = "Security check failed.";
        $("#txtScript").animate({
            opacity: 1.0
        }, 1000);
        setTimeout(()=>{tweenTxt(txtScript,"no u.",50)},3000)
    },1000)
});

function tweenTxt(txt,target,del){
    function tweenTxtBlank(obj,str,target,del){
        var len = str.length;
        obj.innerHTML = str
        if (len>0){
            var newval = str.substring(0,len-1);   
            setTimeout(()=>{tweenTxtBlank(obj,newval,target,del)},del);
        }else{
            tweenBlancToText(obj,str,target,del);
        }
    }
    function tweenBlancToText(obj,str,target,del){
        var len = str.length;
        var tlen = target.length;
        obj.innerHTML = str
        if (len<tlen){
            var newval = target.substring(0,len+1);   
            setTimeout(()=>{tweenBlancToText(obj,newval,target,del)},del);
        }
    }
    var str1 = txt.innerHTML;
    tweenTxtBlank(txt,str1,target,del);
}
