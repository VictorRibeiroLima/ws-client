<script lang="ts">
  import Router from 'svelte-spa-router';
  import ChatRoom from './routes/ChatRoom.svelte';
  import Home from './routes/Home.svelte';
  import NotFound from './routes/NotFound.svelte';

  const routes = {
    '/': Home,
    '/room/:id': ChatRoom,
    '/*': NotFound,
  };
</script>

<main>
  <Router {routes} />
</main>
