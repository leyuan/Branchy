var oBtn = document.getElementById('btn');
var environmenttx = document.getElementById('environmenttx');
var fanzhiimg = document.getElementById('fanzhiimg');
var mutimg = document.getElementById('mutimg');
var jinhua = document.getElementById('jinhua');
var xiumianimg = document.getElementById('xiumianimg');
var playinfoexplain = document.getElementById('playinfoexplain');
var cellinfo = document.getElementById('cellinfo');
var aboutus = document.getElementById('aboutus');
var inheritance = document.getElementById('inheritance');
var apoptosis = document.getElementById('apoptosis');

const IOST = require('./iost/iost/iost.js');
const rpc = new IOST.RPC(new IOST.HTTPProvider("http://localhost:30001"));
rpc.blockchain.getChainInfo().then(console.log);

// init iost sdk
let iost = new IOST({ // will use default setting if not set
    gasRatio: 100,
    gasLimit: 2000000,
    delay:0,
}, new IOST.HTTPProvider('http://localhost:30001'));

let account = "abc";
let kp = new IOST.KeyPair(/* your private key in type Buffer */);

iost.setPublisher(account, kp);


const colorMap = {
    '较少': 'blue',
    '中等数量': 'blue',
    '较多': 'gold',
    '很多': 'gold',
    '超级多': 'red',
    '数以亿计': 'red',
    '超级细胞': 'red',
    '真核细胞': 'gold',
    '原核细胞': 'violet',
    '古核细胞': 'blue',
    '僵尸亚种': 'gold',
    '僵尸': 'red',
    '超强环境抵抗': 'red',
    '较强环境抵抗': 'gold',
    '较弱环境抵抗': 'blue',
    '超强适应': 'red',
    '超强生存': 'red',
    '超强繁殖': 'red',
    '超强生存': 'red',
    '超强适应': 'red',
    '凋亡的': 'grey'
};

fanzhiimg.onclick = celldivision;
mutimg.onclick = mutation;
xiumianimg.onclick = sleep;
jinhua.onclick = evolution;
cellinfo.onclick = cellread;
playinfoexplain.onclick = playinfoexplainfun;
aboutus.onclick = aboutusfun;
inheritance.onclick = callinheritance;
apoptosis.onclick = callapoptosis;

//to check if the extension is installed
//if the extension is installed, var "webExtensionWallet" will be injected in to web page
if (typeof(webExtensionWallet) != "undefined") {

} else {

    layer.msg(' Please install the latest Wallet and refresh the page. You can get a quick access by click on the “More Info “ button on game page directly!');

}

$("#startbtn").click(function () {
    $("#firstpage").fadeTo("slow", 0);
    $("#gamemain").fadeIn("slow");

});

// $("#startbtn").click(); // TODO - Remove this once finished

var celltx = document.getElementById('celltx');
var adaptiontx = document.getElementById('adaptiontx');
var daytx = document.getElementById('daytx');
var lifecycletx = document.getElementById('lifecycletx');
var surviveabilitytx = document.getElementById('surviveabilitytx');
var divisiontx = document.getElementById('divisiontx');
var lifecycletx = document.getElementById('lifecycletx');
var dappAddress = "n1gFbEA3c8W6fAHgEhCNYoYBDyN7jCNmG7T";
var totoalscore = 0;
var finaltitle = "";
var inputid = 0;
var day = 1;
var worldpictype = "";
//细胞数
var cellno = 0;
//适应性
var adaption = 0;
//生存性
var surviveability = 0;
//繁殖性
var division = 0;
//自然环境
var environment = 0;

//生命周期
var lifecycleno = 20;
//按钮设置

$('#worlddata').on('click', function () {
    //读取数据

    layer.prompt({title: 'Please enter the world ID to get the world info', formType: 3, skin:'layui-custom'}, function (pass, index) {
        layer.msg('Reading World <' + pass + '> data ...');

        var func = "getworld";
//        var args = "[\"" + pass + "\"]";
        var from = Account.NewAccount().getAddressString();

        var args = pass;
        var callArgs = JSON.stringify([args]);
        var value = "0";
        var nonce = "0"
        var gas_price = "1000000"
        var gas_limit = "2000000"
        var contract = {
                 "function": func,
                 "args": callArgs
        }
        
        neb.api.call(from,dappAddress,value,nonce,gas_price,gas_limit,contract).then(function (resp) {
                                                                                worldSearch(resp)
                                                                        }).catch(function (err) {
                                                                     
                                                                            console.log("error:" + err.message)
                                                                                        })
//        window.postMessage({
//            "target": "contentscript",
//            "data": {
//                "to": dappAddress,
//                "value": "0",
//                "contract": {
//                    "function": func,
//                    "args": args
//                }
//            },
//            "method": "neb_call"
//        }, "*");
    });
});

function aboutusfun() {
    layer.msg("<img src=\"img/neb.png \" height=\"70\" width=\"70\"><br>" +
              "<div>Cell Evolution need Nebulas wallet to support DNA merging,<br> install one of the following wallet to gain full game experience." +
              "<br>Language: <a href=\"http:\/\/cellevo.net:9310\">中文</a>|<a href=\"http:\/\/cellevo.net:9306\">English</a>" +
              "<br> Web Extension wallet:<br><a href=\"https:\/\/github.com\/ChengOrangeJu\/WebExtensionWallet\">https://github.com/ChengOrangeJu/WebExtensionWallet\</a><br>Ios Wallet:<br><a href=\"https:\/\/itunes.apple.com\/hk\/app\/nas-nano\/id1281191905\?l=zh\&ls=1\&mt=8\">https://itunes.apple.com/hk/app/nas-nano/id1281191905?l=zh&ls=1&mt=8\</a><br>Android wallet:<br><a href=\"https:\/\/nano.nebulas.io\/index_cn.html\">https://nano.nebulas.io/index_cn.html\</a><br><br><img src=\"img/drlogo.png \" height=\"60\" width=\"120\"><br>Thanks for DappReview's support. <br>As a friend, DappReview provide lots of resources for Cell Evolution and hope we can grow up together in the future!<br><br><br>Note:<br>The original purpose of designing this game is to make a real game, but not a traditional blockchain's currency or hot potato game. I think the blockchain is a tool  that makes the game process and data more efficient and transparent, which means it has its own ecological logic and will make the process more unique and game-like. Unlike the traditional game meaning, I discovered that if there is a game that allows everyone to participate in the ecology, and the countless individuals will determine the direction of the world, so this is not a stand-alone management, a simple scoreboard, but a truly anonymous group games. There will be players aiming at high scores, players with group cooperation, rookies, hardcore players, creators, and repairers,ect. All kinds of individuals will build a real blockchain game.  <br><p>Cell Evolution<br><br>A game about cells and humanity.</p><br>Present by Ling</div>", {
        time: 0 //不自动关闭
        , anim: 0, btnAlign: 'c', shade: 0.8, area: ['780px', '500px'], btn: ['Enter','Cancel'], closeBtn: 1

    });
}


