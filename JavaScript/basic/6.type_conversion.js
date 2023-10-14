/**
 * 타입변환
 * Type Conversion
 * 
 * 1) 명시적
 * 2) 묵시적
 */

let age = 45;

//명시적
let strAge = age.toString();
console.log(typeof strAge);

//묵시적
let tmp = age + "";
console.log(typeof tmp);

console.log('98' + '2');
console.log('98' - 2);

/**
 * 명시적 형변환 예시
 */

console.log((99).toString());
console.log((true).toString());
console.log((Infinity).toString());

//숫자타입으로 변환
console.log(parseInt('0'))
console.log(parseFloat('1.12'))
console.log(+'0')

// Boolean

console.log(!!'jiwon');
console.log(!!'');
console.log(![]);
let m1 = {name : 'jiwon'}
let m2 = {name : 'jiwon'}

console.log({name : 'jiwon'} == {name : 'jiwon'})

