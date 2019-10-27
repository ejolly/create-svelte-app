<script>
  // Demo navbar component. This component is actually imported into the root App.svelte component rather than any specific page. It's also possible to use svelte-router-spa to create layouts for pages, but this setup is a bit simpler to get started with.

  // This component reactively sets the is-active bulma class on navbar items when they're clicked on by changing the value of the locally scoped currentRoute variable, and adding an on:click event listener to nav items. This just demonstrates how to highlight the current active route because svelte-router-spa only reactively updates its currentRoute variable or routeIsActive function, for *nested* components using nested *layouts* with the Route component. This gets around that.

  let route_names = ['/', 'about'];
  // Initialize the current route at the current URL to handle if a route URL is typed in directly rather than navigated to
  let currentRoute = window.location.href.split('/').slice(-1)[0];
</script>

<nav class="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://github.com/ejolly/pymer4">
      <img alt='' src="https://bulma.io/images/bulma-logo-white.png" width="112" height="28">
    </a>
    {#each route_names as route}
      <a href="{route}" class="{route === currentRoute ? 'navbar-item is-active' : 'navbar-item'}" on:click={() => currentRoute=route}>{route === '/' ? 'home' : route}</a>
    {/each}
  </div>
</nav>

<style>
</style>