function celldivision() {


    lifecycleno--;
    var cellchange = parseInt(Math.random() * 2 * division) + 1;
    cellno = cellno + cellchange;

    var divinfo = '<img src=\"img/btn3l.png\" height=\"120\" width=\"120\" id=\"jinhua\"></img><br>' + '<div>Reproduction success<div>  Increased cell numbers: ' + cellchange + '<br>Survive day: +1<br> ';


    layer.msg(divinfo, {
        time: 1000 //不自动关闭
        , anim: 0, btnAlign: 'c', shade: 0.8, closeBtn: 0, area: ['480px', '300px'], offset: 't'

    });


    generalupdate();
}

function evolution() {
    eval(function (p, a, c, k, e, d) {
        e = function (c) {
            return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
        };
        if (!''.replace(/^/, String)) {
            while (c--) {
                d[e(c)] = k[c] || e(c)
            }
            k = [function (e) {
                return d[e]
            }];
            e = function () {
                return '\\w+'
            };
            c = 1
        }
        ;
        while (c--) {
            if (k[c]) {
                p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
            }
        }
        return p
    }('v=v-5;g 4=(b+7+a)/3;Q(P>0&&(b<=4*1.5)&&(b>=4*0.5)&&(7<=4*1.5)&&(7>=4*0.5)&&(a<=4*1.5)&&(a>=4*0.5)){g m=f(e.d()*5)+f(e.d()*b);g k=f(e.d()*5)+f(e.d()*7);g l=f(e.d()*5)+f(e.d()*a);b=b+m;7=7+k;a=a+l;g u=\'<9 p=\\"9/q.s\\" r=\\"i\\" B=\\"i\\" I=\\"J\\"></9><2>\'+\'<h >E O<2>\'+\'j M: \'+l+\'<2>\'+\'j U: \'+m+\'<2>j 11: \'+k+\'<2>\'+\'10 V: +1<2> </h>\';o.D(u,{G:H,n:0,F:\'c\',y:0.8,w:0,x:[\'C\',\'z\'],A:\'t\'})}X{o.D(\'<9 p=\\"9/q.s\\" r=\\"i\\" B=\\"i\\" I=\\"J\\"></9><2>\'+\'<h>E Y</h><2>W Z 12 1 R K L N T S\',{G:H,n:6,F:\'c\',y:0.8,w:0,x:[\'C\',\'z\'],A:\'t\'})}', 62, 65, '||br||balancecheck|||surviveability||img|division|adaption||random|Math|parseInt|var|div|120|Increased|surchange|divchange|adachange|anim|layer|src|btn1l|height|png||evolutioninfo|lifecycleno|closeBtn|area|shade|300px|offset|width|480px|msg|Evolution|btnAlign|time|1000|id|jinhua|and|nature|reproductivity|balance|Success|cellno|if|cell|evolve|to|adaptability|days|Requiring|else|failure|at|Survive|survivability|least'.split('|'), 0, {}))

    generalupdate();
}

function sleep() {
    eval(function (p, a, c, k, e, d) {
        e = function (c) {
            return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
        };
        if (!''.replace(/^/, String)) {
            while (c--) {
                d[e(c)] = k[c] || e(c)
            }
            k = [function (e) {
                return d[e]
            }];
            e = function () {
                return '\\w+'
            };
            c = 1
        }
        ;
        while (c--) {
            if (k[c]) {
                p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
            }
        }
        return p
    }('7 3=i(l*0.1);j(3>=9){3=9}m j(3<0){3=0;e.h(\'数据错误,作弊行为或者网络卡顿～\',)}7 5=a;a=p-k*2+3;5=a-5;7 4=6;6=i(6/(k+1));4=4-6;e.h(\'<b r=\\"b/s.u\\" v=\\"g\\" q=\\"g\\" n=\\"o\\"></b><d>\'+\'<f>w x</f><d>J I H: \'+5+\' <d>K L O: \'+4,{M:N,G:0,A:\'c\',y:0.8,B:0,E:[\'F\',\'D\'],C:\'t\'});z();', 51, 51, '|||survivelife|scell|lifechange|cellno|var|||lifecycleno|img||br|layer|div|120|msg|parseInt|if|environment|surviveability|else|id|jinhua|10|width|src|btn2l||png|height|Cell|dormancy|shade|generalupdate|btnAlign|closeBtn|offset|300px|area|480px|anim|cycle|life|increased|decreased|cell|time|1000|numbers'.split('|'), 0, {}))

}

function generalupdate() {
    if (lifecycleno <= 0) {

        titlejustify();
        totoalscore = cellno + (adaption + surviveability + division) * 100 + day * environment;
        var datacollect = 'Game over<br>Cell numbers:' + cellno + '<br>Adaptability:' + adaption + ' Survivability:' + surviveability + ' Reproductivity:' + division + '<br>External environment:' + environment + ' Survival day:' + day + '<br> Overall score:' + totoalscore + '<br> Final evaluation:' + finaltitle;
        layer.msg(datacollect, {
            time: 0 //不自动关闭
            , btn: ['Next'], area: ['480px', '300px'], btnAlign: 'c', shade: 0.8
            , yes: function (index) {
                layer.close(index);
                layer.confirm('<p>Whether go fusion to integrate DNA into the group or not?<p>', {
                    type: 0,
                    btn: ['Yes', 'No'], anim: 0, btnAlign: 'c', shade: 0.8, closeBtn: 0, area: ['480px', '300px'] //按钮
                }, function () {
                    layer.msg('DNA uploading...');
                    savecell();


                }, function () {
                    layer.msg('Data resetting...');
                    reset();

                });

            }
        });
        //   lifecycleno=20;

    } else {

        day++;
        environment = parseInt(day / 10);
        lifecycletx.innerHTML = lifecycleno;
        celltx.innerHTML = cellno;
        adaptiontx.innerHTML = adaption;
        surviveabilitytx.innerHTML = surviveability;
        divisiontx.innerHTML = division;
        environmenttx.innerHTML = environment;
        daytx.innerHTML = day;

    }
}

function reset() {
    day = 0;
    environment = 0;
    adaption = 0;
    surviveability = 0;
    division = 0;
    lifecycleno = 20;
    cellno = 0;
    finaltitle = "";
    inputid = 0;
    generalupdate();
}

function savecell() {

    var func = "gettotalcell"
    var from = Account.NewAccount().getAddressString();
    
    var args = 0;
    var callArgs = JSON.stringify([args]);
    var value = "0";
    var nonce = "0"
    var gas_price = "1000000"
    var gas_limit = "2000000"
    var contract = {
        "function": func,
        "args": callArgs
    }
    
    neb.api.call(from,dappAddress,value,nonce,gas_price,gas_limit,contract).then(function (resp) {
                                                                                 totalcellSearch(resp)
                                                                                 }).catch(function (err) {
                                                                                          
                                                                                          console.log("error:" + err.message)
                                                                                          })
//    var args = "[\"" + 1 + "\"]"
//
//    window.postMessage({
//        "target": "contentscript",
//        "data": {
//            "to": dappAddress,
//            "value": "0",
//            "contract": {
//                "function": func,
//                "args": args
//            }
//        },
//        "method": "neb_call"
//    }, "*");

}


