/**
 * callback
 */

// function getHuman(callback){

//     setTimeout(function(){ //서버에 요청한다는 가정(응답은 2초가 걸린다.)
//         let human = {
//             name : "김시원",
//             age: 44
//         }
//         callback(human)
//     },2000)
// }

// let retrunFunk = function(human){
//     console.log('응답완료')
//     console.log(human.name)
//     console.log(human.age)
// }

// console.log('요청전송')
// getHuman(retrunFunk)


// function getHuman(callback){
//     setTimeout(function(){ //서버에 요청한다는 가정(응답은 2초가 걸린다.)
//         callback({
//             name : "김시원",
//             age: 44
//         })
//     },2000)
// }

// console.log('요청전송')
// getHuman(function(human){
//     console.log('응답완료')
//     console.log(human.name)
//     console.log(human.age)
// })


// function work3(){
//     setTimeout(function(){
//         console.log("1번 끝")
//         setTimeout(function(){
//             console.log('2번 끝')
//             setTimeout(function(){
//                 console.log("3번 끝")
//             })
//         },2000)
//     },2000)
// }

/**
 * Promise
 */

// function tmp(){

// }

// //this가 안생김
// tmp = () => {

// }

// const timeoutPromise = new Promise(function(resolve, reject){
//     console.log('실행중...')
//     console.log('실행중...')
//     console.log('실행중...')
//     setTimeout(function(){
//         resolve({
//             name : "김시원",
//             age: 44
//         })
//     }, 2000)
// })

// timeoutPromise.then(function(res){
//     console.log(res.name)
//     return timeoutPromise;
// })

const getPromise = function (number) {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // if (number > 5) {
            //     resolve('성공');
            // } else {
            //     reject('실패');
            // }
            resolve('성공');
        }, 2000)
    })
}

// getPromise(3)
//     .then(function(res){
//         console.log(res)
//     })
//     .catch(function(err){
//         console.log(err)
//     })
//     .finally(function(){
//         console.log("끝")
//     })

Promise.all([
    getPromise(1),
    getPromise(5),
    getPromise(7)
    ])
    .then(function (res) {
        console.log(res)
    })