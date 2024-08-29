import { blink, turnOff, turnOn } from "../handlers/commands.handler.js";

const sockets = (socket) => {

    // Her lytter vi på en besked fra klienten
    socket.on('blink', (data) => {
        blink(data.delay);
    });

    socket.on('turnOff', (data) => {
        turnOff()
    });
  
    socket.on('turnOn', (data) => {
        turnOn()
    });
}

export default sockets;