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
var NebPay = require("nebpay");
var nebPay = new NebPay();

var nebulas = require("nebulas"),
    Account = nebulas.Account,
    neb = new nebulas.Neb();
neb.setRequest(new nebulas.HttpRequest("https://mainnet.nebulas.io"));

//to check if the extension is installed
//if the extension is installed, var "webExtensionWallet" will be injected in to web page
if (typeof(webExtensionWallet) != "undefined") {

} else {

    layer.msg('请安装最新的钱包后刷新~ 点击游戏页面More Info也可以直接开启传送阵!');

}

$("#startbtn").click(function () {
    $("#firstpage").fadeTo("slow", 0);
    $("#gamemain").fadeIn("slow");

});
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
    layer.prompt(
        {
            title: '输入想要读取的世界的id',
            formType: 3,
            btn: ["确认", "当前世界信息", "取消"],
            btn2: function () {

                var func = "getcurrentworld";
                var from = Account.NewAccount().getAddressString();

                var callArgs = JSON.stringify(['0']);
                var value = "0";
                var nonce = "0";
                var gas_price = "1000000";
                var gas_limit = "2000000";
                var contract = {
                    "function": func,
                    "args": callArgs
                };

                neb.api.call(from, dappAddress, value, nonce, gas_price, gas_limit, contract).then(function (resp) {
                    worldSearch(resp)
                }).catch(function (err) {

                    console.log("error:" + err.message)
                })

            }
        }, function (pass, index) {
            console.log("index = " + index);
            layer.msg('读取世界编号<' + pass + '>资料中');
            var func = "getworld";
            var from = Account.NewAccount().getAddressString();

            var callArgs = JSON.stringify([pass]);
            var value = "0";
            var nonce = "0";
            var gas_price = "1000000";
            var gas_limit = "2000000";
            var contract = {
                "function": func,
                "args": callArgs
            };

            neb.api.call(from, dappAddress, value, nonce, gas_price, gas_limit, contract).then(function (resp) {
                worldSearch(resp)
            }).catch(function (err) {

                console.log("error:" + err.message)
            })

        });
});

function aboutusfun() {
    layer.msg("<img src=\"img/neblogo.png \" height=\"70\" width=\"70\"><br><div>细胞进化需要星云链钱包的支持,这样可以进行DNA融合，体验到更多游戏性。<br>Language: <a href=\"http:\/\/cellevo.net:9310\">中文</a>|<a href=\"http:\/\/cellevo.net:9306\">English</a><br>网页下载地址:<br><a href=\"https:\/\/github.com\/ChengOrangeJu\/WebExtensionWallet\">https://github.com/ChengOrangeJu/WebExtensionWallet\</a><br>苹果钱包下载地址(海外):<br><a href=\"https:\/\/itunes.apple.com\/hk\/app\/nas-nano\/id1281191905\?l=zh\&ls=1\&mt=8\">https://itunes.apple.com/hk/app/nas-nano/id1281191905?l=zh&ls=1&mt=8\</a><br>安卓钱包下载地址:<br><a href=\"https:\/\/nano.nebulas.io\/index_cn.html\">https://nano.nebulas.io/index_cn.html\</a><br><br><img src=\"img/drlogo.png \" height=\"60\" width=\"120\"><br>感谢合作方DappReview的大力支持,DappReview作为国内最专业的区块链游戏媒体,<br>持续为细胞进化(Cell Evolution)提供推广,孵化以及测评服务!<br><br><br>小记:<br>设计这款游戏的初衷就是想要做出一款真正的游戏,不是区块链的发币，博傻等传统意义上的游戏，我认为区块链是一种工具,让游戏过程,数据更加高效透明的情况下,通过自己的链上逻辑,拥有自己的生态逻辑,可以让游戏过程更加独具游戏性。接着我发现跟传统意义不一样，如果真的有一个游戏可以让所有人参与进生态,无数个体决定世界的走向，那么这就不是一个单机经营，一个简单的积分榜，而是一个真正的匿名群体游戏，有追逐高分的玩家，有群体合作的玩家，有新手，也有高玩，有创造者，也有修补者，各色各样的个体构建一个真正的区块链游戏。 <br><p>Cell Evolution<br><br>A game about cells and humanity.</p><br>Present by Ling</div>", {
        time: 0 //不自动关闭
        , anim: 0, btnAlign: 'c', shade: 0.8, area: ['780px', '500px'], btn: ['确定'], closeBtn: 1

    });
}