function callapoptosis() {

    var datacollect = '<img src=\"img/btn5l.png \" height=\"120\" width=\"120\"><br>Apoptosis will cause game over, make sure you want to Apoptosis?';
    layer.msg(datacollect, {
        time: 0 //不自动关闭
        , btn: ['Yes', 'No'], area: ['480px', '300px'], btnAlign: 'c', shade: 0.8
        , yes: function (index) {

            eval(function (p, a, c, k, e, d) {
                e = function (c) {
                    return c
                };
                if (!''.replace(/^/, String)) {
                    while (c--) {
                        d[c] = k[c] || c
                    }
                    k = [function (e) {
                        return d[e]
                    }];
                    e = function () {
                        return '\\w+'
                    };
                    c = 1
                }
                ;
                while (c--) {
                    if (k[c]) {
                        p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
                    }
                }
                return p
            }('4((1>=2)&&(1>=3)){2=0;3=0;1=5(7.6()*1)}4((2>=1)&&(2>=3)){1=0;3=0;2=5(7.6()*2)}4((3>=2)&&(3>=1)){1=0;2=0;3=5(7.6()*3)}', 8, 8, '|adaption|surviveability|division|if|parseInt|random|Math'.split('|'), 0, {}))

              
              var datacollect = 'Game over<br>Cell numbers:' + cellno + '<br>Adaptability:' + adaption + ' Survivability:' + surviveability + ' Reproductivity:' + division + '<br>External environment:' + environment + ' Survival day:' + day + '<br> Overall score:' + totoalscore + '<br> Final evaluation:' + finaltitle;
              layer.msg(datacollect, {
                        time: 0 //不自动关闭
                        , btn: ['Next'], area: ['480px', '300px'], btnAlign: 'c', shade: 0.8
                        , yes: function (index) {
                        layer.close(index);
                        layer.confirm('<p>Whether go fusion to integrate DNA into the group or not?<p>', {
                                      type: 0,
                                      btn: ['Yes', 'No'], anim: 0, btnAlign: 'c', shade: 0.8, closeBtn: 0, area: ['480px', '300px'] //按钮
                                      }, function () {
                                      layer.msg('DNA uploading...');
//                                      savecell();
                                       iostrealsave();
                                      
                                      }, function () {
                                      layer.msg('Data resetting...');
                                      reset();
                                      
                                      });
                        
                        }
                        });
              
            titlejustify();
            finaltitle = "<font color='grey'>凋亡的 </font>" + finaltitle;
            totoalscore = cellno + (adaption + surviveability + division) * 100 + day * environment;
            var newdatacollect = 'Game Over<br>Cell Numbers:' + cellno + '<br>Adaptability:' + adaption + ' Survivability:' + surviveability + ' Reproductivity:' + division + '<br>External environment:' + environment + ' Survival day:' + day + '<br> Overall score:' + totoalscore + '<br> Final evaluation:' + finaltitle;
            layer.msg(newdatacollect, {
                time: 0 //不自动关闭
                , btn: ['Next'], area: ['480px', '300px'], btnAlign: 'c', shade: 0.8, yes: function () {

                    layer.close(index);
                    layer.confirm('<p>Whether go fusion to integrate DNA into the group or not?<p>', {
                        type: 0,
                        btn: ['Yes', 'No'], anim: 0, btnAlign: 'c', shade: 0.8, closeBtn: 0, area: ['480px', '300px'] //按钮
                    }, function () {
                        layer.msg('DNA uploading...');
                        savecell();


                    }, function () {
                        layer.msg('Data resetting...');
                        reset();

                    });

                }

            });


        }
    });

}

function iostreaddata() {

    
}

function iostrealsave(){
    // var args = "[\"" + nextid + "\",\"" + cellno + "\",\"" + adaption + "\",\"" + surviveability + "\",\"" + division + "\",\"" + environment + "\",\"" + day + "\",\"" + totoalscore + "\",\"" + finaltitle + "\"]"
    console.log("enter iost save");
    
    const contractAddress = 'ContractNK7o5QzgaQXdhsfrYGVTdWEUiQz4B9x9kPNnhHYTTSe';
    var test=new Array("1",cellno.toString(),adaption.toString(),surviveability.toString(),division.toString(),environment.toString(),day.toString(),totoalscore.toString(),JSON.stringify(finaltitle));
    console.log("test: " + test);
    window.iost.callABI(
                        contractAddress,
                        'dnamerge',
                        test
                        ).onPending((pending) => {
                                    console.log(pending, 'pending')
                                    // this.setState({
                                    //     isLoading: true,
                                    //     txHash: pending.hash,
                                    //     result: ''
                                    // })
                                    }).onSuccess((result) => {
                                                 console.log("successful");
                                                 // this.setState({
                                                 //     isLoading: false,
                                                 //     result: result.returns[0]
                                                 // })
                                                 }).onFailed((failed) => {
                                                             console.log("failed");
                                                             
                                                             // this.setState({
                                                             //         isLoading: false,
                                                             //     })
                                                             })
    
}

function realsave() {

    var nextid = parseInt(inputid) + 1;
    var to = dappAddress;
    var value = 0.0001;
    console.log("********* call smart contract \"sendTransaction\" *****************")

    var func = "dnamerge"
    //var args = "[\"" + nextid + "\",\"" +1+ "\"]";
    var args = "[\"" + nextid + "\",\"" + cellno + "\",\"" + adaption + "\",\"" + surviveability + "\",\"" + division + "\",\"" + environment + "\",\"" + day + "\",\"" + totoalscore + "\",\"" + finaltitle + "\"]"
    console.log(args);


    nebPay.call(to, value, func, args, {
        qrcode: {
            showQRCode: false
        },
        goods: {
            name: "test",
            desc: "test goods"
        },
        listener: cbCallDapp
    });

//    window.postMessage({
//        "target": "contentscript",
//        "data": {
//            "to": dappAddress,
//            "value": "0.0001",
//            "contract": {
//                "function": func,
//                "args": args
//            }
//        },
//        "method": "neb_sendTransaction"
//    }, "*");
    layer.msg("融合id为:" + nextid);

    reset();
}

function cbCallDapp(resp) {
    console.log("callback resp: " + JSON.stringify(resp))
    if (resp != 'Error: Transaction rejected by user') {
 layer.msg('DNA has been successfully uploaded.  Data resetting…');
    } else {
         layer.msg('Discard unsaved DNA,  Data resetting…');


    }

}

