const mongoose = require('mongoose');

export class DatabaseConnection {
  static init() {
    mongoose.connect("mongodb://localhost/GreenLand", {});
  }
}

export const db = mongoose.connection;

db.on("error", function onDBErrorCallback(err: Error) {
  console.log("Database Error. " + err);
});

db.on("reconnect", function onDBReconnectCallback() {
  console.log("Reconnect to database");
});

db.once("open", function () {
  console.log('///////////////');
  console.log("_______________Database connected");
  console.log('///////////////');
});
