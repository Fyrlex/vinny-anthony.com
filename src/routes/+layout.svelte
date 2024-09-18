<script lang="ts">
  import '../app.css';
  import Transition from '../components/transition.svelte';
  import VinnyAnthonyLogo from '$lib/assets/vinnylogowide.png';

  export let data;
</script>

<nav>
  <img class="mx-auto select-none hover:cursor-pointer" src={VinnyAnthonyLogo} alt="Vinny Anthony Logo" />
</nav>

<Transition {data}>
  <main>
    <slot />
  </main>
</Transition>