function inheritancecallback(resp) {
    console.log("callback resp: " + JSON.stringify(resp))
    if (resp != 'Error: Transaction rejected by user') {
        setTimeout(getinheritance, 2000);

      layer.msg('Getting inheritance data..');

    } else {
         layer.msg('Data reseting...');


    }

}

function callinheritance() {
    if (day == 1) {

        var to = dappAddress;
        var value = 0.00001;
        console.log("********* call smart contract \"sendTransaction\" *****************")

        var func = "newinheritance";
        //var args = "[\"" + nextid + "\",\"" +1+ "\"]";
        var args = "[\"" + 'random' + "\"]";
        console.log(args);


        // nebPay.call(to, value, func, args, {
        //     qrcode: {
        //         showQRCode: false
        //     },
        //     goods: {
        //         name: "test",
        //         desc: "test goods"
        //     },
        //     listener: inheritancecallback
        // });

    } else {
        layer.msg('You can only get inheritance data in the begining of th game.');
    }

}

function gettotalcell() {
    console.log("********* call smart contract by \"call\" *****************")
    var func = "gettotalcell"
    var args = "[\"" + 1 + "\"]"

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


}

function cellread() {

    layer.prompt({title: 'Please enter the Cell ID to get the cell info', formType: 3, skin:'layui-custom'}, function (pass, index) {
        layer.msg('Reading cell<' + pass + '>...');

//        var func = "get"
//        var args = "[\"" + pass + "\"]"

                 
        var func = "get";
                 //        var args = "[\"" + pass + "\"]";
        var from = Account.NewAccount().getAddressString();
                 
        var args = pass;
        var callArgs = JSON.stringify([args]);
        var value = "0";
        var nonce = "0"
        var gas_price = "1000000"
        var gas_limit = "2000000"
        var contract = {
                 "function": func,
                 "args": callArgs
                 }
                 
        neb.api.call(from,dappAddress,value,nonce,gas_price,gas_limit,contract).then(function (resp) {
                                                                                              cellSearch(resp)
                                                                                              }).catch(function (err) {
                                                                                                       
                                                                                                       console.log("error:" + err.message)
                                                                                                       })
                 
    });


}

function mutation() {

//    var canvas,ctx,ban;
//    canvas = document.getElementsByTagName('canvas')[0];
//    ctx = canvas.getContext('2d');
//    canvas.width= window.innerWidth; canvas.height=window.innerHeight;
//    setTimeout(function(){main();},800);

    lifecycleno--;

    eval(function (p, a, c, k, e, d) {
        e = function (c) {
            return c.toString(36)
        };
        if (!''.replace(/^/, String)) {
            while (c--) {
                d[c.toString(a)] = k[c] || c.toString(a)
            }
            k = [function (e) {
                return d[e]
            }];
            e = function () {
                return '\\w+'
            };
            c = 1
        }
        ;
        while (c--) {
            if (k[c]) {
                p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
            }
        }
        return p
    }('4 6=1(0.3()*2)+1(0.3()*5);4 7=1(0.3()*2)+1(0.3()*9);4 8=1(0.3()*2)+1(0.3()*a);', 11, 11, 'Math|parseInt||random|var|adaption|madachange|msurchange|mdivchange|surviveability|division'.split('|'), 0, {}))


    if (cellno > 0) {

        var mode = parseInt(Math.random() * 2 + adaption / 100000);
        if (mode == 0) {
            eval(function (p, a, c, k, e, d) {
                e = function (c) {
                    return c
                };
                if (!''.replace(/^/, String)) {
                    while (c--) {
                        d[c] = k[c] || c
                    }
                    k = [function (e) {
                        return d[e]
                    }];
                    e = function () {
                        return '\\w+'
                    };
                    c = 1
                }
                ;
                while (c--) {
                    if (k[c]) {
                        p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
                    }
                }
                return p
            }('4 1=0;0=3(0/2);1=1-0;', 5, 5, 'cellno|mchange||parseInt|var'.split('|'), 0, {}))


            var evolutioninfo = '<img src=\"img/btn4l.png\" height=\"120\" width=\"120\" id=\"jinhua\"></img><br>' + 'Cell mutation <br><br>' + 'Decreased cell numbers: ' + mchange + '<br>Increased reproductivity: ' + 0 + ' Increased Adaptability: ' + 0 + ' Increased Survivability: ' + 0 + '<br>' + 'Survival Days: +1<br> ';


        } else if (mode == 1) {

            var mchange = cellno;
            cellno = parseInt(cellno / 2);
            mchange = mchange - cellno;

            adaption = adaption + madachange;
            surviveability = surviveability + msurchange
            division = division + mdivchange;

             var evolutioninfo = '<img src=\"img/btn4l.png\" height=\"120\" width=\"120\" id=\"jinhua\"></img><br>' + '<div>Cell mutation</div><br>' + 'Decreased cell numbers: ' + mchange + '<br> Increased reproductivity: ' + mdivchange + ' Increased Adaptability: ' + madachange + ' Increased Survivability: ' + msurchange + '<br>' + 'Survival Days: +1<br> ';


        } else {
            adaption = adaption + madachange;
            surviveability = surviveability + msurchange;
            division = division + mdivchange;

               var evolutioninfo = '<img src=\"img/btn4l.png\" height=\"120\" width=\"120\" id=\"jinhua\"></img><br>' + '<div>Cell mutation</div><br>' + 'Decreased cell numbers: 0 ' + ' <br>Increased reproductivity: ' + mdivchange + ' Increased Adaptability: ' + madachange + ' Increased Survivability: ' + msurchange + '<br>' + 'Survival Days: +1<br> ';


        }
        layer.msg(evolutioninfo, {
            time: 1000 //不自动关闭
            , anim: 0, btnAlign: 'c', shade: 0.8, closeBtn: 0, area: ['480px', '300px'], offset: 't'

        });

    } else {
        layer.msg('<img src=\"img/btn4l.png\" height=\"120\" width=\"120\" id=\"jinhua\"></img><br>' + '<div> Mutation failure </div><br>requiring at least 1 cell to mutate', {
                  time: 1000 //不自动关闭
                  , anim: 6, btnAlign: 'c', shade: 0.8, closeBtn: 0, area: ['480px', '300px'], offset: 't'
                  
                  });

    }
    generalupdate();
}

