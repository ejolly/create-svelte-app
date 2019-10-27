<script>
  // Simple component to wrap Routes in animations because it's not possible to apply this directly to the <Route> component from svelte-router-spa
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  // let show = false;

  // onMount(() => {
  //   show = true;
  // });

</script>

<style>
  div {
    position: relative;
  }
</style>


<div in:fly="{{x: -300, duration: 600}}">
  <slot></slot>
</div>