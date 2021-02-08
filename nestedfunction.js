var num=10 //new variable

function hello(){
   var num=20 //here by putting var new variable is declared

    function hey(){
        num=40  //num=20 is reassigned by num=40

}   
hey()
console.log(num) //values inside the sco  pe is printed
}

hello()
console.log(num)