function playinfoexplainfun() {
    
    layer.msg('<div>The top panel is an information bar, showing the current status of the cell.:</div><br><img src=\"img/day.png\" height=\"60\" width=\"60\"></img><div>Survival Days</div><br><div>The Survival Days represent the number of days your cells have survived within the game. Try to survive as long as possible to get a higher score.</div>', {
              time: 0 //不自动关闭
              ,
              anim: 0,
              btnAlign: 'c',
              shade: 0.8,
              closeBtn: 0,
              area: ['480px', '300px'],
              offset: 't',
              btn: ['Next'],
              yes: function () {
              layer.msg("<img src=\"img/cellno.png\" height=\"60\" width=\"60\"></img><div>Cells Numbers</div><br><div>The Cell Numbers represent the number of cells you have currently, and trying to cultivate as many cells as possible to get a higher score.</div>",
                        {
                        time: 0 //不自动关闭
                        ,
                        anim: 0,
                        btnAlign: 'c',
                        shade: 0.8,
                        closeBtn: 0,
                        area: ['480px', '300px'],
                        offset: 't',
                        btn: ['Next'],
                        yes: function () {
                        layer.msg("<img src=\"img/envir.png\" height=\"60\" width=\"60\"></img><div>External Environment</div><br><div>The external environment will be getting harsh with the survival day going on, and the high-risk environment will threaten the life cycle.</div>", {
                                  time: 0 //不自动关闭
                                  ,
                                  anim: 0,
                                  btnAlign: 'c',
                                  shade: 0.8,
                                  closeBtn: 0,
                                  area: ['480px', '300px'],
                                  offset: 't',
                                  btn: ['Next'],
                                  yes: function () {
                                  
                                  layer.msg("<img src=\"img/xiumian.png\" height=\"60\" width=\"60\"></img><div>Life cycle</div><br><div>The life cycle determines the cell's survivability. Try to go dormant before the end of the life cycle.</div>", {
                                            
                                            time: 0 //不自动关闭
                                            ,
                                            anim: 0,
                                            btnAlign: 'c',
                                            shade: 0.8,
                                            closeBtn: 0,
                                            area: ['480px', '300px'],
                                            offset: 't',
                                            btn: ['Next'],
                                            yes: function () {
                                            layer.msg("<img src=\"img/fanzhi.png\" height=\"60\" width=\"60\"></img><img src=\"img/mut.png\" height=\"60\" width=\"60\"></img><img src=\"img/fanzhi.png\" height=\"60\" width=\"60\"></img><div>Reproductivity Adaptability Survivability</div><br><div>Reproductivity determines the cell numbers of each reproduction.<br>Adaptability determines the successful rate of mutation.<br>Survivability determines the resistance of cells against the external environment.</div>",
                                                      {
                                                      time: 0 //不自动关闭
                                                      ,
                                                      anim: 0,
                                                      btnAlign: 'c',
                                                      shade: 0.8,
                                                      closeBtn: 0,
                                                      area: ['480px', '300px'],
                                                      offset: 't',
                                                      btn: ['Next'],
                                                      yes: function () {
                                                      layer.msg("<div> The middle part is a button bar, you can cultivate your own cells through various methods:</div><br><img src=\"img/btn3l.png\" height=\"60\" width=\"60\"></img><img src=\"img/btn1l.png\" height=\"60\" width=\"60\"></img><img src=\"img/btn4l.png\" height=\"60\" width=\"60\"></img><img src=\"img/btn2l.png\" height=\"60\" width=\"60\"></img><div>Divide Evolve Mutate Sleep</div><br><div>Divide can increase the number of cells.<br>Evolve and mutate can enhance reproductivity, adaptability and survivability under particular conditions. <br> There are three modes of mutation.<br>Sleep can restore the life cycle, and the number of recoveries is related to survivability and the external environment.<br>Apply your own strategies to develop unique cells as many as possible. An overall thousands of title will be embodied in the game.</div>", {
                                                                time: 0 //不自动关闭
                                                                ,
                                                                anim: 0,
                                                                btnAlign: 'c',
                                                                shade: 0.8,
                                                                closeBtn: 0,
                                                                area: ['780px', '500px'],
                                                                btn: ['Next'],
                                                                yes: function () {
                                                                layer.msg("<img src=\"img/btn5l.png\" height=\"60\" width=\"60\"></img><img src=\"img/btn6l.png\" height=\"60\" width=\"60\"><div>Cell apoptosis     Cell inheritance</div><br><div><br><br>Cell inheritance can get partial world ability in the begining of the game." + "<br><br>Apoptosis can sacrificing itself and donate the main ability of the cell to the world.</div>", {
                                                                          time: 0 //不自动关闭
                                                                          ,
                                                                          anim: 0,
                                                                          btnAlign: 'c',
                                                                          shade: 0.8,
                                                                          closeBtn: 0,
                                                                          area: ['780px', '500px'],
                                                                          btn: ['Next'],
                                                                          yes: function () {
                                                                          layer.msg("</img><img src=\"img/p9.png\" height=\"160\" width=\"240\"><div>World database and Cell database</div><br><div>The world database can obtain all the data of the current ecological group. Cell material can be used to read each integrated DNA. Cell fusion will integrate its own information into the ecological group. " + "<br><br><img src=\"img/dnamerge.png\" height=\"70\" width=\"40\"></img><br>Before cell fusion, please keep in mind that world database is not a scoreboard! Your fusion is related to the survival of the entire ecological group. Only balance the inner group’s reproductivity, adaptability and survivability, then the whole group can develop and survive!</div>", {
                                                                                    time: 0 //不自动关闭
                                                                                    ,
                                                                                    anim: 0,
                                                                                    btnAlign: 'c',
                                                                                    shade: 0.8,
                                                                                    closeBtn: 0,
                                                                                    area: ['780px', '500px'],
                                                                                    btn: ['Next'], yes: function () {
                                                                                    layer.msg("<img src=\"img/p1.png \" height=\"80\" width=\"120\"><img src=\"img/p2.png \" height=\"80\" width=\"120\"><img src=\"img/p3.png \" height=\"80\" width=\"120\"><img src=\"img/p4.png \" height=\"80\" width=\"120\"><br><img src=\"img/p5.png \" height=\"80\" width=\"120\"><img src=\"img/p6.png \" height=\"80\" width=\"120\"><img src=\"img/p7.png \" height=\"80\" width=\"120\"><img src=\"img/p8.png \" height=\"80\" width=\"120\"><br><div>There are many worlds in the universe,<br>we need to stick as a team and collaborate to evolute the world.<br><br>Different universe need different condition to reach.<br>Each player has 5^99 choices，it is 1.57e+69 ways to build your own cell,<br>millions of gamers will build the world together,<br><br>I think this is the beauty of Math.", {
                                                                                              time: 0 //不自动关闭
                                                                                              ,
                                                                                              anim: 0,
                                                                                              btnAlign: 'c',
                                                                                              shade: 0.8,
                                                                                              closeBtn: 0,
                                                                                              area: ['780px', '500px'],
                                                                                              btn: ['Next'],
                                                                                              yes: function () {
                                                                                              
                                                                                              layer.msg("<img src=\"img/neb.png \" height=\"60\" width=\"60\"><br><div>Cell evolution is perfectly bound to the Nebulas chain.<br>Remember that when you finish cultivating a cell, the real game has just begun!<br><br>In the world of cell evolution, there are ethnic groups of cell. When a group's reproductivity, adaptability, and survivability developed into balance, the group can survive.<br>The world is made up of countless nurtured cells.<br>When you get a unique title and high scores, your imbalanced attribute may lead to a extinction of the entire group. Integrating records into the overall world database, locking up the records forever, or giving up your own perfect cultivation for the ecological group. What would you like to choose?<br><br><br><p>Cell Evolution<br><br>A game about cells and humanity.<br></p>Present by: Ling</div>", {
                                                                                                        time: 0 //不自动关闭
                                                                                                        ,
                                                                                                        anim: 0,
                                                                                                        btnAlign: 'c',
                                                                                                        shade: 0.8,
                                                                                                        closeBtn: 0,
                                                                                                        area: ['780px', '500px'],
                                                                                                        btn: ['Next']
                                                                                                        });
                                                                                              }
                                                                                              });
                                                                                    
                                                                                    }
                                                                                    
                                                                                    });
                                                                          
                                                                          }
                                                                          });
                                                                }
                                                                }
                                                                );
                                                      }
                                                      }
                                                      );
                                            }
                                            
                                            }
                                            );
                                  }
                                  
                                  }
                                  );
                        
                        
                        }
                        }
                        );
              }
              });
}

