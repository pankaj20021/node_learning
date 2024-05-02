console.log('this server file of node js where we are lerning the node js ');
// const kapil = (a,b) =>{
//    return (a+b)
// }

// var kapil = (a,b) => a+b;
// var kapil = (a,b) => {return a+b}

// let  ans = kapil(55,10);

// console.log(ans);


// another type function like shortHand function 


// (function(){
//     console.log('hey i am pankaj chauhan');
// })();

function callback(){
    console.log('now adding is sucessfuly is completed ');
}

const add = function(a,b ,callback){
    var reult = (a + b)
    console.log('reult' +reult);
    callback();

}

add(4,564,callback);