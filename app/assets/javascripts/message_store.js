// Message Store for Bot
var MessageStore = (function(){
	var MessageStore = {};
	// Private member
	var data = {
		steak: "Carbernet Sauvenion",
		samon: "Chandonay"
	};

  var responses = {
    hit: ["Bingo ! I know it !!!"],
    miss: ["Sorry I don't know", "I have no idea", "I am Little D(ull)", "Please don't fool me", "I refuse your questions", "Stop", "..."]
  };

  var missIndex = 0;

	MessageStore.respondTo = function(message) {
		// Strip keywords
		var words = message.trim().toLowerCase().split(' ');
		var hits = [];

		// Get keywords hits
		$.each(words, function(i, word){
			if (data[word] && hits.indexOf(word) == -1) {
				hits.push(word);
			}
		});

    var responseText = [];
    if (hits && hits.length) {
      responseText.push(responses["hit"][0]);
      $.each(hits, function(i, word){
        responseText.push(data[word]);
      });
    } else {
      // Iterate miss notification until ends
      responseText.push(responses["miss"][missIndex]);
      if (missIndex < (responses["miss"].length-1)) {
        missIndex += 1;
      }
    }
		// Set as raw HTML
		return responseText.join('<br/><br/>');
	};
	// Expose public
	return MessageStore;
}());
