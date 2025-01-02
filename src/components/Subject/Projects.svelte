<script>
import {Archive, Github_Hyperlinks, Keywords, Intro } from '../../index.js';
const data = Archive.archive[0]
</script>

<section>
  <Intro {data} />
  <ul>
    {#each data.Assets as {title, description, keywords, Github}}
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
</section>

<style>
  
  section{
    background: var(--lightmode-color-projects);
    width: 100vw;
    position: relative;
  }

  section ul {
    background: var(--lightmode-color-projects);
    color: var(--lightmode-color-dark);
  }
  section ul li details summary {
    --font-size:1.2em;
    font-size: var(--font-size);
    background-color: var(--lightmode-color-dark);
    color: var(--lightmode-color-projects);
    padding: var(--average-padding) 0.5em;
    transition: 500ms ease-in;
    font-weight: 300;
    letter-spacing: .1em;
}

section ul li details summary:hover {
  font-size: calc(var(--font-size)/100*120);
  font-weight: 500;
  letter-spacing: .15em;

}

section ul li details div {
  padding: var(--average-padding);
}


</style>