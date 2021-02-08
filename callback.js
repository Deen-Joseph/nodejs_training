// var dt= new Date()                  //prints current date
// console.log('hello')

// for(i=0;i<100;i++){
//     console.log('Loop')
// }
// console.log('end')

// var diff= new Date()-dt           // find the differece bw earlier and current date

// console.log(diff)                 // we will get the execution time

// function longTask(millSecondTime){

//     dt= new Date()
//     while((new Date-dt)<= millSecondTime){
 
//     }
// }
// console.log('started')
// longTask(4000)
// console.log('end')

// function showEnd(){
//     console.log('end')
// }
// console.log('started')
// setTimeout(showEnd,2000)              //setimeout is asynchronus all task completes before 2 sec and output printed
                                      

// console.log('started')               // end is printed 2 sec later
// setTimeout(showEnd,2000)

// console.log('started')
// setTimeout(showEnd,2000)


var hello =function(data){
    console.log("Data:"+data)
}

var hey= function(callback){
    console.log('hey working'+callback)
}