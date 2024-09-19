<script lang="ts">
  import Icon from '@iconify/svelte';
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

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

  let spotify = true;
  let load = false;

  onMount(() => {
    load = true;
  });
</script>

{#if load}
  <div>
    <h2 class="text-4xl md:text-5xl text-emerald-800 hover:text-cyan-200 hover:cursor-pointer duration-300">Music</h2>
    <div class="flex flex-row items-center justify-center space-x-5 my-3">
      <button on:click={() => (spotify = true)}>
        <Icon
          icon="simple-icons:spotify"
          color={spotify ? '#22c55e ' : '#fdeadc'}
          class={'text-4xl hover:bg-slate-300 rounded-full duration-300'}
        />
      </button>
      <button on:click={() => (spotify = false)}>
        <Icon
          icon="simple-icons:applemusic"
          color={!spotify ? '#ef4444' : '#fdeadc'}
          class="text-4xl hover:bg-slate-300 rounded-xl duration-300"
        />
      </button>
    </div>
    <div class="text-2xl md:text-3xl text-left list-inside px-5 flex flex-col space-y-5">
      {#each music as song}
        <a
          href={spotify ? `${song.spotify}` : `${song.appleMusic}`}
          target="_blank"
          rel="noreferrer noopener"
          class="hover:cursor-pointer hover:text-cyan-200 duration-300"
        >
          <div class="flex flex-row items-center space-x-1 hover:scale-[1.05]">
            <Icon
              icon="streamline:button-play-solid"
              class="w-max duration-300"
              color={spotify ? '22c55e' : 'ef4444'}
            />
            <p>{song.title}</p>
          </div>
        </a>
      {/each}
    </div>
  </div>
{/if}
