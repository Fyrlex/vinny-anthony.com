<script lang="ts">
  import Meta from '../components/Metadata.svelte';
  import VinnyScream from '$lib/assets/Vinny1.jpg';
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import Calendar from '../components/Calendar.svelte';
  import Music from '../components/Music.svelte';
  import Media from '../components/Media.svelte';
  import Socials from '../components/Socials.svelte';
  import Contact from '../components/Contact.svelte';

  import Vinny1 from '$lib/assets/Vinny1.jpg';
  import Vinny2 from '$lib/assets/Vinny2.jpg';
  import Vinny3 from '$lib/assets/Vinny3.jpg';
  import Vinny4 from '$lib/assets/Vinny4.jpg';
  import Vinny5 from '$lib/assets/Vinny5.jpg';
  import TheAnts from '../components/TheAnts.svelte';
  import Merch from '../components/Merch.svelte';

  const images = [Vinny1, Vinny2, Vinny3, Vinny4, Vinny5];

  const events: { title: string; date: Date; type: 'show' | 'music' | 'other' }[] = [
    { title: 'The Camel', date: new Date('03/16/2024'), type: 'show' },
    { title: 'IndieHeads UVA', date: new Date('09/13/2024'), type: 'show' },
    { title: "Party at Connor's", date: new Date('09/21/2024'), type: 'show' },
    { title: 'Jacob Park Show', date: new Date('09/26/2024'), type: 'show' },
    { title: "Vinny's Bassit's Birthday", date: new Date('10/05'), type: 'other' },
    { title: 'Ipanema Cafe', date: new Date('10/12/2024'), type: 'show' },
    { title: 'AEPalooza @ Virginia Tech', date: new Date('11/08/2024'), type: 'show' },
  ];

  let load = false;

  onMount(() => {
    load = true;
  });
</script>

<svelte:head>
  <Meta url="" />
</svelte:head>
{#if load}
  <div class="flex flex-col md:flex-row mx-5 md:mx-20 md:space-x-5 space-y-5 md:space-y-0">
    <div
      transition:fly={{ delay: 100, duration: 1000, y: 50 }}
      class="order-2 md:order-1 md:w-1/4 text-center bg-[#887160] rounded-md shadow-lg py-5 h-fit flex flex-col space-y-5"
    >
      <div in:fly={{ delay: 600, duration: 1000, y: 50 }}>
        <Music />
      </div>
      <div in:fly={{ delay: 800, duration: 1000, y: 50 }}>
        <Media />
      </div>
      <div in:fly={{ delay: 1000, duration: 1000, y: 50 }}>
        <Merch />
      </div>
    </div>
    <div
      class="order-1 md:order-2 md:w-1/2 mx-auto container text-center items-center justify-center flex flex-col pb-5 md:pb-0"
    >
      <h1
        transition:fly={{ delay: 300, duration: 1000, y: 50 }}
        class="text-3xl md:text-5xl text-orange-300 hover:cursor-pointer duration-300 hover:text-orange-400"
      >
        SELF PROCLAIMED LOCAL LEGEND INDIE SLEAZE ARTIST
      </h1>
      <p class="bio mt-5 text-slate-300 text-lg" in:fade={{ delay: 1000, duration: 1000 }}>
        Vinny Anthony is an independent musician known for weaving intricate soundscapes spanning indie rock,
        alternative, and pop genres. Hailing from the serene landscapes of DC, Vinny began his musical journey at a
        young age, initially finding solace and expression through the strings of an acoustic guitar. His sound,
        characterized by heartfelt lyrics, atmospheric arrangements, and an unmistakable vocal timbre, speaks to the
        wanderlust and introspection of a soul deeply connected to natural beauty and human emotion's complexities.
      </p>
      <Socials />
      <img
        in:fly={{ delay: 400, duration: 1000, y: 50 }}
        class="rounded-md shadow-md"
        src={VinnyScream}
        alt="Vinny Scream"
      />
    </div>
    <div
      in:fly={{ delay: 100, duration: 1000, y: 50 }}
      class="order-3 md:w-1/4 text-center bg-[#887160] rounded-md shadow-lg py-5 h-fit flex flex-col space-y-5 md:space-y-10"
    >
      <div in:fly={{ delay: 600, duration: 1000, y: 50 }}>
        <Calendar currentDate={new Date()} {events} />
      </div>
      <div in:fly={{ delay: 800, duration: 1000, y: 50 }}>
        <TheAnts />
      </div>
      <div in:fly={{ delay: 1000, duration: 1000, y: 50 }}>
        <Contact />
      </div>
    </div>
  </div>
{/if}
