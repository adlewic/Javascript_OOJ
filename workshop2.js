//PROPERTIES OF AN OBJECT
////////////////////////////

var person = {
	name:"Imelda",
	lname:"Alonso"
}
var information;


for (var information in person) {
	console.log(person[information]);
}

//MULTIPLIER _ with prototype
////////////////////////////
function Multiplier(){
	this.number_one = 1;
}

Multiplier.prototype.multiply = function(number){
	return this.number_one = this.number_one*number;
}


Multiplier.prototype.getCurrentValue =function (){
	return this.number_one
}


var result = new Multiplier();
console.log(result.multiply(5));
console.log(result.multiply(5));
console.log(result.getCurrentValue());




