<script>
  export let keywords
</script>

<ul>
  {#each keywords as keyword}
  <li>
    {keyword}.
  </li>
  {/each}
</ul>

<style>
  ul {
    display: flex;
  align-items: center;
  gap: .5em;
  flex-wrap: wrap;
  }

  ul li {
    display: flex;
  align-items: center;
  gap: .5em;
  flex-wrap: wrap;
  
  padding: .5em;
  background-color: var(--lightmode-color-projects);
  color: var(--lightmode-color-dark);
  border-radius: 1em;

  border: 2px solid var(--lightmode-color-dark);
  box-shadow: var(--lightmode-color-dark) 2px 2px;
  }
</style>