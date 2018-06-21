객체 리터럴 방식
===

객체(Object) 리터럴(Literal) 방식의 클래스
---
---

문법
---

```javascript

var 인스턴스 = {

    프로퍼티 : 초기값
        . . .
    메서드 : function(){
        . . .
    }
}
```
---
특징 (객체 리터럴일 경우를 일컫는다.)
---
1) 인스턴스를 만드는 구문을 작성하지 않아도 되는 장점이 있습니다.

    인스턴스를 만드는 구문

    var 인스턴스 = new 클래스이름();

    객체 리터럴 방식은 정의함과 동시에 인스턴스가 자동으로 만들어지기 때문에 인스턴스를 만드는 구문을 작성하지 않아도 되는 장점이 있습니다.



2) 이에 반면 인스턴스를 여러 개 만들 수 없는 단점이 있습니다.

    예를 들어 여러 개의 탭 메뉴가 있을 경우

    객체 리터럴 방식의 클래스 방법을 사용할 경우 인스턴스가 자동으로 생성되기 때문에 코드의 재사용성이 떨어지는 단점을 가지고 있습니다.

---
주 용도는 여러 개의 데이터 포장용
---

객체 안의 데이터를 만들어서 인스턴스로 전달하는 역할만 한다.

실무에서 객체 리터럴은 다음과 같이 사용되고 있습니다.

```javascript
var $ch=$("#ch1");
$ch.css("position","absolute");
$ch.css("left",100);
$ch.css("top",100);

/*  객체 리터럴 방식 */
var $ch=$("#ch1");
$ch.css({
    position:"absolute",
    left:100,
    top:100
});
```

다음의 예제는 사용자 이름, 아이디, 별명, 나이, 주소를 매개변수 값으로 받아서 콘솔창에 출력하는 함수입니다.

1) 방법  - 객체 리터럴 사용 전
```javascript
/* 객체 리터럴 사용 전 */
function showInfo(userName, id, nickName, age, address) {
    console.log (
        "name = " + userName, 
        "id = " + id,
        "nickName = " + nickName, 
        "age = " + age, 
        "address = " + address
    );
}

showInfo("김재희", "jaehee", "재야", 20, "잠실");
```
2) 방법  - 객체 리터럴 사용 후 
```javascript
/* 객체 리터럴 사용 후 */

var userInfo = {
    userName : "재희",
    id : "jaehee",
    address : "잠실",
    age : 20,
    nickName : "재야"
};

// 함수에서 객체 리터털의 데이터를 받도록 합니다.
function showInfo(info) {
    console.log(
        "name = " + info.userName, 
        "id = " + info.id, 
        "nickName = " + info.nickName,
        "age = " + info.age, 
        "address = " + info.address
    );
}

// 함수 호출에 객체 리터럴 데이터를 넘겨줍니다.
showInfo(userInfo);
```
3) 방법 - 객체 리터럴 방식에 extend 를 적용
```javascript
/* 객체 리터럴방식에 extend 적용  */

// 기본 사용자 정보 값을 설정합니다.
var defaults = {
    userName : '미정',
    id : '아이디??',
    age : 0,
    address : "어디에 사세요?",
    nickName : ""
}

// 사용자 정의의 정보 갑을 설정합니다.
var userInfo = {
    userName : "김재희",
    id : "jaehee",
    address : '잠실'
}

// 함수에서 데이터 사용을 위한 로직
function showInfo(info) {

    // 기본 사용자 정보와 사용자 정의된 정보를 합치기(확장)
    info = $.extend({}, defaults, userInfo);

    console.log(
        "name = " + info.userName, 
        "id = " + info.id, 
        "nickName = " + info.nickName,
        "age = " + info.age, 
        "address = " + info.address
    );
}

// 함수 호출(사용자 정의 정보값 전달)
showInfo(userInfo);
```
