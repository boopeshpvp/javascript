const person={
    details:function(){
         return this.name+" "+this.age
     }
 }
  const personData={
     name:'rajadw',
     age:20,
  }
 const result=person.details.bind(personData)()
 console.log(result)