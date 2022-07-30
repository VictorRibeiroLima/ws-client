<script lang="ts">
  import { push } from 'svelte-spa-router';
  import Card from '../components/Card.svelte';

  const roomsFecth = (async () => {
    const request = await fetch('http://localhost:3000/');
    return request.json();
  })();
  const goToRoom = (id: string) => {
    push('#/room/' + id);
  };
</script>

<div>
  {#await roomsFecth}
    <p>waiting for the promise to resolve...</p>
  {:then value}
    {#each value as room}
      <Card
        mainText={`Room number ${room.id}`}
        subText={`Number of users ${room.lenght}`}
        actionLabel="Enter"
        action={() => goToRoom(room.id)}
      />
    {/each}
  {:catch error}
    <p>Something went wrong: {error.message}</p>
  {/await}
</div>
