<script lang="ts">
  import '../app.css';
  import Transition from '../components/transition.svelte';
  import VinnyAnthonyLogo from '$lib/assets/VinnyAnthonyLogoWide.png';
  import { goto } from '$app/navigation';

  import Icon from '@iconify/svelte';

  export let data;
</script>

<nav>
  <div class="mx-auto flex justify-center select-none hover:cursor-pointer">
    <button on:click={() => goto('/')}>
      <img src={VinnyAnthonyLogo} alt="Vinny Anthony Logo" />
    </button>
  </div>
</nav>

<Transition {data}>
  <main>
    <slot />
  </main>
</Transition>

<footer class="text-center text-sm md:text-lg text-gray-800 py-10">
  <div class="flex flex-row space-x-2 items-center justify-center">
    <Icon icon="fa-regular:copyright" />
    <p>2024 Vinny Anthony</p>
  </div>
  <p class="text-sm my-1">
    Artwork by <span class="hover:cursor-pointer hover:text-cyan-200 duration-300">Jay Z.</span>
  </p>
  <p class="text-xs">
    Web design by <a
      class="hover:text-cyan-200 duration-300"
      href="https://jaren.me"
      target="_blank"
      rel="noreferrer noopener">Jaren G.</a
    >
  </p>
</footer>
