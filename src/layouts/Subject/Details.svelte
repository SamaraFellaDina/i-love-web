<script>
  import {Keywords, Github_Hyperlinks} from '../../index.js'
  export let data
  
  export let themeColor = ''

</script>

<ul>
  {#each data.Assets as {title, keywords, description, Github}}
  <li>
    <details open>
      <summary>
        {title}
      </summary>
      <div>
        <Keywords {keywords}/>
        <h2>About this project</h2>
        <p>{description}</p>

        <h3>Sources.</h3>
        <p> here you can find al the sources that are being used in this project</p>
        {#if Github}
        <Github_Hyperlinks {Github}/>
        {:else}
        <p>No sources available</p>
        {/if}
      </div>
    </details>
  </li>
  {/each}
</ul>

<style>

ul {
  color: var(--lightmode-color-dark);
  }

ul li details summary {
  --font-size:1.2em;
  font-size: var(--font-size);
  background-color: var(--lightmode-color-dark);
  color: var(--lightmode-color-projects);
  padding: var(--average-padding) 0.5em;
  transition: 500ms ease-in;
  font-weight: 300;
  letter-spacing: .1em;
}

ul li details summary:hover {
  font-size: calc(var(--font-size)/100*120);
  font-weight: 500;
  letter-spacing: .15em;
}

ul li details div {
  padding: var(--average-padding);
}

</style>