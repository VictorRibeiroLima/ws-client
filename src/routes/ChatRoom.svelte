<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { connect, messageStore, sendMessage, close } from '../api/web-socket';
  import Chat from '../components/Chat.svelte';
  import TextInput from '../components/TextInput.svelte';

  export let params;

  onMount(() => connect(params.id));

  let payloads = [];
  const unsubscriber = messageStore.subscribe((value: any) => {
    if (value) {
      const payload = {
        fromUser: false,
        from: value.nick,
        message: value.body,
        color: 'green',
      };
      payloads = [...payloads, payload];
    }
  });

  const send = (msg: string) => {
    const payload = {
      fromUser: true,
      message: msg,
    };
    payloads = [...payloads, payload];
    sendMessage(msg);
  };

  onDestroy(() => {
    unsubscriber();
    close();
  });
</script>

<main>
  <Chat {payloads} />
  <TextInput func={send} />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
