/**
 * Closure
 * 
 * "클로저는 어떤 함수와 해당 함수가 선언된 정적 환경의 조합입니다."
 * 
 * "내부 함수에서 외부 함수의 변수를 사용할 때 우리는 클로저라고 한다"
 * (상위 함수보다 하위함수가 더 오래 살아있는 경우)
 */

let number = 5;
let number1 = 5;
let number2 = 5;
let number3 = 5;

function getNumber(){
    let number = 5;

    function inner(){
        number++;
        return number;
    }

    return inner;
}

let run = getNumber()

console.log(run())
console.log(run())
console.log(run())
console.log(run())
console.log(run())


const initData = {
    loginUser : {
        name : '최지원'
    }
}