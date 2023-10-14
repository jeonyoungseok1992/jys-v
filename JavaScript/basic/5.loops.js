/**
 * Loops
 * 
 * 1) for
 * 2) while
 */

// 1~10까지 출력
for (let i = 1; i < 11; i++){
    console.log(i);
}
// 5~15까지 모든 수의 합을 구해라
let sum = 0;
for (let i = 5; i <= 15; i++){
    sum += i;
}
console.log(sum);
// 1단부터 9단까지 구구단 출력

for(let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(`${i} * ${j} = ` + (i * j));
    }
}

/**
 * for .. in
 */

const human = {
    name : 'jiwon',
    age : 55,
    gender : '남자'
}

for (let key in human) {
    console.log(key)
    console.log(human[key])
    console.log(key + ":" + human[key])
}

for (let i = 0; i < Object.keys(human).length; i++){
    console.log(Object.keys(human)[i])
    human[Object.keys(human)[i]]
}

/**
 * for .. of
 */

human = ['jiwon','sumin','so'];
for (let value of human) {
    console.log(value);
}


/**
 * while
 */

let number = 0;

while(number < 11){
    console.log(number);
    number++;
}

/**
 * do..while
 */

number = 0;

do{
    console.log(number);
    number++;
}while(number < 11);


/**
 * break
 * continue
 */

number = 0;
while(true){
    // if (number % 2 === 1) {
    //     number++;
    //     continue;
    // }

    console.log(number);
    number++;

    if (number > 10){
        break;
    }
}