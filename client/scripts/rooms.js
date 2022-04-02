// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],
  selected: 'lobby',
  isSelected: function(roomname) {
    Rooms.selected = roomname;
  },

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  add: function(roomname) {
    Rooms._data.push(roomname);
    Rooms.isSelected(roomname);
  },

  upload: function() {
    for (var i = 0; i < Messages._data.length; i++) {
      var name = Messages._data[i].roomname;
      if (!name || name.length === 0) {
        name = 'lobby';
      }

      if (!Rooms._data.includes(name)) {
        Rooms._data.push(name);
      }

    }
    console.log(Rooms._data);
  }


};