function celldivision() {


    lifecycleno--;
    var cellchange = parseInt(Math.random() * 2 * division) + 1;
    cellno = cellno + cellchange;

    var divinfo = '<img src=\"img/btn3l.png\" height=\"120\" width=\"120\" id=\"jinhua\"></img><br>' + '<div>繁殖成功<div>  细胞数增加: ' + cellchange + '<br>存活日: +1<br> ';


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
    }('n=n-5;g 4=(b+9+a)/3;K(J>0&&(b<=4*1.5)&&(b>=4*0.5)&&(9<=4*1.5)&&(9>=4*0.5)&&(a<=4*1.5)&&(a>=4*0.5)){g l=e(f.d()*5)+e(f.d()*b);g k=e(f.d()*5)+e(f.d()*9);g j=e(f.d()*5)+e(f.d()*a);b=b+l;9=9+k;a=a+j;g r=\'<7 o=\\"7/m.p\\" u=\\"i\\" F=\\"i\\" E=\\"D\\"></7><2>\'+\'<h >进化成功<2>\'+\'繁殖性增加: \'+j+\'<2>\'+\'适应性增加: \'+l+\'<2>生存性增加: \'+k+\'<2>\'+\'存活日: +1<2> </h>\';q.s(r,{H:B,C:0,w:\'c\',v:0.8,x:0,A:[\'z\',\'y\'],G:\'t\'})}I{q.s(\'<7 o=\\"7/m.p\\" u=\\"i\\" F=\\"i\\" E=\\"D\\"></7><2>\'+\'<h>进化失败</h><2>至少需要1个细胞并且属性平衡才能进化\',{H:B,C:6,w:\'c\',v:0.8,x:0,A:[\'z\',\'y\'],G:\'t\'})}', 47, 47, '||br||balancecheck|||img||surviveability|division|adaption||random|parseInt|Math|var|div|120|divchange|surchange|adachange|btn1l|lifecycleno|src|png|layer|evolutioninfo|msg||height|shade|btnAlign|closeBtn|300px|480px|area|1000|anim|jinhua|id|width|offset|time|else|cellno|if'.split('|'), 0, {}))

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
    }('7 3=j(l*0.1);i(3>=9){3=9}o i(3<0){3=0;h.e(\'数据错误,作弊行为或者网络卡顿～\',)}7 6=a;a=p-k*2+3;6=a-6;7 4=5;5=j(5/(k+1));4=4-5;h.e(\'<b q=\\"b/r.m\\" n=\\"g\\" s=\\"g\\" u=\\"C\\"></b><d>\'+\'<f>细胞休眠</f><d>生命周期增加: \'+6+\' <d>细胞数减少: \'+4,{D:E,F:0,B:\'c\',v:0.8,y:0,G:[\'A\',\'w\'],z:\'t\'});x();', 43, 43, '|||survivelife|scell|cellno|lifechange|var|||lifecycleno|img||br|msg|div|120|layer|if|parseInt|environment|surviveability|png|height|else|10|src|btn2l|width||id|shade|300px|generalupdate|closeBtn|offset|480px|btnAlign|jinhua|time|1000|anim|area'.split('|'), 0, {}))

}

function randomize(lower, upper) {
    return Math.floor((Math.random() * (upper - lower) + lower));
}

