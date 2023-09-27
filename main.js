// 1-misol //

// let demo = document.getElementById('demo')

// function some(some){
//     demo.innerHTML = some
// }

// let myPromise = new Promise(function(res , rej){
//     let x = 0
//     if(x==0){
//         res('OK')
//     }else{
//         rej("errror")
//     }
// })


// 2-misol //


// let is_shop_open = true
// let learning = (startlearning , time)=>{
//     return new Promise((resolve , reject) =>{
//         if(is_shop_open){
//           setTimeout(()=>{
//           resolve(startlearning())
//           } , time)
//         }else{
//           reject(console.log('magazin yopiq'))
//         }
//     })
// }



// let barber_shop = true
// let learning = (startlearning , time)=>{
//     return new Promise((resolve , reject) =>{
//         if(is_shop_open){
//           setTimeout(()=>{
//           resolve(startlearning())
//           } , time)
//         }else{
//           reject(console.log('sartarosh hona yopiq'))
//         }
//     })
// }


// 3-misol //


// let time = new Date().getHours();

// let delaver = true;

// if (time)  {
// }
// let buyurtma = ( time, work) =>{
//     return new Promise((res, rej) => {
//         if (delaver){
//             setTimeout(() => {
//                 res(work())
//             }, time);
//         } else {
//             rej (
//                 console.log('error')
//             )
//         }
//     })
// }

// buyurtma(2000, () => console.log('logation aniqlandi'))
// .then( () => {
//     return buyurtma(1000, () => console.log('mijozdan buyurtma olindi '))
// })
// .then( () => {
//     return buyurtma(1000, () => console.log('buyurtma tayyorlandi va'))
// })
// .then( () => {
//     return buyurtma(1000, () => console.log('buyurtmani oz egasiga olib borishgani ketishdi'))
// })
// .then( () => {
//     return buyurtma(1000, () => console.log('olib borishdi '))
// })
// .then( () => {
//     return buyurtma(1000, () => console.log('va mijoz raxmat aytdi'))
// })


// 4-misol //

 // let a = 5;
      // let b = 20;

      // for(let i = a; i <= b;i++) {
      //    console.log(i && a + b);
      // }
      // break;


// 5-misol //

 // let a = 0.1;
      // let b = 2;

      // for (let i = a; i <= b; i++) {
      // if (i % 0.2 ==0) {
      //    console.log(i);
      // }
      // }

// 6-misol //

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Dragonfruit", "Coconout");

// 10

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon","Pineapple");
// fruits.unshift("Dragonfruit", "Coconout");



// 7-misol //

// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// function myFunction(item) {
//   sum += item;
// }
// numbers.forEach(myFunction)

// function myFunction(item, index, arr) {
//   arr[index] = item * 10;
// }

// 8-misol //

// const chai = require("chai");
// const assert = chai.assert;


// describe('', function() {
//   it('should return correct text', function() {
//     assert.strictEqual(likes([]), 'no  likes');
//   })
// })

// 3

// public async Task<bool> CreateUser(User userInput)
// {
//     var validUserTypes = 'new string[]' { "regular"};

//     if (!validUserTypes.Contains(userInput.UserType))
//     {
//         throw new ArgumentOutOfRangeException(
//             nameof(userInput.UserType),
//             "Invalid user type. Must be one of: " + string.Join(", ", validUserTypes)
//         );
//     }}


// 9-misol //

// import { assert } from 'chai';


// describe("order", () => {
//    if ("could you work correctlly", () => {
//     assert.strictEqual(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
//    });  else {
//      console.log(err);
//    } {
//    }
// })
