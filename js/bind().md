bind()
========
bind 함수는 바인드하는 함수에서 사용하는 **this**의 대상을 지정해주는 역할을 한다.

```javascript
const A = {
    name: "a",
    aFunc: function() {
        console.log(this.name);
    }
}

const B = {
    name: "b"
}

A.aFunc(); // (1)
// a
A.aFunc.bind(B); // (2)
const foo1 = A.aFunc.bind(B); // (3-1)
const foo2 = A.aFunc.bind({name:"c"}) //(3-2)
foo1(); (4)
// b
foo2();
// c
```

<code>A</code>와 <code>B</code>라는 객체가 있다. 둘다 동시에 <code>name</code>객체를 가지고 있지만 <code>A</code>에만 <code>aFunc()</code>라는 함수형 객체가 존재 한다. 이때 <code>B</code>의 <code>name</code>값을 가지고 <code>A</code>의 <code>aFunc</code>함수를 실행하고 싶다면 (2)번의 형태로 작성할수 있다.

하지만 이대로라면 아무 값도 얻을수 없는데 그 이유는 <code>bind()</code>라는 함수는 반환형이 <code>void</code>이기 때문이다.

그렇기에 (3),(4) 와 같이 받아주는 변수가 있어야 사용할 수 있다.

☆3줄요약
-----------
* Function.prototype.bind()의 형태를 지니고 있기에 함수에서만 사용이 가능.(prototype은 생략 가능.)
* 사용 하고싶은 객체의 함수에서 사용하는 this값을 bind시켜 연결해준다고 보면 된다.
* 변수에 함수를 반환한다.
 