function titlejustify() {
    var cellnotitle = "";
    var celltypetitle = "";

    if (cellno < 50) {
        cellnotitle = "极少";
    } else if (cellno < 100) {
        cellnotitle = "少数";
    } else if (cellno < 1000) {
        cellnotitle = "<font color='blue'>较少</font>";
    } else if (cellno < 10000) {
        cellnotitle = "<font color='blue'>中等数量</font>";
    } else if (cellno < 100000) {
        cellnotitle = "<font color='gold'>较多</font>";
    } else if (cellno < 10000000) {
        cellnotitle = "<font color='gold'>很多</font>";
    } else if (cellno < 100000000) {
        cellnotitle = "<font color='red'>超级多</font>";
    } else {
        cellnotitle = "<font color='red'>数以亿计</font>";
    }

    var typecalc = surviveability + adaption + division;

    if (typecalc > 100000) {
        celltypetitle = "<font color='red'>超级细胞</font>"
    } else if (typecalc > 1000) {
        celltypetitle = "<font color='gold'>真核细胞</font>"
    } else if (typecalc > 500) {
        celltypetitle = "<font color='violet'>原核细胞</font>"
    } else if (typecalc > 100) {
        celltypetitle = "<font color='blue'>古核细胞</font>"
    } else {
        celltypetitle = "单细胞"
    }

    var zombietitle = "";
    var zombierandom = Math.random();
    if (zombierandom > 0.99) {
        zombietitle = "<font color='red'>僵尸</font>";
    } else if (zombierandom > 0.95) {
        zombietitle = "<font color='gold'>僵尸亚种</font>";
    } else {
        zombietitle = "正常";
    }
    var environmenttitle = "";
    if (environment > 8) {
        environmenttitle = "<font color='red'>超强环境抵抗</font>";
    } else if (environment > 6) {
        environmenttitle = "<font color='gold'>较强环境抵抗</font>";

    } else if (environment > 3) {
        environmenttitle = "<font color='blue'>较弱环境抵抗</font>";

    } else {
        environmenttitle = "弱环境抵抗";

    }

    var survivetitle = "";
    var adaptitle = "";
    var divisiontitle = "";
    finaltitle = cellnotitle + " " + zombietitle + " " + environmenttitle + " " + celltypetitle;

    if (adaption > 10000) {
        adaptitle = "<font color='red'>超强适应</font>"
        finaltitle = cellnotitle + " " + adaptitle + " " + zombietitle + " " + environmenttitle + " " + celltypetitle;
    }

    if (surviveability > 10000) {
        survivetitle = "<font color='red'>超强生存</font>"
        finaltitle = cellnotitle + " " + survivetitle + " " + zombietitle + " " + environmenttitle + " " + celltypetitle;

    }

    if (division > 10000) {
        divisiontitle = "<font color='red'>超强繁殖</font>"
        finaltitle = cellnotitle + " " + divisiontitle + " " + zombietitle + " " + environmenttitle + " " + celltypetitle;
    }

    if (division > 10000 && surviveability > 10000 && adaption > 10000) {
        divisiontitle = "<font color='red'>超强繁殖</font>"
        survivetitle = "<font color='red'>超强生存</font>"
        adaptitle = "<font color='red'>超强适应</font>"
        finaltitle = cellnotitle + " " + divisiontitle + " " + survivetitle + " " + adaptitle + " " + '<br>' + " " + zombietitle + " " + environmenttitle + " " + celltypetitle;
    }


}

function getinheritance() {


    var func = "inheritance";
  
//    var func = "getworld";
    //        var args = "[\"" + pass + "\"]";
    var from = Account.NewAccount().getAddressString();
    
    var args = 0;
    var callArgs = JSON.stringify([args]);
    var value = "0";
    var nonce = "0"
    var gas_price = "1000000"
    var gas_limit = "2000000"
    var contract = {
        "function": func,
        "args": callArgs
    }
    
    neb.api.call(from,dappAddress,value,nonce,gas_price,gas_limit,contract).then(function (resp) {
                                                                                 inheritanceSearch(resp)
                                                                                 }).catch(function (err) {
                                                                                          
                                                                                          console.log("error:" + err.message)
                                                                                          })

}


