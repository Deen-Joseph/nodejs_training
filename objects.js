var person={name:"deen",age:25,place:"kochi",display: function () {
    
    var name="Abhi"

    console.log(this.name) //to get name inside object this. must be included
}} 
for(x in person){
    console.log(person[x])
}


person.dob="27-03-1997"

person.displayAge=function () {
console.log(this.age)

    
}

console.log(person.displayAge())