// 1. 출력값과 출력되는 값의 이유를 설명해주세요
// 정답 : yuno2 -> myName 함수 안에 있는 name이 먼저 읽혀서 !! 스코프는 안에서 밖으로 읽힌다고 알고 있습니다 !

var name = "yuno";

function myName() {
  var name = "yuno2";
  function a() {
    console.log(name);
  }
  return a();
}

myName();

// 2. 출력값과 출력되는 값의 이유를 설명해주세요
// 정답 : 2 -> let이나 const 였다면 1이 출력되는게 맞지만 var로 선언하였기 때문에 2가 찍힌다

function test() {
  var x = 1;

  if (true) {
    var x = 2;
  }

  console.log(x);
}

test();

// 3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.
// 정답 : 화살표 함수안에서 this는 nameObj 객체를 가르키므로 yuno가 출력되고, 일반 함수 내에서의 this는 nameObj객체 밖인 window?를 가르키는데
// 전역에 name이라는 변수가 없으므로 undefined가 출력된다.

const nameObj = {
  name: "yuno",
  method: function () {
    const arrow = () => {
      console.log(`화살표 함수 : ${this.name}`);
    };
    function normal() {
      console.log(`일반 함수 : ${this.name}`);
    }
    arrow();
    normal();
  },
};

nameObj.method();
