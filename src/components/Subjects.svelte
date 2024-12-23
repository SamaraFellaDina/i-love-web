<script>
  import Icons from './libraries/Icons.svelte';
  import data from '../assets/data/Data.json';
  const archive = data.archive;

</script>
<ul>
  {#each archive as {title, description, slug}}
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
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
    --min-height: 5em;

    border-top-style: var(--border-style);
    border-color: var(--border-color);
    border-width: var(--border-width);
    padding: var(--average-padding);
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

  ul li a {
    --ratio: 2em;
    padding: .5em;
    display: flex;
    width: var(--ratio);
    height: var(--ratio);
    flex-direction: row;
    justify-content: flex-end;
    background-color: var(--lightmode-color-black);
  }
  ul li h2,
  ul li p {
    margin: 1em 0;
  }
</style>