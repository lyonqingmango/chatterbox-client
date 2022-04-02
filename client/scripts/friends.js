// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: new Set(),

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
  add: function(username) {
    this._data.add(username);

  },

  toggleStatus: function(username) {
    if (Friends._data.has(username)) {
      console.log(username);
      Friends._data.delete(username);
    } else {
      Friends.add(username);
    }
  },

};