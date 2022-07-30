<script lang="ts">
  const roomsFecth = (async () => {
    const request = await fetch('http://localhost:3000/');
    return request.json();
  })();
</script>

<div>
  {#await roomsFecth}
    <p>waiting for the promise to resolve...</p>
  {:then value}
    {#each value as room}
      <div>
        <a href={`#/room/${room.id}`}>Go to room {room.id}</a>
      </div>
    {/each}
  {:catch error}
    <p>Something went wrong: {error.message}</p>
  {/await}
</div>
