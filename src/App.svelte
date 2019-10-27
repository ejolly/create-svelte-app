<script>
  // This is the root component of the app which hands over rendering to svelte-router-spa. All routes get rendered within the <Router/> component automatically.
  import Nav from './components/Nav.svelte';
  import { Router } from 'svelte-router-spa';
  import { routes } from './routes';

</script>

<Nav />
<section class="section has-navbar-fixed-top">
  <Router {routes} />
</section>

<style>
  .section {
    margin-top: 2%;
  }
</style>