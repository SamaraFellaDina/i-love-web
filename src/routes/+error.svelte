<script>
  import {page} from '$app/stores'

  // console.log($page.status)
</script>

<main>
<h1>Oepsie de pagina die je zoekt is foetsie! :(</h1>
<p>{$page.status} - {$page.error.message}</p>
</main>

<style>
  main {
    height: 80vh;
    justify-content: center;
    background-color: var(--lightmode-color-footer);
  }

  main h1 {
    font-size: 50px;
  }

  main p {
    color: var(--lightmode-color-pink);
    font-size: 20px;

  }
</style>