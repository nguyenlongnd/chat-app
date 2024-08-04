const express = require("express");
const app = express();
const server = require("http").createServer(app);
const socketIo = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:5173/",
  },
});
let users = [];
socketIo.on("connection", (socket) => {
  console.log(`${socket.id} user just connected!`);

  // received and response message
  socket.on("message", (data) => {
    socketIo.emit("responseMessage", data);
  });

  // received and response typing
  socket.on("typing", (data) => {
    socketIo.broadcast.emit("responseTyping", data);
  });

  // received and response new user
  socket.on("newUser", (data) => {
    users = users.push(data);
    socketIo.emit("responseNewUser", users);
  });

  socket.on("disconnected", () => {
    users = users.filter((user) => user.socketID !== socket.id);
    socketIo.emit("responseNewUser", users);
    console.log("A user disconnected");
  });
});

app.get("/api", (req, res) => {
  res.json({ message: "hello" });
});
const PORT = 3000;
server.listen(PORT, () => console.log("running app at port 3000"));
