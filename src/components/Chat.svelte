<script lang="ts">
  import Message from './Message.svelte';
  type PayloadType = {
    fromUser: boolean;
    from?: string;
    message: string;
  };
  export let payloads: PayloadType[] = [];
</script>

<div class="conversation">
  <div class="conversation-container">
    {#each payloads as payload}
      <Message {payload} />
    {/each}
  </div>
</div>

<style>
  .conversation {
    height: calc(100% - 12px);
    position: relative;
    background: #efe7dd
      url('https://cloud.githubusercontent.com/assets/398893/15136779/4e765036-1639-11e6-9201-67e728e86f39.jpg')
      repeat;
    z-index: 0;
    min-height: 50rem;
  }
  .conversation ::-webkit-scrollbar-track {
    background: transparent;
  }

  .conversation ::-webkit-scrollbar-thumb {
    background: #b3ada7;
  }

  .conversation .conversation-container {
    height: calc(100% - 68px);
    box-shadow: inset 0 10px 10px -10px #000000;
    overflow-x: hidden;
    padding: 0 16px;
    margin-bottom: 5px;
  }

  .conversation .conversation-container:after {
    content: '';
    display: table;
    clear: both;
  }
</style>
