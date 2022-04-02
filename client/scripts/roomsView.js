// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    RoomsView.$select.html('');

    for (var i = Rooms._data.length - 1; i >= 0; i--) {
      RoomsView.renderRoom(Rooms._data[i]);
      if (Rooms._data[i] === 'lobby') {
        $('option[value="lobby"]').attr('selected', 'selected');
      }
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    this.$select.prepend(`<option value="${roomname}">${roomname}</option>`);


  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    var roomname = $('select').children('option:selected').val();
    console.log('handleChange' + roomname);
    Rooms.isSelected(roomname);
    MessagesView.render();
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    var roomname = prompt('Enter room name');
    if (roomname) {
      Rooms.add(roomname);
      RoomsView.render();
      MessagesView.render();
    }

  }

};
