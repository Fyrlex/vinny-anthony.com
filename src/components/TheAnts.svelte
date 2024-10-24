<script lang="ts">
  import Vinny from '$lib/assets/VinnyHead.jpg';
  import Ant1 from '$lib/assets/Ant1.jpg';
  import Ant2 from '$lib/assets/Ant2.jpg';
  import Ant3 from '$lib/assets/Ant3.jpg';
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import SectionHeader from './SectionHeader.svelte';

  const ants = [
    {
      name: 'Vinny',
      role: 'Vocals, Guitar',
      img: Vinny,
    },
    {
      name: 'Ant 1',
      role: 'Guitar',
      img: Ant1,
    },
    {
      name: 'Ant 2',
      role: 'Bass',
      img: Ant2,
    },
    {
      name: 'Ant 3',
      role: 'Drums',
      img: Ant3,
    },
  ];

  let load = false;

  onMount(() => {
    load = true;
  });
</script>

{#if load}
  <div class="px-10">
    <SectionHeader title="The Ants" />
    <div class="flex flex-col text-left">
      {#each ants as ant}
        <div class="flex flex-col md:flex-row md:space-x-5 items-center justify-start mb-5">
          <img class="rounded-full object-cover w-20 h-20 ring-2 ring-emerald-900" src={ant.img} alt={ant.name} />
          <div class="flex flex-col items-center md:items-start">
            <h3 class="text-2xl md:text-3xl text-slate-900 hover:text-cyan-200 hover:cursor-pointer duration-300">
              {ant.name}
            </h3>
            <p class="text-lg md:text-xl text-gray-600">{ant.role}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
{/if}
