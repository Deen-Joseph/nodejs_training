function person(name,age,place){
    this.name=name
    this.age=age
    this.place=place 
    this.display=function(){
        console.log("name:"+this.name, "age:"+this.age, "place:"+this.place)
    }

}

var ram= new person("ram",22,"kozhikode")
var dan = new person("dan",44,"england")

dan.display() 
ram.display()