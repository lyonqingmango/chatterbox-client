// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  upload: function(data) {

    this._data = data;
  },

  selectedRoom: function(roomname) {
    var res = [];

    this._data.forEach((message)=>{
      if (message.roomname === roomname) {
        res.push(message);
      }
    });
    console.log(res + 'res');
    return res;


  }




















  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.






};

