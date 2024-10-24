<script>
  import { goto } from '$app/navigation';

  const handleClick = () => {
    goto('/merch');
  };
</script>

<div>
  <div class="flex flex-col space-y-5 items-center hover:cursor-pointer my-3">
    <button class="text-4xl md:text-5xl mb-5 rainbow_text_animated" on:click={handleClick}>Get Merch</button>
  </div>
</div>

<style>
  .rainbow_text_animated {
    background: linear-gradient(to right, #6666ff, #0099ff, #00ff00, #ff3399, #6666ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: rainbow_animation 1s ease-in-out infinite;
    background-size: 400% 100%;
  }

  @keyframes rainbow_animation {
    0%,
    100% {
      background-position: 0 0;
    }

    50% {
      background-position: 100% 0;
    }
  }
</style>