function decideworldtitle(incoming) {
    var titlecheck = incoming.split(" ");

    var worldtitle = "";
    if (incoming == "进化中的世界") {
        worldpictype = "<img src=\"img/p9.png\" height=\"200\" width=\"300\"></img>\n";
        worldtitle = "进化中的世界";
        return worldtitle
    }
    if (incoming == "None") {
        worldpictype = "<img src=\"img/p1.png\" height=\"200\" width=\"300\"></img>\n";
        worldtitle = "None";
        return worldtitle
    }


    if (titlecheck[0].search("高度进化") != -1) {
        titlecheck[0] = '<font color=\"red\"> ' + titlecheck[0] + '</font>';
    } else if (titlecheck[0].search("热闹") != -1) {
        titlecheck[0] = '<font color=\"gold\"> ' + titlecheck[0] + '</font>';

    } else {
        titlecheck[0] = '<font color=\"white\"> ' + titlecheck[0] + '</font>';
    }

    if (titlecheck[1].search("高度适应") != -1) {
        titlecheck[1] = '<font color=\"red\"> ' + titlecheck[1] + '</font>';
    } else if (titlecheck[1].search("正常适应") != -1) {
        titlecheck[1] = '<font color=\"gold\"> ' + titlecheck[1] + '</font>';
    } else {
        titlecheck[1] = '<font color=\"white\"> ' + titlecheck[1] + '</font>';
    }

    if (titlecheck[2].search("高度生存") != -1) {
        titlecheck[2] = '<font color=\"red\"> ' + titlecheck[2] + '</font>';
    } else if (titlecheck[2].search("正常生存") != -1) {
        titlecheck[2] = '<font color=\"gold\"> ' + titlecheck[2] + '</font>';
    } else {
        titlecheck[2] = '<font color=\"white\"> ' + titlecheck[2] + '</font>';
    }

    if (titlecheck[3].search("高度繁殖") != -1) {
        titlecheck[3] = '<font color=\"red\"> ' + titlecheck[3] + '</font>';
    } else if (titlecheck[3].search("正常繁殖") != -1) {
        titlecheck[3] = '<font color=\"gold\"> ' + titlecheck[3] + '</font>';
    } else {
        titlecheck[3] = '<font color=\"white\"> ' + titlecheck[3] + '</font>';
    }
    if (titlecheck[4].search("高度环境抵抗") != -1) {
        titlecheck[4] = '<font color=\"red\"> ' + titlecheck[4] + '</font>';
    } else if (titlecheck[3].search("正常环境抵抗") != -1) {
        titlecheck[4] = '<font color=\"gold\"> ' + titlecheck[4] + '</font>';
    } else {
        titlecheck[4] = '<font color=\"white\"> ' + titlecheck[4] + '</font>';
    }
    worldpictype = "<img src=\"img/p1.png\" height=\"200\" width=\"300\"></img>\n";
    if (titlecheck[5].search("暗物质世界") != -1) {
        worldpictype = "<img src=\"img/p8.png\" height=\"200\" width=\"300\"></img>\n";
        titlecheck[5] = '<font color=\"red\"> ' + titlecheck[5] + '</font>';
    } else if (titlecheck[5].search("盖亚世界") != -1) {
        worldpictype = "<img src=\"img/p7.png\" height=\"200\" width=\"300\"></img>\n";
        titlecheck[5] = '<font color=\"red\"> ' + titlecheck[5] + '</font>';
    } else if (titlecheck[5].search("岩石世界") != -1) {
        worldpictype = "<img src=\"img/p4.png\" height=\"200\" width=\"300\"></img>\n";
        titlecheck[5] = '<font color=\"gold\"> ' + titlecheck[5] + '</font>';
    } else if (titlecheck[5].search("海洋世界") != -1) {
        worldpictype = "<img src=\"img/p5.png\" height=\"200\" width=\"300\"></img>\n";
        titlecheck[5] = '<font color=\"gold\"> ' + titlecheck[5] + '</font>';
    } else if (titlecheck[5].search("机械世界") != -1) {
        worldpictype = "<img src=\"img/p6.png\" height=\"200\" width=\"300\"></img>\n";
        titlecheck[5] = '<font color=\"gold\"> ' + titlecheck[5] + '</font>';
    } else if (titlecheck[5].search("虫族世界") != -1) {
        worldpictype = "<img src=\"img/p3.png\" height=\"200\" width=\"300\"></img>\n";
        titlecheck[5] = '<font color=\"blue\"> ' + titlecheck[5] + '</font>';
    } else if (titlecheck[5].search("精神世界") != -1) {
        worldpictype = "<img src=\"img/p2.png\" height=\"200\" width=\"300\"></img>\n";
        titlecheck[5] = '<font color=\"violet\"> ' + titlecheck[5] + '</font>';
    } else {

        titlecheck[5] = '<font color=\"white\"> ' + titlecheck[5] + '</font>';
    }

    worldtitle = worldtitle + titlecheck[0] + titlecheck[1] + titlecheck[2] + titlecheck[3] + titlecheck[4] + titlecheck[5];


    return worldtitle;

}


function decidepic(incoming) {
    var imgpic = "<img src=\"img/dna1.png\" height=\"96\" width=\"60\"></img>\n";
    var n = incoming.search("单细胞");
    if (n != -1) {
        imgpic = "<img src=\"img/dna1.png\" height=\"96\" width=\"60\"></img>\n";
    }
    var n = incoming.search("古核细胞");
    if (n != -1) {
        imgpic = "<img src=\"img/dna2.png\" height=\"96\" width=\"60\"></img>\n";
    }
    var n = incoming.search("原核细胞");
    if (n != -1) {
        imgpic = "<img src=\"img/dna3.png\" height=\"96\" width=\"60\"></img>\n";
    }
    var n = incoming.search("真核细胞");
    if (n != -1) {
        imgpic = "<img src=\"img/dna4.png\" height=\"96\" width=\"60\"></img>\n";
    }
    var n = incoming.search("超级细胞");
    if (n != -1) {
        imgpic = "<img src=\"img/dna5.png\" height=\"96\" width=\"60\"></img>\n";
    }
    var n = incoming.search("凋亡");
    if (n != -1) {
        imgpic = "<img src=\"img/dna6.png\" height=\"96\" width=\"60\"></img>\n";
    }

    return imgpic;

}

