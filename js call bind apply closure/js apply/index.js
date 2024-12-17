const person = {
    name:"ram",
    age:20,
    address:function (char,gen){
        return this.name + " " + char+ " "+gen
    }
}

const person1={
    name:'ragu'
}

const result=person.address.apply(person1,['good','boy'])
console.log(result)