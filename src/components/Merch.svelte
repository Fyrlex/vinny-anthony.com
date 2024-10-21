<script>
  import { goto } from '$app/navigation';
  import VinnyLogo from '$lib/assets/VinnyAnthonyLogo.png';

  const handleClick = () => {
    goto('/merch');
  };
</script>

<div>
  <h2 class="text-4xl md:text-5xl mb-5 text-emerald-800 hover:text-cyan-200 hover:cursor-pointer duration-300">
    Merch
  </h2>
  <div class="flex flex-col items-center hover:cursor-pointer my-5">
    <img
      class="rounded-md shadow-md ring-2 ring-orange-300 w-[80vw] md:w-[22vw] h-[200px] md:h-[305px]"
      width="430"
      height="305"
      alt="Vinny Anthony Logo"
      src={VinnyLogo}
    />
  </div>
  <button class="text-3xl text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-md duration-300" on:click={handleClick}
    >Get Merch</button
  >
</div>
