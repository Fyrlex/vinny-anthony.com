<script lang="ts">
  import Meta from '../components/meta.svelte';
  import VinnyScream from '$lib/assets/VINNY_SCREAM.jpg';
  import Icon from '@iconify/svelte';
  // import SpotfyAppleMusic from '../components/SpotfyAppleMusic.svelte';
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  const music: { title: string; appleMusic: string; spotify: string }[] = [
    {
      title: 'STAY AND HOLD ME',
      appleMusic: 'https://music.apple.com/us/album/stay-and-hold-me/1710058591?i=1710058593',
      spotify: 'https://open.spotify.com/track/4BBU6YajIIfxk13wo0zL8I?si=753f2708bd9b47c8',
    },
    {
      title: 'GENTLY',
      appleMusic: 'https://music.apple.com/us/album/gently/1617037640?i=1617037641',
      spotify: 'https://open.spotify.com/track/4aq4KfNljtZOHPsYljQVcC?si=742e813091154e41',
    },
    {
      title: 'JET',
      appleMusic: 'https://music.apple.com/us/album/jet/1726834623?i=1726834624',
      spotify: 'https://open.spotify.com/track/2nyGkzuFoWQ5aMRiSmAelk?si=88b77560636c48e9',
    },
    {
      title: 'BETTER THINGS',
      appleMusic: 'https://music.apple.com/us/album/better-things/1726834333?i=1726834334',
      spotify: 'https://open.spotify.com/track/3tFCDt1molYpGxlZCsrFyw?si=478e9baede0d45aa',
    },
    {
      title: 'MY SIDE',
      appleMusic: 'https://music.apple.com/us/album/my-side/1655581593?i=1655581594',
      spotify: 'https://open.spotify.com/track/2mOMILCvfjTMEHNo79OPVT?si=359b118f0e954ee9',
    },
  ];
  const shows: { title: string; date: string }[] = [
    { title: 'The Camel', date: '3/16/2024' },
    { title: 'IndieHeads UVA', date: '9/13/2024' },
  ];

  let load = false;

  onMount(() => {
    load = true;
  });
</script>

<!-- on:mouseenter={() => (hoveringSong = song.title)}
     on:mouseleave={() => (hoveringSong = null)} -->
<!-- {#if hoveringSong === song.title}
<SpotfyAppleMusic appleMusic={song.appleMusic} spotify={song.spotify} />
{/if} -->
<svelte:head>
  <Meta data={{ title: 'Self proclaimed local legend indie sleaze artist', url: '' }} />
</svelte:head>
{#if load}
  <div class="flex flex-col md:flex-row mx-10 md:space-x-5 space-y-5 md:space-y-0">
    <div
      transition:fly={{ delay: 600, duration: 1000, y: 50 }}
      class="order-2 md:order-1 md:w-1/4 text-center bg-[#887160] rounded-md shadow-lg py-5"
    >
      <h2 class="text-5xl mb-5 text-emerald-700">Music</h2>
      <ul class="text-2xl md:text-3xl text-left list-inside px-5">
        {#each music as song}
          <div class="flex flex-row items-center space-x-3 my-5">
            <Icon icon="streamline:button-play-solid" class="w-max" color="fdeadc" />
            <li class="hover:cursor-pointer hover:text-cyan-200 duration-300 w-[50vw] md:w-[20vw]">
              {song.title}
            </li>
          </div>
        {/each}
      </ul>
    </div>
    <div
      class="order-1 md:order-2 md:w-1/2 mx-auto container text-center items-center justify-center flex flex-col pb-5 md:pb-0"
    >
      <h1 transition:fly={{ delay: 300, duration: 1000, y: 50 }} class="text-xl md:text-5xl text-orange-300">
        SELF PROCLAIMED LOCAL LEGEND INDIE SLEAZE ARTIST
      </h1>
      <div
        transition:fade={{ delay: 600, duration: 1000 }}
        class="mx-auto items-center justify-center flex flex-row space-x-10 my-5"
      >
        <a href="https://open.spotify.com/artist/17cubPb5WpkdYtXNPj9BgN" target="_blank" rel="noreferrer noopener">
          <Icon
            icon="simple-icons:spotify"
            color="#fdeadc"
            class="text-5xl hover:bg-green-500 hover:ring-green-500 hover:ring-2 rounded-full duration-300"
          />
        </a>
        <a href="https://music.apple.com/us/artist/vinny-anthony/1587279266" target="_blank" rel="noreferrer noopener">
          <Icon
            icon="simple-icons:applemusic"
            color="#fdeadc"
            class="text-5xl hover:bg-red-500 hover:ring-red-500 hover:ring-2 rounded-xl duration-300"
          />
        </a>
      </div>
      <img
        transition:fly={{ delay: 400, duration: 1000, y: 50 }}
        class="rounded-md shadow-md"
        src={VinnyScream}
        alt="Vinny Scream"
      />
    </div>
    <div
      transition:fly={{ delay: 900, duration: 1000, y: 50 }}
      class="order-3 md:w-1/4 text-center bg-[#887160] rounded-md shadow-lg py-5"
    >
      <h2 class="text-5xl mb-5 text-emerald-700">Shows</h2>
      <ul class="text-2xl md:text-3xl text-left list-inside px-5">
        {#each shows as show}
          <div class="flex flex-row items-center space-x-3 my-5">
            <Icon icon="gravity-ui:star-fill" class="w-max" color="fdeadc" />
            <li class="hover:cursor-pointer hover:text-cyan-200 duration-300 w-[50vw] md:w-[20vw]">
              {show.title} - {show.date}
            </li>
          </div>
        {/each}
      </ul>
    </div>
  </div>
{/if}

<footer class="text-center text-gray-800 py-10 text-lg">
  <p>© 2024 Vinny Anthony</p>
  <p>Made by Jaren G.</p>
</footer>
