// Global var/consts
var PERSON_ID = 0;

////////// Person in Chat //////////
var Person = function(name, opts) {
  if (typeof opts == "undefined") opts = {};
	this.id = (PERSON_ID += 1);
  this.name = name;
  // ...
};

///// Add prototype methods /////
(function(){
  this.is = function(person) {
    return this.id === (person && person.id);
  };
}).call(Person.prototype);