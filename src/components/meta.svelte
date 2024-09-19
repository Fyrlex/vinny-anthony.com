<script lang="ts">
  export let data: {
    title: string;
    url: string;
  };
</script>

<title>Vinny Anthony | {data.title}</title>
<meta charSet="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="description" content="Hi, I’m Vinny Anthony! I’m a self proclaimed local legend indie sleaze artist." />
<link rel="shortcut icon" href="/favicon.png" type="image/png" />
<meta property="og:title" content={data.title} />
<meta
  property="og:description"
  content="Hi, I’m Vinny Anthony! I’m a self proclaimed local legend indie sleaze artist."
/>
<meta property="og:type" content="website" />
<meta property="og:url" content="https://vinny-anthony.com/{data.url}" />
<meta property="og:image" content="/favicon.png" />
<meta content="#06B6D4" data-react-helmet="true" name="theme-color" />
