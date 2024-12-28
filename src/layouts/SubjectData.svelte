<script>
import {Archive, Icons } from '../index.js';
const data = Archive.archive[0]
console.log(data.Assets[0].Github)
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

      <details open>
        <summary>
          {title}
        </summary>
        <div>
          <ul class="keywords">
            {#each keywords as keyword}
            <li>
              {keyword}.
            </li>
            {/each}
          </ul>
          <h2>About this project</h2>
          <p>{description}</p>
  
          <h3>Sources.</h3>
          <p> here you can find al the sources that are being used in this project</p>
          {#if Github}
          <ul class="Github">
            {#if Github.live_link}
              <li>
                <a href={Github.live_link}>
                  <Icons Name='link' Width=20 Height=20 Color='var(--lightmode-color-dark)'/> 
                  Live Link
                </a>
              </li>
            {/if}
  
            {#if Github.link}
              <li>
                <a href={Github.link}>
                <Icons Name='Github' Width=20 Height=20 Color='var(--lightmode-color-dark)'/> 
                GitHub Link
              </a>
            </li>
            {/if}
  
            {#if Github.Project_board}
            <li>
              <a href={Github.Project_board}>
                <Icons Name='Github' Width=20 Height=20 Color='var(--lightmode-color-dark)'/> 
                Project Board
              </a>
            </li>
            {/if}
  
            {#if Github.issues}
            <li>
              <a href={Github.issues}>
                <Icons Name='Github' Width=20 Height=20 Color='var(--lightmode-color-dark)'/> 
                Issues
              </a>
            </li>
            {/if}
  
            {#if Github.readme}
            <li>
              <a href={Github.readme}>
                <Icons Name='Github' Width=20 Height=20 Color='var(--lightmode-color-dark)'/> 
                ReadMe
              </a>
            </li>
            {/if}
  
            {#if Github.code}
            <li>
              <a href={Github.code}>
                <Icons Name='Github' Width=20 Height=20 Color='var(--lightmode-color-dark)'/> 
                Code
              </a>
            </li>
            {/if}
          </ul>
        {:else}
          <p>No GitHub information available</p>
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

  ul {
    display: block;
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
    unicode-bidi: isolate;
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
    border: .5em solid var(--lightmode-color-projects)
}

section ul li details summary:hover {
  font-size: calc(var(--font-size)/100*120);
}

section ul li details div {
  padding: 0 var(--average-padding);
}
.keywords,
.Github {
  display: flex;
  align-items: center;
  gap: .5em;
  flex-wrap: wrap;
}

.keywords li {
  padding: .5em;
  background-color: var(--lightmode-color-projects);
  color: var(--lightmode-color-dark);
  border-radius: 1em;

  border: 2px solid var(--lightmode-color-dark);
  box-shadow: var(--lightmode-color-dark) 2px 2px;
}
.Github li{ 
  padding: .5em 0;
}
</style>