// Global var/consts
var PERSON_ID = 0;

// Person in chat
var Person = function(name, opts) {
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