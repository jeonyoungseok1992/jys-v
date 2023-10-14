/**
 * Async / Await
 */

const getPromise = function(seconds){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('완료');
        }, seconds * 1000);
    })
}

async function runner(){
    const res1 = await getPromise(1);
    console.log(res1);

    const res2 = await getPromise(2);
    console.log(res2);

    const res3 = await getPromise(3);
    console.log(res3);
}

runner();
