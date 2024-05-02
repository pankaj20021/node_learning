const { log } = require('console');
const fs = require('fs');
const os = require('os');

const user = os.userInfo();
console.log(user);
console.log(user.username);



// fs.appendFile('greeting.txt','HI' , +user.username+ '!\n', ()=>{
//     console.log('now file is created ')
// })

fs.appendFile('greeting.txt' , 'Hi' , +  user.username +  '!\n' , ()=>{
console.log("file is created ");
})