<script lang="ts">
  import Meta from '../components/meta.svelte';
  import VinnyScream from '$lib/assets/Vinny1.jpg';
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import Calendar from '../components/Calendar.svelte';
  import Music from '../components/Music.svelte';
  import Media from '../components/Media.svelte';
  import Socials from '../components/Socials.svelte';
  import Contact from '../components/Contact.svelte';

  const music: { title: string; appleMusic: string; spotify: string }[] = [
    {
      title: '"STAY AND HOLD ME"',
      appleMusic: 'https://music.apple.com/us/album/stay-and-hold-me/1710058591?i=1710058593',
      spotify: 'https://open.spotify.com/track/4BBU6YajIIfxk13wo0zL8I?si=753f2708bd9b47c8',
    },
    {
      title: '"GENTLY"',
      appleMusic: 'https://music.apple.com/us/album/gently/1617037640?i=1617037641',
      spotify: 'https://open.spotify.com/track/4aq4KfNljtZOHPsYljQVcC?si=742e813091154e41',
    },
    {
      title: '"JET"',
      appleMusic: 'https://music.apple.com/us/album/jet/1726834623?i=1726834624',
      spotify: 'https://open.spotify.com/track/2nyGkzuFoWQ5aMRiSmAelk?si=88b77560636c48e9',
    },
    {
      title: '"BETTER THINGS"',
      appleMusic: 'https://music.apple.com/us/album/better-things/1726834333?i=1726834334',
      spotify: 'https://open.spotify.com/track/3tFCDt1molYpGxlZCsrFyw?si=478e9baede0d45aa',
    },
    {
      title: '"MY SIDE"',
      appleMusic: 'https://music.apple.com/us/album/my-side/1655581593?i=1655581594',
      spotify: 'https://open.spotify.com/track/2mOMILCvfjTMEHNo79OPVT?si=359b118f0e954ee9',
    },
  ];

  const shows: { title: string; date: Date }[] = [
    { title: 'The Camel', date: new Date('03/16/2024') },
    { title: 'IndieHeads UVA', date: new Date('09/13/2024') },
  ];

  let load = false;

  onMount(() => {
    load = true;
  });
</script>

<svelte:head>
  <Meta data={{ title: 'Self proclaimed local legend indie sleaze artist', url: '' }} />
</svelte:head>
{#if load}
  <div class="flex flex-col md:flex-row mx-5 md:mx-10 md:space-x-5 space-y-5 md:space-y-0">
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
        alternative, and pop genres. Hailing from the serene landscapes of DC, Vinny began their musical journey at a
        young age, initially finding solace and expression through the strings of an acoustic guitar. Their sound,
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
      class="order-3 md:w-1/4 text-center bg-[#887160] rounded-md shadow-lg py-5 h-fit flex flex-col space-y-5"
    >
      <div in:fly={{ delay: 600, duration: 1000, y: 50 }}>
        <Contact />
      </div>
      <div in:fly={{ delay: 800, duration: 1000, y: 50 }}>
        <Calendar currentDate={new Date()} {shows} />
      </div>
    </div>
  </div>
{/if}
