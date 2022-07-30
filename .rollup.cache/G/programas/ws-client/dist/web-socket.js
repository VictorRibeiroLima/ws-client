"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
const socket = new WebSocket('ws://localhost:3000');
socket.onopen = () => {
    console.log('ws connected');
};
socket.onerror = (event) => {
    console.log(event);
};
socket.onmessage = (event) => {
    console.log(event.data);
};
async function sendMessage(msg) {
    const command = {
        command: 'SEND_MESSAGE',
        data: {
            message: msg,
        },
    };
    const req = JSON.stringify(command);
    socket.send(req);
}
exports.sendMessage = sendMessage;
//# sourceMappingURL=web-socket.js.map