const http = require('http');
const express = require('express');
const socket_io = require('socket.io');
const path = require('path');
const app = express();

const server = http.createServer(app);
const io = socket_io(server);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname, "public")));

io.on("connection", function(socket){
    socket.on("send-location", (data)=>{
        io.emit("recieve-location", {id:socket.id, ...data});
    });

    socket.on("disconnect", ()=>{
        io.emit("user-disconnected", socket.id);
    });
    console.log("connected");
});

app.get("/", (req, res)=>{
    res.render("index");
});

server.listen(3000, ()=>{
    console.log("server started");
});