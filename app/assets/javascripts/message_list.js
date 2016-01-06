////////// Message List //////////
var MessageList = function(opts) {
  if (typeof opts == "undefined") opts = {};
  // Validate opts ...
  if (typeof opts.messages == "undefined") {
    console.warn("Not setting messages");
    opts.messages = [];
  }

  this.opts = opts;
  this.build();
};

///// Add prototype methods /////
(function(){
  this.addMessage = function(message) {
    var item = new MessageListItem(message);
    this.$list.append(item.$item);

    // Scroll to bottom
    this.$list.scrollTop(this.$list[0].scrollHeight);
  };

  this.build = function() {
    var _this = this;
    var $list = $(MessageList.template);

    $.each(this.opts.messages, function(i, message){
      _this.addMessage(message);
    });

    this.$list = $list;
  };

  this.ui = function() {
    return this.$list;
  };
}).call(MessageList.prototype);

MessageList.template = '<ul class="message-list list-group"></ul>';

////////// Message List Item //////////
var MessageListItem = function(message, opts) {
  if (typeof opts == "undefined") opts = {};
  // Validate opts or set through
  // MessageListItem.constants = {...}
  this.message = message; 
  this.opts = opts;
  this.build();
};

///// Add prototype methods /////
(function(){
  this.build = function() {
    var $item = $(MessageListItem.template);
    // Message style could be customized with person data here ...
    // e.g. User message bubbles align right and Guests bubbles align left
    $item.find('.message-author-name').text(this.message.person.name);
    $item.find('.message-text').html(this.message.text);

    this.$item = $item;
  };
}).call(MessageListItem.prototype);

MessageListItem.template = '\
  <li class="message-list-item list-group-item">\
    <h5 class="message-author-name"></h5>\
    <div class="message-text"></div>\
  </li>\
';



