
Array.prototype.even=function(){
    const arrayNum=this;
    return new Promise(function(resolve,reject){
        resolve(arrayNum.filter((even)=>even%2===0));
    }).then(data=>console.log(data));
}
Array.prototype.odd=function(){
    const arrayNum=this;
    return new Promise(function(resolve,reject){
        resolve(arrayNum.filter((even)=>even%2!=0));
    }).then(data=>console.log(data));
}

console.log('start');
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
console.log('end');