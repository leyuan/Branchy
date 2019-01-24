var oBtn = document.getElementById('btn');

var idtx = document.getElementById('idtx');
var creatortx = document.getElementById('creatortx');
var cellnotx = document.getElementById('cellnotx');
var adaptiontx = document.getElementById('adaptiontx');
var surviveabilitytx = document.getElementById('surviveabilitytx');
var divisiontx = document.getElementById('divisiontx');
var idtx = document.getElementById('idtx');
var environmenttx = document.getElementById('environmenttx');
var daytx = document.getElementById('daytx');
var totoalscoretx = document.getElementById('totoalscoretx');
var finaltitletx = document.getElementById('finaltitletx');
var belongtx = document.getElementById('belongtx');


var check =0;
var widtx = document.getElementById('widtx');
var wcellnotx = document.getElementById('wcellnotx');
var wadaptiontx = document.getElementById('wadaptiontx');
var wsurviveabilitytx = document.getElementById('wsurviveabilitytx');
var wdivisiontx = document.getElementById('wdivisiontx');
var wenvironmenttx = document.getElementById('wenvironmenttx');
var wdaytx = document.getElementById('wdaytx');
var wtotoalscoretx = document.getElementById('wtotoalscoretx');
var wstarttx = document.getElementById('wstarttx');
var wendtx = document.getElementById('wendtx');

var savedbelong=0;
var changed = 0;
var counter = 0;
var endcounter= 48;
var belongrecorder=0;

var id=0;
var creator="";
var cellno=0;
var adaption=0;
var surviveability=0;
var division=0;
var environment=0;
var day=0;
var totoalscore=0;
var finaltitle="";
var belong = 0;

var wid=0;
var wcellno=0;
var wadaption=0;
var wsurviveability=0;
var wdivision=0;
var wenvironment=0;
var wday=0;
var wtotoalscore=0;
var wstart=0;
var wend=0;

var dappAddress = "n1kANa7WxWXEFZhkAfYo9WQSQ3yGGQUq8cQ";
var dappAddress2 = "n1gFbEA3c8W6fAHgEhCNYoYBDyN7jCNmG7T";

var allreadcell = [];

var newcellinput= "";
var neworldinput="";
var newcellworldinput ="";

function generalupdate(){
    addWorld();
    idtx.innerHTML= id;
    creatortx.innerHTML= creator;
    cellnotx.innerHTML= cellno;
    adaptiontx.innerHTML= adaption;
    surviveabilitytx.innerHTML= surviveability;
    divisiontx.innerHTML= division;
    environmenttx.innerHTML= environment;
    daytx.innerHTML= day;
    totoalscoretx.innerHTML=totoalscore;
    finaltitletx.innerHTML=finaltitle;
    belongtx.innerHTML=belong;
    
    widtx.innerHTML=wid;
    wcellnotx.innerHTML=wcellno;
    wadaptiontx.innerHTML=wadaption;
    wsurviveabilitytx.innerHTML=wsurviveability;
    wdivisiontx.innerHTML=wdivision;
    wenvironmenttx.innerHTML=wenvironment;
    wdaytx.innerHTML=wday;
    wtotoalscoretx.innerHTML=wtotoalscore;
    wstarttx.innerHTML=wstart;
    wendtx.innerHTML=wend;
    
    
    var cellread = new Object();
    cellread.id = id;
    cellread.creator = creator;
    cellread.cellno = cellno;
    cellread.adaption = adaption;
    cellread.surviveability = surviveability;
    cellread.division = division;
    cellread.environment = environment;
    cellread.day = day;
    cellread.totoalscore = totoalscore;
    cellread.finaltitle = finaltitle;
    cellread.belong = belong;
    
    newcellinput = newcellinput+id+","+creator+","+cellno+","+adaption+","+surviveability+","+division+","+environment+","+day+","+totoalscore+","+finaltitle+","+belong+"|";
    newcellworldinput =  newcellworldinput+id+","+creator+","+cellno+","+adaption+","+surviveability+","+division+","+environment+","+day+","+totoalscore+","+finaltitle+","+belong+"|";
}

