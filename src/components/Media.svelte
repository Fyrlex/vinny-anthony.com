<script>
  import SectionHeader from './SectionHeader.svelte';
</script>

<div class="m-5">
  <SectionHeader title="Media" />
  <div class="flex flex-col items-center">
    <iframe
      class="rounded-md shadow-md ring-2 ring-orange-300 w-[80vw] md:w-[20vw] h-[200px] md:h-[305px]"
      src="https://www.youtube.com/embed/Zox0pTjJeow"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</div>
