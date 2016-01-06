# Smart Chat

This (not so) smart chat app serves for code sample purpose.

A quick glance at the site http://smchat.herokuapp.com/

### Partial Directory Layout

    app/
      assets/
        images/                      
        stylesheets/
          message.css.scss     --> chat message pad styles
        javascripts/
          message.js           --> chat message
          message_composer.js  --> chat message composer
          message_list.js      --> chat message list
          message_pad.js       --> chat message pad (composed of message list and message composer)
          message_store.js     --> robot response store
          person.js            --> chat person
          ...
      controllers/                      
        default_controller.rb  --> home
      views/                      
        default/
          home.html.erb        --> main app entry
  