function addWorld(){
    
    if(belongrecorder == belong){
//        wstart=counter;
        wend=counter-1;
    }else{
        
        wstart=counter-1;
        wend=wstart;
        wid++;
        
        saveworldstirng();
    }
    wcellno=parseInt(wcellno)+parseInt(cellno);
    
    wadaption=parseInt(wadaption)+parseInt(adaption);
    wsurviveability=parseInt(wsurviveability)+parseInt(surviveability);
    wdivision = parseInt(wdivision) + parseInt(division);
    wenvironment=parseInt(wenvironment)+parseInt(environment);
    wday=parseInt(wday)+parseInt(day);
    wtotoalscore=parseInt(wtotoalscore)+parseInt(totoalscore);
    belongrecorder = belong;
    
//    generalupdate();
}
function setCellno(){
    layer.prompt({title: '输入当前细胞的id', formType: 3}, function (pass, index) {
                 
                 var func = "setCellno"
                 var args = "[\"" + pass + "\"]"
                 
                 window.postMessage({
                                    "target": "contentscript",
                                    "data":{
                                    "to" : dappAddress2,
                                    "value" : "0.0001",
                                    "contract" : {
                                    "function" : func,
                                    "args" : args
                                    }
                                    },
                                    "method": "neb_sendTransaction"
                                    }, "*");
                 
                 });
}

function sethistoryno(){
    layer.prompt({title: '输入当前世界的id', formType: 3}, function (pass, index) {
                
                 var func = "sethistoryno"
                 var args = "[\"" + pass + "\"]"
                 
                 
                 window.postMessage({
                                    "target": "contentscript",
                                    "data":{
                                    "to" : dappAddress2,
                                    "value" : "0.0001",
                                    "contract" : {
                                    "function" : func,
                                    "args" : args
                                    }
                                    },
                                    "method": "neb_sendTransaction"
                                    }, "*");
                 
                 });
}
function saveworldstirng(){
    neworldinput =  neworldinput+wid+","+wcellno+","+wadaption+","+wsurviveability+","+wdivision+","+wenvironment+","+wday+","+wtotoalscore+","+wstart+","+wend+":"+newcellworldinput+"|";
    
    wcellno=0;
    wadaption=0;
    wsurviveability=0;
    wdivision=0;
    wsurviveability=0;
    wadaption=0;
    wenvironment=0;
    wday=0;
    wtotoalscore=0;
    newcellworldinput=0;

}

function saveorigin(){
      var func = "dnamerge"
     var args = "[\"" + id + "\",\"" +cellno + "\",\"" +adaption + "\",\"" +surviveability + "\",\"" +division + "\",\"" +environment + "\",\"" +day + "\",\"" +totoalscore + "\",\"" +finaltitle + "\",\"" +belong + "\"]"
    
       console.log(args);
    
    
    window.postMessage({
                       "target": "contentscript",
                       "data":{
                       "to" : dappAddress2,
                       "value" : "0.0001",
                       "contract" : {
                       "function" : func,
                       "args" : args
                       }
                       },
                       "method": "neb_sendTransaction"
                       }, "*");
    
    
}

function sacrifice(){
    var func = "dnamerge"
    var args = "[\"" + id + "\",\"" +cellno + "\",\"" +adaption + "\",\"" +surviveability + "\",\"" +division + "\",\"" +environment + "\",\"" +day + "\",\"" +totoalscore + "\",\"" +finaltitle + "\",\"" +belong + "\"]"
    
    console.log(args);
    
    
    window.postMessage({
                       "target": "contentscript",
                       "data":{
                       "to" : dappAddress2,
                       "value" : "0.0001",
                       "contract" : {
                       "function" : func,
                       "args" : args
                       }
                       },
                       "method": "neb_sendTransaction"
                       }, "*");
    
    
}

function realallcells(){

   check = setInterval('testread()',5000);
    
}



function inheritance(){
    
    input = neworldinput;
    var func = "inheritance";
    var args = "[\"" +input+ "\"]";
    console.log(args);
    
    
    window.postMessage({
                       "target": "contentscript",
                       "data":{
                       "to" : dappAddress2,
                       "value" : "0",
                       "contract" : {
                       "function" : func,
                       "args" : args
                       }
                       },
                       "method": "neb_call"
                       }, "*");
    
}

function writeworlds(){
    
    input = neworldinput;
    var func = "writeworlds";
    var args = "[\"" +input+ "\"]";
    console.log(args);
    
    
    window.postMessage({
                       "target": "contentscript",
                       "data":{
                       "to" : dappAddress2,
                       "value" : "0.0001",
                       "contract" : {
                       "function" : func,
                       "args" : args
                       }
                       },
                       "method": "neb_sendTransaction"
                       }, "*");
    
}

function writecells(){
 
    input = newcellinput;
    var func = "writecells";
    var args = "[\"" +input+ "\"]";
    console.log(args);
    
    
    window.postMessage({
                       "target": "contentscript",
                       "data":{
                       "to" : dappAddress2,
                       "value" : "0.0001",
                       "contract" : {
                       "function" : func,
                       "args" : args
                       }
                       },
                       "method": "neb_sendTransaction"
                       }, "*");
    
}

