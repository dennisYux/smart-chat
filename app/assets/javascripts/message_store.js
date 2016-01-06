////////// Message Store for Bot //////////
var MessageStore = (function(){
	var MessageStore = {};
	// Private member
	var data = {
		steak: "When pairing wines with leaner cuts, look for light or medium-bodied red wines. These wines should have slightly higher acidity that will cut through the texture of the lean meat.<br/>\
            <a href='http://winefolly.com/tutorial/wine-with-lamb-steak-red-meat/'>http://winefolly.com/tutorial/wine-with-lamb-steak-red-meat/</a>",
		salmon: "Pair a plain and simple salmon with an oak-aged white wine or time-aged white wine, something with more robust Meyer lemon, nut or brûlée notes that will spice and texture the fish.<br/>\
            <a href='http://winefolly.com/tutorial/pairing-wine-with-salmon'>http://winefolly.com/tutorial/pairing-wine-with-salmon</a>"
	};

  var responses = {
    hit: ["Bingo ! I know it !!!"],
    miss: ["Sorry I don't know", "I have no idea", "I am Little D(ull)", "Please don't fool me", "I refuse your questions", "Stop", "..."]
  };

  var missIndex = 0;

	MessageStore.respondTo = function(message) {
		// Strip keywords
		var words = message.trim().replace(/[^\w\s]/g, "").toLowerCase().split(' ');
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
