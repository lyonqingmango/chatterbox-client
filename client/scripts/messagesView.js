// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),
  $username: $('.username'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
  },

  render: function() {
    // TODO: Render _all_ the messages.
    this.$chats.html('');
    var roomname = Rooms.selected;

    console.log(roomname + 'roomname');
    var RoomMessages = Messages.selectedRoom(roomname);

    for (var i = RoomMessages.length - 1; i >= 0; i--) {
      MessagesView.renderMessage(RoomMessages[i]);
    }



  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    this.$chats.prepend(MessageView.render(message));
    // this.$chats.append(MessageView.render(message));




  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    var username = $(this).text();
    console.log($(this));
    Friends.toggleStatus(username);
    console.log(Friends._data);
    // $(this).toggleClass('friend');

    //loop every chat  each div chat.username=== username;
    var chatsArray = $('#chats').children('div .chat').children('div .username');
    for (var i = 0; i < chatsArray.length; i++) {
      if ($(chatsArray[i]).text() === username) {

        $(chatsArray[i]).toggleClass('friend');

      }

    }




  }

};