function testreadtext(){
    var func = "getcurrentpno"
    var args = "[\"" + counter + "\"]"
    
    window.postMessage({
                       "target": "contentscript",
                       "data":{
                       "to" : dappAddress2,
                       "value" : "0",
                       "contract" : {
                       "function" : func,
                       "args" : args
                       }
                       },
                       "method": "neb_call"
                       }, "*");
 
    
    
    
}
function readoriginaldata(){
    
    layer.prompt({title: '输入想要读取细胞的id', formType: 3}, function (pass, index) {
                 layer.msg('读取细胞编号<' + pass + '>资料中');
                 
                 var func = "get"
                 var args = "[\"" + pass + "\"]"
                 
                 window.postMessage({
                                    "target": "contentscript",
                                    "data": {
                                    "to": dappAddress,
                                    "value": "0",
                                    "contract": {
                                    "function": func,
                                    "args": args
                                    }
                                    },
                                    "method": "neb_call"
                                    }, "*");
                 });
    
}

function readnewcelldata(){
    
    layer.prompt({title: '输入想要读取细胞的id', formType: 3}, function (pass, index) {
                 layer.msg('读取细胞编号<' + pass + '>资料中');
                 
                 var func = "get"
                 var args = "[\"" + pass + "\"]"
                 
                 window.postMessage({
                                    "target": "contentscript",
                                    "data": {
                                    "to": dappAddress2,
                                    "value": "0",
                                    "contract": {
                                    "function": func,
                                    "args": args
                                    }
                                    },
                                    "method": "neb_call"
                                    }, "*");
                 });
    
}
function testread(){
    var func = "get"
    var args = "[\"" + counter + "\"]"
    
    window.postMessage({
                       "target": "contentscript",
                       "data":{
                       "to" : dappAddress,
                       "value" : "0",
                       "contract" : {
                       "function" : func,
                       "args" : args
                       }
                       },
                       "method": "neb_call"
                       }, "*");
    if(counter == endcounter){
        clearInterval(check);
        
    }else{
        counter++;
        
        
    }
    
    
    
}
function autoworld(){
      check = setInterval('readworld()',5000);
}
function readworld(){
    var func = "get"
    var args = "[\"" + counter + "\"]"
    
    window.postMessage({
                       "target": "contentscript",
                       "data":{
                       "to" : dappAddress,
                       "value" : "0",
                       "contract" : {
                       "function" : func,
                       "args" : args
                       }
                       },
                       "method": "neb_call"
                       }, "*");
    if(counter == endcounter){
        clearInterval(check);
        
    }else{
        counter++;
    }
    
    
    
}
function getworld(){
 
    layer.prompt({title: '输入想要读取细胞的id', formType: 3}, function (pass, index) {
                 layer.msg('读取细胞编号<' + pass + '>资料中');
                 
                 var func = "getworld"
                 var args = "[\"" + pass + "\"]"
                 
                 window.postMessage({
                                    "target": "contentscript",
                                    "data": {
                                    "to": dappAddress2,
                                    "value": "0",
                                    "contract": {
                                    "function": func,
                                    "args": args
                                    }
                                    },
                                    "method": "neb_call"
                                    }, "*");
                 });
    
}


window.addEventListener('message', function(e) {
                        
                        if (!!e.data.data.neb_call){
                        var result = e.data.data.neb_call.result
                        
                        if (result === 'null'){
                        console.log("meidongxi")
                        } else{
                        
                        try{
                        
                        result = JSON.parse(e.data.data.neb_call.result);
                        
                       if(result.number){
                        var datacollect='<h3>世界数据</h3><br>世界细胞数:'+result.cellno+'<br>世界适应性:'+result.adaption+' 世界生存性:'+result.surviveability+' 世界繁殖性:'+result.division+'<br>世界外部环境:'+result.environment+' 世界存活日:'+ result.day+'<br> 总体得分:'+result.totoalscore+'<br>' ;
                        layer.msg(datacollect, {
                                  time: 0 //不自动关闭
                                  ,btn: ['确定']
                                  
                                  });
                        console.log("recived by page:" + e + ", e.data:"+ JSON.stringify(e.data));
                        
                        }else if(result.surviveability){
                    
                        
                        id=result.id;
                        creator=result.creator;
                        cellno=result.cellno;
                        adaption=result.adaption;
                        surviveability=result.surviveability;
                        division=result.division;
                        environment=result.environment;
                        day=result.day;
                        totoalscore=result.totoalscore;
                        finaltitle=result.finaltitle;
                        belong = result.belong;
                        
                        
                        generalupdate();
                        

                        
                        
                        
                        }else {
                        inputid= result;
                        console.log(inputid);
                        setTimeout(realsave,300);
                        
                        }
                        
                        
                        }catch (err){
                        }
                        
                        if (!!result.key){
                        
                        }
                        }
                        }
                        });

