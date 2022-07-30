<script lang="ts">
  export let func: (msg: string) => void;
  let msg = '';
  const action = () => {
    if (msg) {
      func(msg);
      msg = '';
    }
  };
  const onKeyPressed = (e) => {
    if (e.charCode === 13) action();
  };
</script>

<div>
  <input type="text" bind:value={msg} on:keypress={onKeyPressed} />
</div>
