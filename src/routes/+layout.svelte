<script lang="ts">
  import '../app.css';
  import Transition from '../components/transition.svelte';
  import VinnyAnthonyLogo from '$lib/assets/vinnylogowide.png';

  export let data;
</script>

<nav>
  <img
    class="mx-auto select-none hover:cursor-pointer w-3/4 md:w-fit"
    src={VinnyAnthonyLogo}
    alt="Vinny Anthony Logo"
  />
</nav>

<Transition {data}>
  <main>
    <slot />
  </main>
</Transition>

<footer class="text-center text-sm md:text-lg text-gray-800 py-10">
  <p>© 2024 Vinny Anthony</p>
  <p>Made by Jaren G.</p>
</footer>
