var num=10
var num =20

//it is in old version of javascrpt which overwrites the variable

// let hello =20
// let hello = 20

//in new version ES6 by using let is same variable is declared it will throw an error 

// console.log(hello)



function hello(){
    var i=0
    if (i===0){
        var hey=20
    }
    
    console.log(hey)       // 1, here by using var log can only printed from inside the function
}

 
// console.log(hey)          // 2, log will not print and output error
hello() 