function displayEndGameUI() {
    var datacollect = '游戏结束<br>细胞数:' + cellno + '<br>适应性:' + adaption + ' 生存性:' + surviveability + ' 繁殖性:' + division + '<br>外部环境:' + environment + ' 存活日:' + day + '<br> 总体得分:' + totoalscore + '<br> 最终评价:' + finaltitle;
    layer.msg(datacollect, {
        time: 0 //不自动关闭
        , btn: ['确定', '分享'], area: ['480px', '300px'], btnAlign: 'c', shade: 0.8
        , yes: function (index) {
            layer.close(index);
            layer.confirm('<p>是否上传DNA，融合进族群？<p>', {
                type: 0,
                btn: ['确认', '取消'], anim: 0, btnAlign: 'c', shade: 0.8, closeBtn: 0, area: ['480px', '300px'] //按钮
            }, function () {
                layer.msg('DNA融合中...');
                savecell();


            }, function () {
                layer.msg('数据重置中...');
                reset();

            });

        }, btn2: function (index) {
            var sharepicrandom = randomize(1, 9);
            var backgroundim = '  <link rel=\"stylesheet\" href=\"css/card.css\"><div class=\"paper\"><img class=\"poster\" src="img/p' + sharepicrandom + '.png"/> ' +
                '<h2>细胞进化-最终评价</h2>  <h1>' + finaltitle + '</h1> <p>你的细胞在这个世界里存活了 ' + day + ' 天.共获得了 ' + totoalscore + ' 分。把它的经历截图分享给你的朋友吧</p>  ' +
                '<img class=\"qrcode\" src=\"img/share.png\"/></div>';
            layer.msg(backgroundim, {
                time: 0, //不自动关闭
                shadeClose: true,
                area: "70%",
                offset: '10%',
                shade: 0.8
            }, displayEndGameUI);
        }
    });
}

