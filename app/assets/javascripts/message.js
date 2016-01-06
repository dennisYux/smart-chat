////////// Message //////////
var Message = function(opts) {
  if (typeof opts == "undefined") opts = {};
	this.person = opts.person;
	this.text = opts.text;
  // ...
};