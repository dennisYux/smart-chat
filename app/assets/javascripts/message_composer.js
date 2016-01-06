// Global var/consts
var ENTER_KEY_CODE = 13;

// Where user inputs message
var MessageComposer = function(opts) {
  if (typeof opts == "undefined") opts = {};
  // Validate opts
  if (!opts.messageList) {
    console.error("Missing message list");
    return;
  }
  if (!opts.person) {
    console.error("Missing chat person");
    return;
  }

  this.opts = opts;
  this.build();
};

///// Add prototype methods /////
(function(){
  this.build = function() {
    var _this = this;
    var $composer = $(MessageComposer.template);

    // Bind events
    $composer.on('keyup', function(e){
      if (e.which === ENTER_KEY_CODE) {
        e.preventDefault();
        var message = $(this).val().trim();
        // Create message
        if (message) {
          _this.sendMessage(message);
        }
        // Reset composer
        $(this).val('');
      }
    });

    this.$composer = $composer;
  };

  this.ui = function() {
    return this.$composer;
  };

  ////////////////////
  // SendMessage() should be the entry where messages submitted to server and
  // server updates both User and Guests (at least Guests) ui to reflect a piece of new message
  // Given the fact User is chatting with a BOT who does not need to see the ui
  // We simplified the work flow by intercepting the messages and 
  // respond with preset information directly if a match catched
  // We make it even simpler by doing it in front end for demo purpose
  // Otherwise a ajax request should be initialized and served to retrieve server side data
  this.sendMessage = function(text) {
    var messageList = this.opts.messageList;
    var person = this.opts.person;
    var message = new Message({
      person: person,
      text: text
    });
    messageList.addMessage(message);

    // Return if talking to a person
    if (!this.opts.bot) return;

    // Intercept messages if talking to a bot
    // Check predefined keywords match
    var bot = this.opts.bot;
    var responseText = MessageStore.respondTo(text);
    if (responseText) {
      message = new Message({
        person: bot,
        text: responseText
      });
      messageList.addMessage(message);
    }
  };
}).call(MessageComposer.prototype);

MessageComposer.template = '<textarea class="message-composer form-control" placeholder="Press Enter to send" rows=4/>';

