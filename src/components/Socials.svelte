<script>
  import Icon from '@iconify/svelte';
  import { fade, fly } from 'svelte/transition';
</script>

<div
  transition:fade={{ delay: 600, duration: 1000 }}
  class="mx-auto items-center justify-center flex flex-row space-x-5 md:space-x-10 my-5"
>
  <a
    in:fly={{ delay: 800, duration: 1000, x: -50 }}
    href="https://www.instagram.com/vincent.nurmi"
    target="_blank"
    rel="noreferrer noopener"
  >
    <Icon
      icon="simple-icons:instagram"
      color="#fdeadc"
      class="text-5xl hover:bg-fuchsia-500 hover:ring-fuchsia-500 hover:ring-2 rounded-xl duration-300"
    />
  </a>
  <a
    in:fly={{ delay: 600, duration: 1000, x: -50 }}
    href="https://www.facebook.com/profile.php?id=100010349163196"
    target="_blank"
    rel="noreferrer noopener"
  >
    <Icon
      icon="simple-icons:facebook"
      color="#fdeadc"
      class="text-5xl hover:bg-blue-500 hover:ring-blue-500 hover:ring-2 rounded-full duration-300"
    />
  </a>
  <a href="https://www.linkedin.com/in/vincent-nurmi-335114296" target="_blank" rel="noreferrer noopener">
    <Icon
      icon="simple-icons:linkedin"
      color="#fdeadc"
      class="text-5xl hover:bg-blue-500 hover:ring-blue-500 hover:ring-2 rounded-xl duration-300"
    />
  </a>
  <a
    in:fly={{ delay: 600, duration: 1000, x: 50 }}
    href="https://open.spotify.com/artist/17cubPb5WpkdYtXNPj9BgN"
    target="_blank"
    rel="noreferrer noopener"
  >
    <Icon
      icon="simple-icons:spotify"
      color="#fdeadc"
      class="text-5xl hover:bg-green-500 hover:ring-green-500 hover:ring-2 rounded-full duration-300"
    />
  </a>
  <a
    in:fly={{ delay: 800, duration: 1000, x: 50 }}
    href="https://music.apple.com/us/artist/vinny-anthony/1587279266"
    target="_blank"
    rel="noreferrer noopener"
  >
    <Icon
      icon="simple-icons:applemusic"
      color="#fdeadc"
      class="text-5xl hover:bg-red-500 hover:ring-red-500 hover:ring-2 rounded-xl duration-300"
    />
  </a>
</div>