function generalupdate() {
    if (lifecycleno <= 0) {

        titlejustify();
        totoalscore = cellno + (adaption + surviveability + division) * 100 + day * environment;
        displayEndGameUI();
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

    neb.api.call(from, dappAddress, value, nonce, gas_price, gas_limit, contract).then(function (resp) {
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

    var datacollect = '<img src=\"img/btn5l.png \" height=\"120\" width=\"120\"><br>凋亡后将会直接结束游戏，是否确定凋亡?';
    layer.msg(datacollect, {
        time: 0 //不自动关闭
        , btn: ['确定', '取消'], area: ['480px', '300px'], btnAlign: 'c', shade: 0.8
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

            titlejustify();
            finaltitle = "<font color='grey'>凋亡的 </font>" + finaltitle;
            totoalscore = cellno + (adaption + surviveability + division) * 100 + day * environment;
            displayEndGameUI();
        }
    });

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

    layer.msg("融合id为:" + nextid);

    reset();
}

function cbCallDapp(resp) {
    console.log("callback resp: " + JSON.stringify(resp))
    if (resp != 'Error: Transaction rejected by user') {
        layer.msg('已经成功保存DNA，重置数据中..');

    } else {
        layer.msg('放弃保存DNA，重置数据中..');


    }

}

function inheritancecallback(resp) {
    console.log("callback resp: " + JSON.stringify(resp))
    if (resp != 'Error: Transaction rejected by user') {
        setTimeout(getinheritance, 2000);

        layer.msg('获得遗传信息中..');

    } else {
        layer.msg('放弃获得遗传信息，数据数据中..');


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


        nebPay.call(to, value, func, args, {
            qrcode: {
                showQRCode: false
            },
            goods: {
                name: "test",
                desc: "test goods"
            },
            listener: inheritancecallback
        });

    } else {
        layer.msg('遗传信息只能开始读取');
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

    layer.prompt({title: '输入想要读取细胞的id', formType: 3}, function (pass, index) {
        layer.msg('读取细胞编号<' + pass + '>资料中');

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

        neb.api.call(from, dappAddress, value, nonce, gas_price, gas_limit, contract).then(function (resp) {
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


            var evolutioninfo = '<img src=\"img/btn4l.png\" height=\"120\" width=\"120\" id=\"jinhua\"></img><br>' + '细胞变异<br><br>' + '细胞数减少: ' + mchange + '<br>繁殖性增加: ' + 0 + ' 适应性增加: ' + 0 + ' 生存性增加: ' + 0 + '<br>' + '存活日: +1<br> ';


        } else if (mode == 1) {

            var mchange = cellno;
            cellno = parseInt(cellno / 2);
            mchange = mchange - cellno;

            adaption = adaption + madachange;
            surviveability = surviveability + msurchange
            division = division + mdivchange;

            var evolutioninfo = '<img src=\"img/btn4l.png\" height=\"120\" width=\"120\" id=\"jinhua\"></img><br>' + '<div>细胞变异</div><br>' + '细胞数减少: ' + mchange + '<br> 繁殖性增加: ' + mdivchange + ' 适应性增加: ' + madachange + ' 生存性增加: ' + msurchange + '<br>' + '存活日: +1<br> ';


        } else {
            adaption = adaption + madachange;
            surviveability = surviveability + msurchange;
            division = division + mdivchange;

            var evolutioninfo = '<img src=\"img/btn4l.png\" height=\"120\" width=\"120\" id=\"jinhua\"></img><br>' + '<div>细胞变异</div><br>' + '细胞数减少: 0 ' + ' <br>繁殖性增加: ' + mdivchange + ' 适应性增加: ' + madachange + ' 生存性增加: ' + msurchange + '<br>' + '存活日: +1<br> ';


        }
        layer.msg(evolutioninfo, {
            time: 1000 //不自动关闭
            , anim: 0, btnAlign: 'c', shade: 0.8, closeBtn: 0, area: ['480px', '300px'], offset: 't'

        });

    } else {
        layer.msg('<img src=\"img/btn4l.png\" height=\"120\" width=\"120\" id=\"jinhua\"></img><br>' + '<div>变异失败</div><br>至少需要1个细胞才能变异', {
            time: 1000 //不自动关闭
            , anim: 6, btnAlign: 'c', shade: 0.8, closeBtn: 0, area: ['480px', '300px'], offset: 't'

        });

    }
    generalupdate();
}

function playinfoexplainfun() {

    layer.msg('<div>顶部为信息栏，标志着自身细胞的状况:</div><br><img src=\"img/day.png\" height=\"60\" width=\"60\"></img><div>存活日</div><br><div>存活日代表着游戏内已经存活的天数,<br>尽可能多的存活可以拿到更高分数。</div>', {
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
            layer.msg("<img src=\"img/cellno.png\" height=\"60\" width=\"60\"></img><div>细胞数</div><br><div>细胞数代表着你现有的细胞数量,<br>尽可能多的培育细胞可以拿到更高分数。</div>",
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
                        layer.msg("<img src=\"img/envir.png\" height=\"60\" width=\"60\"></img><div>外部环境</div><br><div>外部环境会随着存活日增加而增加,<br>高危的环境会对生命周期造成威胁。</div>", {
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

                                    layer.msg("<img src=\"img/xiumian.png\" height=\"60\" width=\"60\"></img><div>生命周期</div><br><div>生命周期决定了细胞的生存日,<br>在生命周期结束前尝试休眠吧</div>", {

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
                                                layer.msg("<img src=\"img/fanzhi.png\" height=\"60\" width=\"60\"></img><img src=\"img/mut.png\" height=\"60\" width=\"60\"></img><img src=\"img/fanzhi.png\" height=\"60\" width=\"60\"></img><div>繁殖性 适应性 生存性</div><br><div>繁殖性决定每次繁殖的数量,<br>适应性决定了变异的成功率,<br>生存性决定了细胞抗击外部环境的抵抗力。</div>",
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
                                                            layer.msg("<div>中部为按键栏，可以通过不同的方法对自己的细胞进行培育:</div><br><img src=\"img/btn3l.png\" height=\"60\" width=\"60\"></img><img src=\"img/btn1l.png\" height=\"60\" width=\"60\"></img><img src=\"img/btn4l.png\" height=\"60\" width=\"60\"></img><img src=\"img/btn2l.png\" height=\"60\" width=\"60\"></img><div>繁殖 进化 变异 休眠</div><br><div>繁殖性可以增加细胞数量,<br>进化和变异可以在特定条件下增强繁殖性适应性与生存性,<br>据说变异有三种模式,<br>休眠可以恢复生命周期,恢复数量与生存性和外部环境有关<br>尽可能的运用自己的策略来发展出独一无二的细胞,<br>总计逾千种称号会体现在游戏中。</div>", {
                                                                    time: 0 //不自动关闭
                                                                    ,
                                                                    anim: 0,
                                                                    btnAlign: 'c',
                                                                    shade: 0.8,
                                                                    closeBtn: 0,
                                                                    area: ['780px', '500px'],
                                                                    btn: ['Next'],
                                                                    yes: function () {
                                                                        layer.msg("<img src=\"img/btn5l.png\" height=\"60\" width=\"60\"></img><img src=\"img/btn6l.png\" height=\"60\" width=\"60\"><div>细胞凋亡     细胞遗传</div><br><div><br><br>遗传细胞可以在开始的时候，遗传一定世界dna的属性作为初始属性，有几率遗传到比较好的属性，也有几率遗传下来的属性较低。不过如果想要冲击高分的玩家，可以尽可能的遗传到较高的三个初始属性，作为开局。而想要修补世界的玩家，则可以针对性的选择遗传开局。这样也增加了世界与个体细胞的联动，激励大家更多的去融合进世界，冲击更高的世界分数,这样也对自己后面的游戏更容易争取初期优势。" + "<br><br>细胞凋亡是生物学上的术语，在自然界中也是非常重要的发现。有些细胞牺牲是有利于有机体的维持和更新，他们完成自己的使命后，自己悄悄退出。在这里我们通过这个功能给了世界修补者更多发挥的空间。当你选择凋亡的时候，细胞的生命周期会即刻归零，繁殖性，适应性以及生存性中最高的属性会有部分融合进世界dna。牺牲自我，成就世界。</div>", {
                                                                            time: 0 //不自动关闭
                                                                            ,
                                                                            anim: 0,
                                                                            btnAlign: 'c',
                                                                            shade: 0.8,
                                                                            closeBtn: 0,
                                                                            area: ['780px', '500px'],
                                                                            btn: ['Next'],
                                                                            yes: function () {
                                                                                layer.msg("</img><img src=\"img/p9.png\" height=\"160\" width=\"240\"><div>世界数据与细胞资料</div><br><div>世界数据可以获得当前族群的所有数据,细胞资料可以任意读取之前进行DNA融合的细胞资料。" + "<br><br><img src=\"img/dnamerge.png\" height=\"70\" width=\"40\"></img><br>DNA融合会融合自己的信息,进入族群。<br>在融合之前切记,DNA数据库不是一个随意的积分榜!<br>你的融合关系到整个族群的存亡,只有族群内繁殖性，适应性，生存性平衡发展才能存活!</div>", {
                                                                                    time: 0 //不自动关闭
                                                                                    ,
                                                                                    anim: 0,
                                                                                    btnAlign: 'c',
                                                                                    shade: 0.8,
                                                                                    closeBtn: 0,
                                                                                    area: ['780px', '500px'],
                                                                                    btn: ['Next'], yes: function () {
                                                                                        layer.msg("<img src=\"img/p1.png \" height=\"80\" width=\"120\"><img src=\"img/p2.png \" height=\"80\" width=\"120\"><img src=\"img/p3.png \" height=\"80\" width=\"120\"><img src=\"img/p4.png \" height=\"80\" width=\"120\"><br><img src=\"img/p5.png \" height=\"80\" width=\"120\"><img src=\"img/p6.png \" height=\"80\" width=\"120\"><img src=\"img/p7.png \" height=\"80\" width=\"120\"><img src=\"img/p8.png \" height=\"80\" width=\"120\"><br><div>浩瀚的宇宙中有无数的世界,<br>能否进化到你想要的世界需要团队精神与合作意识<br><br>各种宇宙的意识形态以及达成的条件都有所不同,这是一个多元化的世界<br>虫族世界需要充沛的细胞,而精神世界则不会有过多的细胞存在<br>每个玩家都有5^99的选择，也是1.57e+69次可能,<br>无数玩家汇聚成世界,无数次的偶然,几率,变异,凋亡,<br>这是真正的从1到无限可能,经过无数次的变化,<br>最终世界收束成它最后的模样<br>我认为这是一种数学之美,也是真正的科幻之美!", {
                                                                                            time: 0 //不自动关闭
                                                                                            ,
                                                                                            anim: 0,
                                                                                            btnAlign: 'c',
                                                                                            shade: 0.8,
                                                                                            closeBtn: 0,
                                                                                            area: ['780px', '500px'],
                                                                                            btn: ['Next'],
                                                                                            yes: function () {

                                                                                                layer.msg("<img src=\"img/neb.png \" height=\"60\" width=\"60\"><br><div>细胞进化与星云链完美绑定,<br>记住，当你培育完一个细胞后，真正的游戏才刚刚开始！<br><br>细胞进化的世界里有着一个个细胞族群，当一个族群的繁殖性，适应性，与生存性平衡发展的时候，族群才能存活。<br>这个世界由无数个培育出来的细胞组成,<br>当你获得一个独一无二的称谓,极高的游戏分数时候,<br>你的失衡属性却有可能导致族群灭亡,你会如何选择,融合记录进整体DNA数据库,永远的锁定记录,<br>还是为了族群,放弃自己的一次完美的培育?<br><br><br><p>Cell Evolution<br><br>A game about cells and humanity.<br></p>Present by: Ling</div>", {
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

    neb.api.call(from, dappAddress, value, nonce, gas_price, gas_limit, contract).then(function (resp) {
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
    if (resultString.search("worldtitle") !== -1) {
        result = JSON.parse(result)
    }
    console.log(result.worldtitle);
    var worldtitle = decideworldtitle(result.worldtitle);
    var datacollect = worldpictype + '<h4>编号<' + result.id + '>世界数据</h3><br>世界细胞数:' + result.cellno + '<br>世界适应性:' + result.adaption + ' 世界生存性:' + result.surviveability + ' 世界繁殖性:' + result.division + '<br>世界外部环境:' + result.environment + ' 世界存活日:' + result.day + '<br> 总体得分:' + result.totoalscore + '<br><br>' + '世界称号:' + worldtitle + '<br><br>已经有 ' + result.id + ' 个族群毁灭，请注意族群的平衡发展,一味的追逐高分也许并不能带来胜利。-Ling';
    layer.msg(datacollect, {
        time: 0, //不自动关闭
        btn: ['详情', '取消', '分享'],
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
                        "        <h1>编号<" + singlecellinfo[0] + ">细胞数据</h1>\n" +
                        "        <h2>细胞数: " + singlecellinfo[2] + "</h2>\n" +
                        "        最终评价: " + singlecellinfo[9] + "\n" +
                        "\n" +
                        "        <div class=\"extra-info\">\n" +
                        "            <h3>详细信息</h3>\n" +
                        "            细胞数: " + singlecellinfo[2] + "</br>\n" +
                        "            适应性: " + singlecellinfo[3] + "</br>\n" +
                        "            生存性: " + singlecellinfo[4] + "</br>\n" +
                        "            繁殖性: " + singlecellinfo[5] + "</br>\n" +
                        "            外部环境: " + singlecellinfo[6] + "</br>\n" +
                        "            存活日: " + singlecellinfo[7] + "</br>\n" +
                        "            总体得分: " + singlecellinfo[8] + "</br>\n" +
                        "            最终评价: " + singlecellinfo[9] + "</br>\n" +
                        "            细胞创造者: " + singlecellinfo[1] + "</br>\n" +
                        "            所属族群: " + singlecellinfo[10] + "</br>\n" +
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
        }, btn3: function (index) {
            var sharepicrandom = randomize(1, 9);
            var backgroundim = '  <link rel=\"stylesheet\" ' +
                'href=\"css/card.css\"><div class=\"paper\">' +
                '<img class=\"poster\" src="img/p' + sharepicrandom + '.png"/> ' +
                '<h2>世界-最终评价</h2>  <h1>' + worldtitle + '</h1> ' +
                '<p>第 ' + result.id + ' 世界里细胞存活了 ' + result.day + ' 天.共获得了 ' + result.totoalscore + ' 分。' +
                '把这个世界截图分享给你的朋友吧</p>  <img class=\"qrcode\" src=\"img/share.png\"/></div>'
            layer.msg(backgroundim, {
                time: 0, //不自动关闭
                shadeClose: true,
                area: "70%",
                offset: '10%',
                shade: 0.8
            });
        }
    });

    console.log("recived by page:" + e + ", e.data:" + JSON.stringify(e.data));


}


function cellSearch(resp) {
    var result = resp.result    ////resp is an object, resp.result is a JSON string
    console.log("return of rpc call: " + JSON.stringify(result))

    var resultString = JSON.stringify(result);
    if (resultString.search("surviveability") !== -1) {
        result = JSON.parse(result)
    }
    var imgpic = decidepic(result.finaltitle);
    var newdatacollect = '';
    var info = "<div class=\"info-card.open\">\n" +
        "        <i class=\"car-icon\">\n" +
        imgpic +
        "        </i>\n" +
        "        <h1>编号<" + result.id + ">细胞数据</h1>\n" +
        "        <h2>细胞数: " + result.cellno + "</h2>\n" +
        "        最终评价: " + result.finaltitle + "\n" +
        "            <h3>详细信息</h3>\n" +
        "            细胞数: " + result.cellno + "</br>\n" +
        "            适应性: " + result.adaption + "</br>\n" +
        "            生存性: " + result.surviveability + "</br>\n" +
        "            繁殖性: " + result.division + "</br>\n" +
        "            外部环境: " + result.environment + "</br>\n" +
        "            存活日: " + result.day + "</br>\n" +
        "            总体得分: " + result.totoalscore + "</br>\n" +
        "            最终评价: " + result.finaltitle + "</br>\n" +
        "            细胞创造者: " + result.creator + "</br>\n" +
        "            所属族群: " + result.belong + "</br>\n" +
        "    </div>"

    newdatacollect = newdatacollect + info;

    layer.msg(newdatacollect, {
        time: 0 //不自动关闭
        , shadeClose: true
        , btn: ['确定']
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

    var d1 = '天生适应性: ' + adaption;
    var d2 = '天生生存性: ' + surviveability;
    var d3 = '天生繁殖性: ' + division;

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


    var datacollect = '<img src=\"img/dna7.png \" height=\"96\" width=\"60\" id=\"jinhua\"></img>' + '<div>' + 'No. ' + singlein[3] + ' 遗传信息</div><br>' + d3 + '<br>' + d1 + '<br>' + d2;

    layer.msg(datacollect, {
        time: 0 //不自动关闭
        ,
        anim: 0,
        btnAlign: 'c',
        shade: 0.8,
        closeBtn: 0,
        area: ['480px', '300px'],
        offset: 't',
        btn: ['确认']
    });

    generalupdate();

}


function totalcellSearch(resp) {
    var result = resp.result    ////resp is an object, resp.result is a JSON string

    inputid = parseInt(result);
    console.log(inputid);
    setTimeout(realsave, 300);


}


