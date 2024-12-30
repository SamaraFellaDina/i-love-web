<script>
  export let data
</script>

<h1>{data.title}.</h1>
<article>
  <a href="/">back</a>
  <p>{data.description}</p>
</article>

<style>
  h1 {
    margin-block: 0;
    margin: -30px -10px;
    width:100%
  }

  article {
    padding: var(--average-padding)
  }
</style>