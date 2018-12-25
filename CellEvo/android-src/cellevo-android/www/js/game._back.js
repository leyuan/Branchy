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

fanzhiimg.onclick = celldivision;
mutimg.onclick = mutation;
xiumianimg.onclick = sleep;
jinhua.onclick = evolution;
cellinfo.onclick = testread;
playinfoexplain.onclick = playinfoexplainfun;
aboutus.onclick = aboutusfun;
inheritance.onclick = callinheritance;
apoptosis.onclick = callapoptosis;
var NebPay = require("nebpay");
var nebPay = new NebPay();

//to check if the extension is installed
//if the extension is installed, var "webExtensionWallet" will be injected in to web page
if (typeof(webExtensionWallet) != "undefined") {

} else {

    layer.msg('请安装最新的星云钱包后刷新~ 点击游戏页面More Info也可以直接开启传送阵!');

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
var dappAddress = "n1irDuZ5RNio1zMro55UPZZSR7RaXYMnCPZ";
var totoalscore = 0;
var finaltitle = "";
var inputid = 0;
var day = 1;
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

    layer.prompt({title: '输入想要读取的世界的id', formType: 3}, function (pass, index) {
        layer.msg('读取世界编号<' + pass + '>资料中');

        var func = "getworld";
        var args = "[\"" + pass + "\"]";

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
});

function aboutusfun() {
    layer.msg("<img src=\"img/neb.png \" height=\"60\" width=\"60\"><br><div>细胞进化需要星云链网页前端的支持,这样可以进行DNA融合，体验到更多游戏性。<br> 下载地址:<br><a href=\"https:\/\/github.com\/ChengOrangeJu\/WebExtensionWallet\">https://github.com/ChengOrangeJu/WebExtensionWallet\</a><br><br>关于捐赠:<br>如果喜欢Cell Evolution可以对合约进行捐赠,<br>合约内作者没有任何提钱的方法,该捐赠是捐献给生态,每次的成功融合会获取合约内的1%<br><br>小记:<br>设计这款游戏的初衷就是想要做出一款真正的游戏,不是区块链的发币，博傻等传统意义上的游戏，我认为区块链是一种工具,让游戏过程,数据更加高效透明的情况下,通过自己的链上逻辑,拥有自己的生态逻辑,可以让游戏过程更加独具游戏性。接着我发现跟传统意义不一样，如果真的有一个游戏可以让所有人参与进生态,无数个体决定世界的走向，那么这就不是一个单机经营，一个简单的积分榜，而是一个真正的匿名群体游戏，有追逐高分的玩家，有群体合作的玩家，有新手，也有高玩，有创造者，也有修补者，各色各样的个体构建一个真正的区块链游戏, Cell Evolution.<br>希望你们喜欢。 -Ling</div>", {
        time: 0 //不自动关闭
        , anim: 0, btnAlign: 'c', shade: 0.8, area: ['780px', '500px'], btn: ['捐赠'], closeBtn: 1, yes: function () {
            var func = "donate"
            //var args = "[\"" + nextid + "\",\"" +1+ "\"]";
            var args = "[\"" + 0 + "\"]"
            console.log(args);


//              window.postMessage({
//                                 "target": "contentscript",
//                                 "data":{
//                                 "to" : dappAddress,
//                                 "value" : "0.0001",
//                                 "contract" : {
//                                 "function" : func,
//                                 "args" : args
//                                 }
//                                 },
//                                 "method": "neb_sendTransaction"
//                                 }, "*");
        }

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

function generalupdate() {
    if (lifecycleno <= 0) {

        titlejustify();
        totoalscore = cellno + (adaption + surviveability + division) * 100 + day * environment;
        var datacollect = '游戏结束<br>细胞数:' + cellno + '<br>适应性:' + adaption + ' 生存性:' + surviveability + ' 繁殖性:' + division + '<br>外部环境:' + environment + ' 存活日:' + day + '<br> 总体得分:' + totoalscore + '<br> 最终评价:' + finaltitle;
        layer.msg(datacollect, {
            time: 0 //不自动关闭
            , btn: ['确定'], area: ['480px', '300px'], btnAlign: 'c', shade: 0.8
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

            }
        });
        //   lifecycleno=20;

    } else {
        console.log(division);
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


function callapoptosis() {

    var datacollect = '<img src=\"img/btn5l.png \" height=\"120\" width=\"120\"><br>凋亡后将会直接结束游戏，是否确定凋亡?';
    layer.msg(datacollect, {
        time: 0 //不自动关闭
        , btn: ['确定', '取消'], area: ['480px', '300px'], btnAlign: 'c', shade: 0.8
        , yes: function (index) {

            if ((adaption >= surviveability) && (adaption >= division)) {
                surviveability = 0;
                division = 0;
                adaption = parseInt(Math.random() * adaption);

            }

            if ((surviveability >= adaption) && (surviveability >= division)) {
                adaption = 0;
                division = 0;
                surviveability = parseInt(Math.random() * surviveability);
            }

            if ((division >= surviveability) && (division >= adaption)) {
                adaption = 0;
                surviveability = 0;
                division = parseInt(Math.random() * division);
            }

            titlejustify();
            finaltitle = "<font color='grey'>凋亡的 </font>" + finaltitle;
            totoalscore = cellno + (adaption + surviveability + division) * 100 + day * environment;
            var newdatacollect = '游戏结束<br>细胞数:' + cellno + '<br>适应性:' + adaption + ' 生存性:' + surviveability + ' 繁殖性:' + division + '<br>外部环境:' + environment + ' 存活日:' + day + '<br> 总体得分:' + totoalscore + '<br> 最终评价:' + finaltitle;
            layer.msg(newdatacollect, {
                time: 0 //不自动关闭
                , btn: ['确定'], area: ['480px', '300px'], btnAlign: 'c', shade: 0.8, yes: function () {

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

                }

            });


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
        layer.msg('已经成功保存DNA，重置数据中..');

    } else {
        layer.msg('放弃保存DNA，重置数据中..');


    }

}

function inheritancecallback(resp) {
    console.log("callback resp: " + JSON.stringify(resp))
    if (resp != 'Error: Transaction rejected by user') {
        setTimeout(getinheritance, 300);

        layer.msg('获得遗传信息中..');

    } else {
        layer.msg('放弃获得遗传信息，数据数据中..');


    }

}

function callinheritance() {
    if (day == 1) {
        var nextid = parseInt(inputid) + 1;
        var to = dappAddress;
        var value = 0;
        console.log("********* call smart contract \"sendTransaction\" *****************")

        var func = "inheritance"
        //var args = "[\"" + nextid + "\",\"" +1+ "\"]";
        var args = "[\"" + "\"]"
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

function testread() {

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
                                                                        layer.msg("<img src=\"img/worlddata.png\" height=\"60\" width=\"60\"></img><img src=\"img/cellinfo.png\" height=\"60\" width=\"60\"><div>世界数据 细胞资料</div><br><div>世界数据可以获得当前族群的所有数据,<br>细胞资料可以任意读取之前进行DNA融合的细胞资料。" + "<br><br><img src=\"img/dnamerge.png\" height=\"60\" width=\"60\"></img><br>DNA融合会融合自己的信息,进入族群。<br>每次融合都会拿到当前族群内总钱数的1%作为回报。<br>在融合之前切记,DNA数据库不是一个随意的积分榜!<br>你的融合关系到整个族群的存亡,只有族群内繁殖性，适应性，生存性平衡发展才能存活!</div>", {
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
    var args = "[\"" + "\"]";
    console.log(args);


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


function getworld() {

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

window.addEventListener('message', function (e) {

    if (!!e.data.data.neb_call) {
        var result = e.data.data.neb_call.result

        if (result === 'null') {
            console.log("meidongxi")
        } else {

            try {

                result = JSON.parse(e.data.data.neb_call.result);

                if (result.worldtitle) {

                    var datacollect = '<img src=\"img/worlddata.png \" height=\"120\" width=\"120\"></img><br>' + '<h4>编号<' + result.id + '>世界数据</h3><br>世界细胞数:' + result.cellno + '<br>世界适应性:' + result.adaption + ' 世界生存性:' + result.surviveability + ' 世界繁殖性:' + result.division + '<br>世界外部环境:' + result.environment + ' 世界存活日:' + result.day + '<br> 总体得分:' + result.totoalscore + '<br>' + '世界称号:' + result.worldtitle + '<br>已经有 ' + result.id + ' 个族群毁灭，请注意族群的平衡发展,一味的追逐高分也许并不能带来胜利。-Ling';
                    layer.msg(datacollect, {
                        time: 0 //不自动关闭
                        ,
                        btn: ['详情', '取消']
                        ,
                        anim: 0,
                        btnAlign: 'c',
                        shade: 0.8,
                        closeBtn: 0,
                        area: '80%',
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
                                    var singlecellinfo = singlecell[i].split(',');

                                    var info = "<div class=\"info-card\">\n" +
                                        "        <i class=\"car-icon\">\n" +
                                        "            <img src=\"img/cellinfo.png\" height=\"90\" width=\"90\"></img>\n" +
                                        "        </i>\n" +
                                        "        <h1>编号1细胞数据</h1>\n" +
                                        "        <h2>细胞数：10032</h2>\n" +
                                        "        <p>最终评价： xxxx</p>\n" +
                                        "\n" +
                                        "        <div class=\"extra-info\">\n" +
                                        "            <h4>详细信息</h4>\n" +
                                        "            细胞数:</br>\n" +
                                        "            适应性:</br>\n" +
                                        "            生存性:</br>\n" +
                                        "            繁殖性:</br>\n" +
                                        "            外部环境:</br>\n" +
                                        "            存活日:</br>\n" +
                                        "            总体得分:</br>\n" +
                                        "            最终评价:</br>\n" +
                                        "            细胞创造者:</br>\n" +
                                        "            所属族群:</br>\n" +
                                        "        </div>\n" +
                                        "    </div>"
                                    newdatacollect = newdatacollect + info;

                                    // newdatacollect = newdatacollect + '
                                    // <br><img src=\"img/cellinfo.png \" height=\"120\" width=\"120\" id=\"jinhua\"></img>
                                    // <h4>编号<' + singlecellinfo[0] + '>细胞数据</h4>
                                    // <br>细胞数:' + singlecellinfo[2] + '<br>适应性:' + singlecellinfo[3] + ' 生存性:' + singlecellinfo[4] + ' 繁殖性:' + singlecellinfo[5] + '
                                    // <br>外部环境:' + singlecellinfo[6] + ' 存活日:' + singlecellinfo[7] + '<br> 总体得分:' + singlecellinfo[8] + '<br>最终评价:' + singlecellinfo[9] + '<br>
                                    // <font color=\'white\'>细胞创造者: ' + singlecellinfo[1] + '<br>所属族群:' + singlecellinfo[10] + '</font>';


                                }
                            }

                            newdatacollect += "</section>";


                            // layer.config({
                            //     path: 'js/' //layer.js所在的目录，可以是绝对目录，也可以是相对目录
                            // });

                            // layer.open({
                            //     type: 1,
                            //     time: 0,
                            //     content: newdatacollect,
                            //     scrollbar: false,
                            //     area: ['935px', '80%']
                            // });
                            layer.msg(newdatacollect, {
                                scrollbar: false,
                                time: 0, //不自动关闭
                                // btn: ['确定'],
                                shadeClose: true,
                                anim: 0,
                                btnAlign: 'c',
                                shade: 0.8,
                                closeBtn: 0,
                                area: ['935px', '80%'],
                                offset: 'c',
                                fixed: false
                            });
                        }
                    });

                    console.log("recived by page:" + e + ", e.data:" + JSON.stringify(e.data));

                } else if (result.surviveability) {
                    var datacollect = '<img src=\"img/cellinfo.png \" height=\"120\" width=\"120\" id=\"jinhua\"></img><h4>编号<' + result.id + '>细胞数据</h4><br>细胞数:' + result.cellno + '<br>适应性:' + result.adaption + ' 生存性:' + result.surviveability + ' 繁殖性:' + result.division + '<br>外部环境:' + result.environment + ' 存活日:' + result.day + '<br> 总体得分:' + result.totoalscore + '<br>最终评价:' + result.finaltitle + '<br><font color=\'white\'>细胞创造者: ' + result.creator + '<br>所属族群:' + result.belong + '</font>';
                    layer.msg(datacollect, {
                        time: 0 //不自动关闭
                        , btn: ['确定']
                        , anim: 0, btnAlign: 'c', shade: 0.8, closeBtn: 0, area: ['768px', '480px'], offset: 'c'
                    });
                    console.log("recived by page:" + e + ", e.data:" + JSON.stringify(e.data));
                } else if (result.length == 3) {

                    adaption = parseInt(result[0]);
                    surviveability = parseInt(result[1]);
                    division = parseInt(result[2]);
                    day--;
                    var datacollect = '<img src=\"img/btn6l.png \" height=\"120\" width=\"120\" id=\"jinhua\"></img>' + '<div>遗传信息</div><br>天生繁殖性:' + result[2] + '<br>天生适应性:' + result[0] + '<br>天生生存性:' + result[1];

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

//                        layer.msg('<img src=\"img/btn6l.png\" height=\"120\" width=\"120\" id=\"jinhua\"></img><br>' + '<div>读取遗传信息成功</div><br>天生适应性:'+adaption+'<br>天生生存性:'+surviveability+'<br>天生繁殖性:'+divsion, {
//                                  time: 1000 //不自动关闭
//                                  , anim: 6, btnAlign: 'c', shade: 0.8, closeBtn: 0, area: ['480px', '300px'], offset: 't'
//
//                                  });
                    generalupdate();


                } else {
                    inputid = result;
                    console.log(inputid);
                    setTimeout(realsave, 300);

                }


            } catch (err) {
            }

            if (!!result.key) {

            }
        }
    }
});

