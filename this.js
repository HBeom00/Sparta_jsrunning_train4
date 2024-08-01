// 1. <빈칸>을 작성해주세요
const obj1 = {
  value: 20,
  getValue() {
    console.log(this.value);
  },
};
obj1.getValue();
//  출력값 20 */

//2. 웹 브라우저에서 setTimeout 함수 내에서 this가 가리키는 출력값이 왜 그런지 설명해주세요
// 정답 : this를 자신의 실행 컨텍스트로 바인딩 하므로 window를 가르킨다.
// 그래서 window 객체를 출력하게 된다.
const obj2 = {
  method: function () {
    console.log("첫번째 this : ", this);

    const innerMethod = () => {
      setTimeout(function () {
        console.log("두번째 this : ", this);
      });
    };
    innerMethod();
  },
};

obj2.method();
