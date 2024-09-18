<script lang="ts">
  import Icon from '@iconify/svelte';
  import { fade } from 'svelte/transition';

  export let appleMusic: string;
  export let spotify: string;

  let show = false;

  setTimeout(() => {
    show = true;
  }, 1000);
</script>

<div transition:fade class="bg-orange-300 rounded-lg w-28 h-fit flex flex-row justify-between p-1">
  <a href={spotify} target="_blank" rel="noreferrer noopener">
    <Icon
      icon="simple-icons:spotify"
      color="#fdeadc"
      class="text-5xl hover:bg-green-500 hover:ring-green-500 hover:ring-2 rounded-full duration-300"
    />
  </a>
  <a href={appleMusic} target="_blank" rel="noreferrer noopener">
    <Icon
      icon="simple-icons:applemusic"
      color="#fdeadc"
      class="text-5xl hover:bg-red-500 hover:ring-red-500 hover:ring-2 rounded-xl duration-300"
    />
  </a>
</div>
