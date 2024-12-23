<script>
  import Icons from './libraries/Icons.svelte';
  import data from '../assets/data/Data.json';
  const archive = data.archive;

</script>
<ul>
  {#each archive as {title, description, slug}}
    <li>
      <section>
        <h2>{title}.</h2>
        <p>{description}</p>
      </section>
      <a href="/{slug}">
        <Icons 
        name = 'arrow-right'
        color = 'var(--lightmode-color-background)'
        />
      </a>
    </li>
  {/each}
</ul>

<style>
  ul {
    display: block;
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0;
    unicode-bidi: isolate;
  }

  ul li{
    --border-style: solid;
    --border-color: var(--lightmode-color-black);
    --border-width: 2px;

    border-top-style: var(--border-style);
    border-color: var(--border-color);
    border-width: var(--border-width);
    display: flex;
    justify-content: space-between;
  }

  ul li:nth-child(1){
    background-color: var( --lightmode-color-green);
  }

  ul li:nth-child(2){
    background-color: var( --lightmode-color-yellow);
  }

  ul li:nth-child(3){
    background-color: var( --lightmode-color-pink);
  }

  ul li:nth-child(4){
    background-color: var( --lightmode-color-purple);
  }
  ul li:last-child{
    border-bottom-style: var(--border-style);
    border-color: var(--border-color);
    border-width: var(--border-width);
  }

  ul li section {
    display: flex;
    flex-direction: column;
    min-height: 15em;
  }
  
  ul li section h2,
  ul li section p {
    margin: .5em 0;
  }

  ul li section h2{
    font-size: 4em;
    margin: -15px -5px;
  }

  ul li section p {
    padding: var(--average-padding);
  }

  ul li a {
    --ratio: 2em;
    width: var(--ratio);
    height: var(--ratio);
    padding: .5em;

    display: flex;
    flex-direction: row;
    justify-content: center;

    background-color: var(--lightmode-color-black);
  }
</style>