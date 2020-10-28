<script>
  import Tailwindcss from './Tailwindcss.svelte';

  if (DEV) {
    console.log('Running in dev mode');
  } else {
    console.log('Running in production');
  }
</script>

<style>
  main {
    @apply max-w-sm;
  }

  @media (min-width: 640px) {
    main {
      @apply max-w-none;
    }
  }

  a:hover {
    @apply underline;
  }
</style>

<!-- Import tailwind into the app  -->
<Tailwindcss />

<main class="max-w-xs p-12 mx-auto my-2 text-center">
  <h1 class="mb-6 text-6xl font-hairline text-red-500 uppercase">
    Hello World!
  </h1>
  <p class="text-gray-800">
    Visit the
    <a class="text-blue-700" href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</main>
