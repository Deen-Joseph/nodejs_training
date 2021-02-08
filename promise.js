//CALLBACK HELL

// function add(num1,num2,callback){  //callback can be any word it can act as call back
//     let err=false
//     if(num1==0){
//         err=true     //manually created an error
//     }
//     callback(num1+num2,err)

// }

// function multiply(num1,num2,callback){
//     callback(num1*num2)
// }
// function div(num1,num2,callback){
//     callback(num1/num2)
// }
 
// add(20,20,(sum,err)=>{
//     if(err){
//     console.log("First number is zero")
//     }else{
//     console.log(sum)
//     multiply(sum,sum,(product)=>{
//         console.log(product)
//         div(product,10,(result)=>{
//             console.log(result)
//         })
//     })
//     } 
// }) 


//promise 

const { resolve,reject } = require('promise')  //automatic
const promise=require('promise')

function add(num1,num2){
    return new promise((resolve,reject)=>{
        if(num1==0){
            reject("First number is zero")
        }
        resolve(num1+num2)
    })
}
    
    function multiply(num1,num2){
        return new promise((resolve,reject)=>{
            if(num1==0){
                reject("First number is zero")
            }
            resolve(num1*num2)
        })
    }
        function div(num1,num2){
            return new promise((resolve,reject)=>{
                if(num1==0){
                    reject("First number is zero")
                }
                resolve(num1/num2)
            })
}

add(10,20).then((sum)=>{
    console.log( sum)
    return multiply(sum,sum)
}).then((product)=>{
    console.log(product)
    return div(product,10)
}).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})