<script>
  import { Github_Hyperlinks, Keywords, MarkdownDisplay } from '../../index.js'
  export let data
  let title = data.title

</script>

{#if title === 'Projects'}
  <ul>
    {#each data.Assets as { title, description, keywords, Github }}
      <li>
        <details open>
          <summary>
            {title}
          </summary>
          <div>
            <Keywords {keywords} />
            <h2>About this project</h2>
            <p>{description}</p>

            <h3>Sources</h3>
            <p>Here you can find all the sources that are being used in this project:</p>
            {#if Github}
              <Github_Hyperlinks {Github} />
            {:else}
              <p>No sources available</p>
            {/if}
          </div>
        </details>
      </li>
    {/each}
  </ul>
{/if}

{#if title === 'Learning Journal'}
  <ul>
    {#each data.Assets as { title, date_created, original_link }}
      <li>
        <details open>
          <summary>
            {title}
          </summary>
          <div>
            <h2> created on <date>{date_created}</date></h2>
            <section>
              <MarkdownDisplay />
            </section>
            <h3>Scources</h3>
            <p>Here you can find all the sources that are being used in this subject:</p>
            {#if original_link}
              <Github_Hyperlinks {original_link} />
            {:else}
              <p>No sources available</p>
            {/if}
          </div>
        </details>
      </li>
    {/each}
  </ul>
{/if}

{#if title === 'We Love Web'}
  <ul>
    {#each data.Assets as { title, description, keywords, Github }}
      <li>
        <details open>
          <summary>
            {title}
          </summary>
          <div>
            <Keywords {keywords} />
            <h2>About this project</h2>
            <p>{description}</p>

            <h3>Sources</h3>
            <p>Here you can find all the sources that are being used in this project:</p>
            {#if Github}
              <Github_Hyperlinks {Github} />
            {:else}
              <p>No sources available</p>
            {/if}
          </div>
        </details>
      </li>
    {/each}
  </ul>
{/if}

{#if title === 'About me'}
  <ul>
    {#each data.Assets as { title, description, keywords, Github }}
      <li>
        <details open>
          <summary>
            {title}
          </summary>
          <div>
            <Keywords {keywords} />
            <h2>About this project</h2>
            <p>{description}</p>

            <h3>Sources</h3>
            <p>Here you can find all the sources that are being used in this project:</p>
            {#if Github}
              <Github_Hyperlinks {Github} />
            {:else}
              <p>No sources available</p>
            {/if}
          </div>
        </details>
      </li>
    {/each}
  </ul>
{/if}

<style>

 ul {
    background: var(--lightmode-color-projects);
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