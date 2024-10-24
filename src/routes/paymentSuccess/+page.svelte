<script>
  import Metadata from '../../components/Metadata.svelte';
</script>

<svelte:head>
  <Metadata url="/paymentSuccess" />
</svelte:head>

<div class="flex flex-col space-y-10 items-center mx-5 md:mx-20">
  <h1 class="text-3xl md:text-5xl text-orange-300 text-center">Thank you for your order!</h1>
  <a class="text-2xl bg-blue-500 hover:bg-blue-600 duration-300 text-white font-bold py-2 px-4 rounded" href="/">
    Home Page
  </a>
</div>
