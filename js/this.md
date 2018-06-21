this 총정리
===
this?
---
this 는 일반적으로 메서드가 호출한 객체의 속성(프로퍼티)입니다.

this 는 객체를 생성하는 동시에 자동 생성됩니다.
```javascript
function MyClass(){ 
    this.property1 = "value1"; 
} 

MyClass.prototype.method1 = function(){ 
    console.log(this.property1); 
} 

var my1 = new MyClass(); 

my1.method1();
```

this 가 만들어지는 경우는 일반적으로 다음과 같습니다.

> 1) 일반 함수에서의 this
>
> 2) 중첩 함수에서의 this
>
> 3) 이벤트에서의 this
> 
> 4) 메서드에서의 this
> 
> 5) 메서드 내부의 중첩함수에서의 

---
일반 함수에서의 this
---
일반 함수에서의 this는 무조건 window를 가리킵니다.

```javascript
var data = 10; 
// window.data == this.data 형식과 동일하다. 
function outer(){ 
    this.data = 20; 
    data = 30;
    console.log("1. data = " + data); // 30 
    console.log("2. this.data = " + this.data); // 30 
    console.log("3. window.data = " + window.data); // 30 
}
outer();
```
---
일반 중첩함수에서 this
---
중첩 함수에서의 this 는 window 를 가리킵니다.
```javascript
var data = 10; 

function outer(){ 
    function inner(){

        this.data = 20; 
        data = 30;
        console.log("1. data = " + data); // 30 
        console.log("2. this.data = " + this.data); // 30 
        console.log("3. window.data = " + window.data); // 30  
    }
    inner();
}   
outer();
```
---
이벤트 리스너에서 this
---
이벤트에서의 this는 이벤트가 발생한 객체를 가리킵니다.

```javascript
리스너실행 

var data = 10; 

$(document).ready(function(){ 

    // 이벤트 리스너 등록 
    $("#myButton").click(function(){ 

        this.data = 20; 
        data = 30; 
        this.style.color = '#000'; 

        console.log("1. data = " + data); // 30 
        console.log("2. this.data = " + this.data); // 20 (이벤트 핸들러의 객체) 
        console.log("3. window.data = " + window.data); // 30 
    }); 
});
```
---
메서드에서 this
---
메서드 내에서의 this 는 메서드를 호출한 객체를 가리킵니다.

```javascript
var data = 10;

function MyClass(){ 
    this.data = 20; 
    data = 30; 
    console.log("1. data = " + data); 
    console.log("2. this.data = " + this.data); 
    console.log("3. window.data = " + window.data); 
} 

// 인스턴스 생성 
var my1 = new MyClass(); // 30, 20, 30
// this 는 메소드를 호출한 객체를 나타낸다. 
// 여기선 my1 이 인스턴스 

// 일반 함수 호출할 경우 
MyClass(); // 30, 30, 30
```
---
메서드 내부의 중첩함수에서 this
---
메서드 내부의 중첩함수에서의 this 는 window 를 가리킵니다.

그리고 메서드 내부의 중첩함수에서 this 를 보존하는 방법은 아래와 같습니다.

```javascript
var data = 10;

function MyClass(){

    this.data = 50; 
    
    // 내부 함수내에서 this 를 보존하는 방법 
    var objThis = this; 
    objThis.data = 40; 

    function inner(){ 

        data = 30; // window.data 와 같음. 
        this.data = 20; // window.data 와 같음.

        console.log("1. data = " + data); // 30; 
        console.log("2. this.data = " + this.data); // 30 중첩(내부)함수, 즉 컨텍스트에 따라 this 가 달라진다. 
        console.log("3. window.data = " + window.data); 
        console.log("4. objThis = " + objThis.data); 
    } 
    inner(); 
} 

// 인스턴스 생성 
var my1 = new MyClass();
```
---
총정리 : this 가 만들어지는 일반적인 경우
---
1) 일반함수에서 this
- window
2) 중첩함수에서 this
- window
3) 이벤트에서 this
- 이벤트를 발생한 객체
4) 메서드에서 this
- 메소드를 호출한 객체
5) 메서드 내부의 중첩 함수에서 this
- window 지만 보존법이 있음.