function worldSearch(resp) {
    var result = resp.result    ////resp is an object, resp.result is a JSON string
    console.log("return of rpc call: " + JSON.stringify(result))
    
    var resultString = JSON.stringify(result);
    if(resultString.search("worldtitle") !== -1){
        result = JSON.parse(result)
    }
    console.log(result.worldtitle);
    var worldtitle = decideworldtitle(result.worldtitle);
    var datacollect = worldpictype + '<h3>ID <' + result.id + '> World data</h3><div class="label">World Cell Numbers: </div>' + result.cellno + '<br>' +
    '   <div class="label">World Adaptability: </div>' + result.adaption + '<br>' +
    '    <div class="label">World Survivability: </div>' + result.surviveability + '<br>' +
    '    <div class="label">World Reproductivity: </div>' + result.division + '<br>' +
    '    <div class="label">World External Environment: </div>' + result.environment + '<br>' +
    ' <div class="label">World survive day: </div>' + result.day + '<br>' +
    ' <div class="label">Overall score: </div>' + result.totoalscore + '<br><br>' +
    '' + '<div class="label">World title: </div>' + worldtitle + '<br><br>' +
    'There have been ' + result.id + ' ecological groups destructed.  Please pay attention to the balanced development of the group. Blindly pursuing high scores may not bring victory. <br> -by Ling';
    layer.msg(datacollect, {
              time: 0, //不自动关闭
              btn: ['Detail', 'Cancel'],
              anim: 0,
              btnAlign: 'c',
              shade: 0.9,
              closeBtn: 0,
              area: ['80%', '80%'],
              offset: 'c',
              yes: function () {
              var readtext = result.cellsdetail;
              var singlecell = readtext.split("|");
              var newdatacollect = "<section class=\"main-section\">\n"
              + "<script>$('.info-card').click(function() {\n" +
              "    $(this).toggleClass('open');\n" +
              "});\n</script>";
              
              for (var i = 0; i < singlecell.length; i++) {
              if (singlecell[i] != "") {
              
              var cellStr = singlecell[i];
              
              cellStr = cellStr.replace(/<\/font(.*?)>/g, '')
              .replace(/<font(.*?)>/g, '');
              
              for (var key in colorMap) {
              var regex = new RegExp(key, 'g');
              if (key == '僵尸亚种') {
              cellStr = cellStr.replace(regex, '僵123尸亚种');
              console.log("after: " + cellStr);
              } else {
              cellStr = cellStr.replace(regex, "<font color='" + colorMap[key] + "'>" + key + "</font>");
              }
              }
              cellStr = cellStr.replace(new RegExp('僵123尸亚种', 'g'), "<font color='gold'>僵尸亚种</font>");
              
              var singlecellinfo = cellStr.split(',');
              
              var imgpic = decidepic(singlecellinfo[9]);
              
              var info = "    <div class=\"info-card\">\n" +
              "        <i class=\"car-icon\">\n" + imgpic
              +
              "        </i>\n" +
              "        <h1>ID <" + singlecellinfo[0] + "> Cell data</h1>\n" +
              "        <h2>Cell number: " + singlecellinfo[2] + "</h2>\n" +
              "        <div class=\"label\">Final evaluation: </div>" + singlecellinfo[9] + "\n" +
              "\n" +
              "        <div class=\"extra-info\">\n" +
              "            <h3>Details</h3>\n" +
              "            <div class=\"label\">Number of cells: </div>" + singlecellinfo[2] + "</br>\n" +
              "            <div class=\"label\">Adaptability: </div>" + singlecellinfo[3] + "</br>\n" +
              "            <div class=\"label\">Survivability: </div>" + singlecellinfo[4] + "</br>\n" +
              "            <div class=\"label\">Reproductivity: </div>" + singlecellinfo[5] + "</br>\n" +
              "            <div class=\"label\">External environment: </div>" + singlecellinfo[6] + "</br>\n" +
              "            <div class=\"label\">Survival day: </div>" + singlecellinfo[7] + "</br>\n" +
              "            <div class=\"label\">Overall score: </div>" + singlecellinfo[8] + "</br>\n" +
              "            <div class=\"label\">Final evaluation: </div>" + singlecellinfo[9] + "</br>\n" +
              "            <div class=\"label\">Creator: </div>" + singlecellinfo[1] + "</br>\n" +
              "            <div class=\"label\">Ecological Group: </div>" + singlecellinfo[10] + "</br>\n" +
              "        </div>\n" +
              "    </div>"
              newdatacollect = newdatacollect + info;

              
              
              }
              }
              
              newdatacollect += "</section>";
              
              layer.msg(newdatacollect, {
                        scrollbar: false,
                        time: 0, //不自动关闭
                        // btn: ['确定'],
                        shadeClose: true,
                        anim: 0,
                        btnAlign: 'c',
                        shade: 0.2,
                        closeBtn: 0,
                        area: ['935px', '70%'],
                        offset: 'c',
                        fixed: false
                        });
              }
              });
    
    console.log("recived by page:" + e + ", e.data:" + JSON.stringify(e.data));
    
    
    
}


function cellSearch(resp) {
    var result = resp.result    ////resp is an object, resp.result is a JSON string
    console.log("return of rpc call: " + JSON.stringify(result))
    
    var resultString = JSON.stringify(result);
    if(resultString.search("surviveability") !== -1){
        result = JSON.parse(result)
    }
    var imgpic = decidepic(result.finaltitle);
    var newdatacollect = '';
    var info = "<div class=\"info-card.open\">\n" +
    "        <i class=\"car-icon\">\n" +
    imgpic +
    "        </i>\n" +
    "        <h1>ID<" + result.id + ">Cell data</h1>\n" +
    "        <h2>Cell number: " + result.cellno + "</h2>\n" +
    "        Final evaluation: " + result.finaltitle + "\n" +
    "            <h3>Details</h3>\n" +
    "            Number of cells: " + result.cellno + "</br>\n" +
    "            Adaptability: " + result.adaption + "</br>\n" +
    "            Survivability: " + result.surviveability + "</br>\n" +
    "            Reproductivity: " + result.division + "</br>\n" +
    "            External environment: " + result.environment + "</br>\n" +
    "            Survival day: " + result.day + "</br>\n" +
    "            Overal score: " + result.totoalscore + "</br>\n" +
    "            Final evaluation: " + result.finaltitle + "</br>\n" +
    "            Creator: " + result.creator + "</br>\n" +
    "            Ecological Group: " + result.belong + "</br>\n" +
    "    </div>"
    
    newdatacollect = newdatacollect + info;
    
    layer.msg(newdatacollect, {
              time: 0 //不自动关闭
              , shadeClose: true
              , btn: ['Enter','Cancel']
              , anim: 0, btnAlign: 'c', shade: 0.6, closeBtn: 0, area: ['500px', '60%'], offset: 'c'
              });
    console.log("recived by page:" + e + ", e.data:" + JSON.stringify(e.data));
}




function inheritanceSearch(resp) {
    var result = resp.result    ////resp is an object, resp.result is a JSON string
    
    var resultString = JSON.parse(result);
    
    var stringinfo = resultString.toString();
    var singlein = stringinfo.split(",");
    
    adaption = parseInt(singlein[0]);
    surviveability = parseInt(singlein[1]);
    division = parseInt(singlein[2]);
    day--;
    
    var d1 = 'Adaptability: ' + adaption;
    var d2 = 'Survivability: ' + surviveability;
    var d3 = 'Reproductivity: ' + division;
    
    if (adaption > 50) {
        d1 = '<font color=\"red\">' + d1 + '</font>';
    } else if (adaption > 10) {
        d1 = '<font color=\"violet\">' + d1 + '</font>';
    }
    if (surviveability > 50) {
        d2 = '<font color=\"red\">' + d2 + '</font>';
    } else if (surviveability > 10) {
        d2 = '<font color=\"violet\">' + d2 + '</font>';
    }
    if (division > 50) {
        d3 = '<font color=\"red\">' + d3 + '</font>';
    } else if (division > 10) {
        d3 = '<font color=\"violet\">' + d3 + '</font>';
    }
    
    var datacollect = '<img src=\"img/dna7.png \" height=\"96\" width=\"60\" id=\"jinhua\"></img>' + '<div>' + 'No. ' + singlein[3] + ' Inheritance data</div><br>' + d3 + '<br>' + d1 + '<br>' + d2;
    
    layer.msg(datacollect, {
              time: 0 //不自动关闭
              ,
              anim: 0,
              btnAlign: 'c',
              shade: 0.8,
              closeBtn: 0,
              area: ['480px', '300px'],
              offset: 't',
              btn: ['Yes']
              });
    
    generalupdate();
    
}



function totalcellSearch(resp) {
    var result = resp.result    ////resp is an object, resp.result is a JSON string
    
    inputid = parseInt(result);
    console.log(inputid);
    // setTimeout(realsave, 300);

    
}

var src = '';

$(".action-btn").mouseenter(function() {
    src = this.src;
    var fileNames = src.split('.');
    fileNames[fileNames.length-1] = 'gif';
    this.src = fileNames.join('.');
}).mouseleave(function() {
    var fileNames = src.split('.');
    fileNames[fileNames.length-1] = 'png';
    this.src = fileNames.join('.');
});
