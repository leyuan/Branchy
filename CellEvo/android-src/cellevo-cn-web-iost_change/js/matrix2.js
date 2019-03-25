
let IOST = require('iost');


let testglobalAdd = "ContractHBMiwQMZ1JEktwCkTQkXExgLLmMjyvgcYgegP668LpCA";
let testglobalNode = "http://13.115.202.226:30001/getContractStorage";
let globalAdd = "Contract6sGG1pBi42HYNrVZB2YDkMzKASiFeNCQ8PWmrTkTGdCZ";
let globalNode ="http://api.iost.io/getContractStorage";

let currentAdd=globalAdd;
let currentNode=globalNode;
//
// /*directive to initialize event on enter*/
// app.directive('ngEnter', function() {
//   return function(scope, element, attrs) {
//     element.bind("keydown keypress", function(event) {
//       if (event.which === 13) {
//         scope.$apply(function() {
//           scope.$eval(attrs.ngEnter);
//         });
//
//         event.preventDefault();
//       }
//     });
//   };
// });
//
// /*Main Controller*/
// app.controller('mainController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
//   /*animations*/
//   $scope.fadeHeader = false;
//   $scope.fadeSearchbar = false;
//   $scope.fadeResults = false;
//
//   $timeout(function() {
//     $scope.fadeHeader = true;
//     $scope.fadeSearchbar = true;
//   }, 1000);
//
//   $scope.submit = function() {
//     //Fade out previous results
//     $scope.fadeResults = false;
//     // Get search request from input field
//     var searchString = $scope.string;
//     if (/ /.test(searchString) === true) {
//       // modify string for search url
//       searchString = searchString.replace(/ /g, '%20');
//     }
//     // create search url
//       blockchainsearch(searchString);
//     // var searchUrl = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&inprop=url&callback=JSON_CALLBACK&srsearch=" + searchString + "&titles=Main%20Page";
//     // $http.jsonp(searchUrl)
//     //   .success(function(data) {
//     //     $scope.links = data.query.search;
//     //     console.log($scope.links);
//     //     // For Loop to modify data & Create URL and remove tags from snippet
//     //     for (var i = 0; i < 10; i++) {
//     //       // create wikipedia.org url link
//     //       $scope.links[i].urlTitle = $scope.links[i].title.replace(/ /g, "_");
//     //       console.log($scope.links[i].urlTitle);
//     //       $scope.links[i].url = "http://www.wikipedia.org/wiki/" + $scope.links[i].urlTitle;
//     //       console.log($scope.links[i].url);
//     //       // remove tags and add quotes to snippet
//     //       $scope.links[i].snippet = $scope.links[i].snippet.replace(/(<([^>]+)>)/g, '');
//     //       $scope.links[i].snippet = $scope.links[i].snippet.replace(/(&quot;)/g, '"');
//     //       $scope.links[i].snippet = $scope.links[i].snippet.replace(/(&amp;)/g, '&');
//     //       $scope.links[i].snippet = $scope.links[i].snippet.replace(/$/g, '...');
//     //     }
//     //   });
//     $timeout(function() {
//       $scope.fadeResults = true;
//     }, 500);
//   };
//
// }]);
blockchainsave("save");

function blockchainsearch(searchstring) {
    let url = currentNode;
    let obj = {
        "id": globalAdd,
        "field": searchstring,
        "key": "IOSTWiki"
    };

    let httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
    httpRequest.open('POST', url, true); //第二步：打开连接/***发送json格式文件必须设置请求头 ；如下 - */
    httpRequest.setRequestHeader("Content-type", "application/json");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）var obj = { name: 'zhansgan', age: 18 };
    httpRequest.send(JSON.stringify(obj));//发送请求 将json写入send中


    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            var json = httpRequest.responseText;//获取到服务端返回的数据
            console.log(json);
            console.log(JSON.parse(json));
            let decodejs=JSON.parse(json);

            var jsonData = decodejs.data;
            console.log(jsonData);
            var finalData= JSON.parse(jsonData);
            // console.log(finalData.id);
            console.log(finalData);
            // cellSearch(finalData);

        }
    };
}


function blockchainsave(savestring){
    console.log("enter iost save");
    const contractAddress = globalAdd;
    let title = "test";
    let label = "xx|xx|xx";
    let descr = "newtest";
    let modifydate = "newtime";

    // var test=new Array(nid.toString(),cellno.toString(),adaption.toString(),surviveability.toString(),division.toString(),environment.toString(),day.toString(),totoalscore.toString(),renderAndTranslate(finaltitle).toString());
    var test = new Array(title,label,descr,modifydate);
    window.IWalletJS.enable().then((account) => {
        if(!account) return; // not login

        const iost = window.IWalletJS.newIOST(IOST);


        const ctx = iost.callABI(contractAddress, "save", test);

        iost.signAndSend(ctx).on('pending', (trx) => {
            console.log(trx, 'trx')
            reset();
        })
            .on('success', (result) => {
                console.log(result, 'result')
                layer.msg('DNA Merge successfully!');
            })
            .on('failed', (failed) => {
                console.log(failed, 'failed')
                layer.msg('DNA failed to merge!');
            })

    })

}