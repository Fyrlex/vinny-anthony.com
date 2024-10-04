<script lang="ts">
  export let item: {
    name: string;
    description: string;
    price: number;
    image: string;
  };

  export let size: string;

  function setSize(s: string) {
    size = s;
  }
</script>

<div class="ring-2 ring-orange-300 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
  <img src={item.image} alt={item.name} class="w-full h-48 object-cover rounded-t-lg" />
  <div class="mt-2">
    <h2 class="text-xl font-semibold">{item.name}</h2>
    <div class="my-2">
      {#each ['s', 'm', 'l', 'xl'] as s}
        <button
          class="rounded-md px-2 py-2 mr-2 duration-300 hover:bg-orange-200 {size === s
            ? 'bg-orange-300 text-white'
            : 'bg-white text-gray-700'}"
          on:click={() => setSize(s)}
        >
          {s.toUpperCase()}
        </button>
      {/each}
    </div>
    <p class="text-gray-400">{item.description}</p>
    <div class="flex flex-row justify-between my-2">
      <p class="text-lg font-bold mt-2">${item.price}</p>
      <button class="bg-orange-300 hover:text-cyan-300 duration-300 rounded-md p-1">Buy Now</button>
    </div>
  </div>
</div>
