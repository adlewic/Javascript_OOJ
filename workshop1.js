// JavaScript cheat sheet
///////////////////////////////////////////

//this is how you set an Object , the problem with this way is that you can't change 
// the values of the properties  of that object. 

var person = {
	name: "Imelda",
	age: 22
}
console.log (person)


// CLASS _ is the definition of an object 
// OBJECT _ is the actual object 

//for a principal  definion of what a person is we use this structure(THIS IS THE MORE PRACTICAL WAY )
	function Person(name,age) {
		this.name = name;
		this.age = age;
	}
// with the code above done we can now  create Persons with diferent values. 
	var person_one = new Person("Hegel",11);
	var person_two = new Person("Victor",40);

// Just to show the information in the console 
	console.log(person_one,person_two);



// PROTOTYPES, this allows you to modify and object and its instances 
	function Person(name,age){
		this.name = name;
		this.age = age;
	}

	Person.prototype.message = function(){
		return "The name of this person is " + this.name + "and the age is" + this.age ;
	}

	var person_one = new Person ("Monse",22)
	var person_two = new Person ("Hegel",11)

	console.log(person_one.message())
