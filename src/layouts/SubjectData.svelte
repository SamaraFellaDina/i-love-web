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
        <ul class="keywords">
          {#each keywords as keyword}
          <li>
            {keyword}.
          </li>
          {/each}
        </ul>

        <p>{description}</p>

        <h3>Sources.</h3>
        <p> here you can find al the sources that are being used in this project</p>
        {#if Github}
        <ul class="Github">
          {#if Github.live_link}
            <li>
              <a href={Github.live_link}>
                <Icons Name='link' Width=20 Height=20 Color='var(--lightmode-color-projects)'/> 
                Live Link
              </a>
            </li>
          {/if}

          {#if Github.link}
            <li>
              <a href={Github.link}>
              <Icons Name='Github' Width=20 Height=20 Color='var(--lightmode-color-projects)'/> 
              GitHub Link
            </a>
          </li>
          {/if}

          {#if Github.Project_board}
          <li>
            <a href={Github.Project_board}>
              <Icons Name='Github' Width=20 Height=20 Color='var(--lightmode-color-projects)'/> 
              Project Board
            </a>
          </li>
          {/if}

          {#if Github.issues}
          <li>
            <a href={Github.issues}>
              <Icons Name='Github' Width=20 Height=20 Color='var(--lightmode-color-projects)'/> 
              Issues
            </a>
          </li>
          {/if}

          {#if Github.readme}
          <li>
            <a href={Github.readme}>
              <Icons Name='Github' Width=20 Height=20 Color='var(--lightmode-color-projects)'/> 
              ReadMe
            </a>
          </li>
          {/if}

          {#if Github.code}
          <li>
            <a href={Github.code}>
              <Icons Name='Github' Width=20 Height=20 Color='var(--lightmode-color-projects)'/> 
              Code
            </a>
          </li>
          {/if}
        </ul>
      {:else}
        <p>No GitHub information available</p>
      {/if}

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
    color: var(--lightmode-color-black);
  }

  section ul li {
    padding: 1em;
    border: 5px solid var(--lightmode-color-black);
  }

  section ul li details summary {
    font-size: 1.5em;
    margin-block: .5em;
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
  color: var(--lightmode-color-black);
  border-radius: 1em;
}
.Github li{ 
  padding: .5em 0;
}
</style>