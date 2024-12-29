<script>
import {Archive, Github_Hyperlinks, Keywords } from '../../index.js';
const data = Archive.archive[0]
console.log(data.Assets)
</script>

<section>
  <h1>{data.title}.</h1>
  <article>
    <a href="/">back</a>
    <p>{data.description}</p>
  </article>

  <ul>
    {#each data.Assets as {title, description, keywords, Github}}
    <li>

      <details>
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

  section h1 {
    margin-block: 0;
    margin: -30px -10px;
    width:100%
  }

  section article {
    padding: var(--average-padding)
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
    border: .5em solid var(--lightmode-color-projects);
    font-weight: 300;
    letter-spacing: .1em;
}

section ul li details summary:hover {
  font-size: calc(var(--font-size)/100*120);
  font-weight: 500;
  letter-spacing: .15em;

}

section ul li details div {
  padding: 0 var(--average-padding);
}


</style>