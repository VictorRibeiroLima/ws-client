import { writable } from 'svelte/store';

type Comand = {
  command: 'SEND_MESSAGE' | 'SET_NICK';
  data: {
    [key: string]: string;
  };
};

let socket: WebSocket;

const messageStore = writable();

function connect(id: string, nick = 'Victor') {
  console.log('connect was called');
  socket = new WebSocket(`ws://localhost:3000/ws/${id}?nick=${nick}`);
  socket.onopen = () => {
    console.log('ws connected');
  };

  socket.onerror = (event: Event) => {
    console.log(event);
  };

  socket.onmessage = (event: MessageEvent<any>) => {
    const data = JSON.parse(event.data);
    messageStore.set(data);
  };
}

async function sendMessage(msg: string) {
  console.log(msg);
  const command: Comand = {
    command: 'SEND_MESSAGE',
    data: {
      message: msg,
    },
  };
  const req = JSON.stringify(command);
  console.log(socket);
  socket.send(req);
}

function close() {
  console.log('close was called');
  socket.close();
}

export { messageStore, sendMessage, connect, close };
