// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render _all_ the messages.
    this.$chats.html('');
    for (var i = Messages._data.length - 1; i >= 0; i--) {
      MessagesView.renderMessage(Messages._data[i]);
    }
    // Messages._data.forEach((message) => {
    //   MessagesView.renderMessage(message);
    // });


  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    this.$chats.prepend(MessageView.render(message));
    // this.$chats.append(MessageView.render(message));




  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};