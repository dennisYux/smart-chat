////////// Chat Message Pad //////////
var MessagePad = function(opts) {
  // A chat MessagePad is composed of MessageList and MessageComposer
  // It serves two or more people known as Host and Guest(s)
  if (typeof opts == "undefined") opts = {};
  // Validate opts
  if (!opts.host) {
    console.error("Missing chat host");
    return;
  }
  if (!opts.guests || !opts.guests.length) {
    console.error("Missing chat guests");
    return;
  }

  this.opts = opts;
  this.build();
};

///// Add prototype methods /////
(function(){
  this.build = function(message, opts) {
    // Yield opts to sub-components while creation
    var $pad = $(MessagePad.template);
    var messageList = new MessageList({
      messages: []
    });
    var messageComposer = new MessageComposer({
      messageList: messageList,
      person: this.opts.host,
      bot: this.opts.chatWithBot ? this.opts.guests[0] : undefined
    });

    $pad.append(messageList.ui());
    $pad.append(messageComposer.ui());

    // Assign as members
    this.$pad = $pad;
    this.messageList = messageList;
    this.messageComposer = messageComposer;
  };

  this.ui = function() {
    return this.$pad;
  };
}).call(MessagePad.prototype);

MessagePad.template = '<div class="message-pad"></div>';
