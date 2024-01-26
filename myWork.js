
// Mini challenge 1

function logger(x) {
    console.log(x);
}


function asynDouble(num, callBack) {
    window.setTimeout(() => callBack(num * 2), 1000)
}



const a = asynDouble(10, (x) => console.log(x));