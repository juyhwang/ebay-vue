    
/*
문제)
아래의 API는 100개의 게시글에 대한 정보를 배열로 받을 수 있는 API입니다.
https://jsonplaceholder.typicode.com/posts
HTTP 통신 라이브러리로 위 API를 호출한 뒤 특정 userId에 해당하는 변수를 다음과 같이 만듭니다.
ex) userId가 1이면 변수 이름은 user1
게시글 정보 중 해당 userId에 해당하는 게시글의 title 정보만 모아 아래와 같이 객체 형태로 저장합니다.
ex) user1 = {
  title1: '',
  title2: '',
  ...
  title10: ''
};
*/

/*
ex) API 예시
[
  {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
  }
  ...
]
*/

/*
ex) 답안 예시
userId가 1인 게시글의 제목을 객체에 모두 저장
var user1 = {
  title1: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  title2: "qui est esse",
  ...
}
var user2 = {
  title1: ...,
  title2: ...
}
*/



function getHttpMesage()
{
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            var theUrl = "https://jsonplaceholder.typicode.com/posts";

            var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
            xmlHttp.send( null );
            resolve(xmlHttp.responseText);
        }, 500)
    });
}

function extractTitle(userID, jsonRes)
{
    var parsedJson = JSON.parse(jsonRes);

    var extreactedArr = [];

    for( var i=0; i<parsedJson.length; i++) {
        if( parsedJson[i].userId == userID) {
            extreactedArr.push(parsedJson[i].title);
        }
    }

    return extreactedArr;
}


// TODO: 아래에 답안을 작성해주세요.
var userID = 1;

console.log("Start Process");

var promise1 = getHttpMesage();
promise1.then(function(value) {
    var extractResult = extractTitle(userID, value);
    console.info( "### result : userID(" + userID + ") ###");
    console.info( extractResult);
});
