<script>
  import { Archive, Icons } from '../index.js';
  const data = Archive.archive;

  const project = 0;
  const learningJournal = 1;
  const weLoveWeb = 2;
  const aboutMe = 3;

  const icons = [
    'book',
    'code',
    'cursor',
    'smile'
  ]
</script>

<ul>
  {#each data as {title, description, slug}, index}
    <li>
      <div>
        <Icons 
        Name ={icons[index]}
        Color = 'var(--lightmode-color-background)'
        Height = '70'
        Width = '70'
        />
      </div>

      <section>
        <h2>{title}.</h2>
        <p>{description}</p>
      </section>

      <a href="/subjects/{slug}">
        <Icons 
        Name  = 'arrow-right'
        Color = 'var(--lightmode-color-background)'
        Height = '50'
        Width = '50'
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
    --border-color: var(--lightmode-color-dark);
    --border-width: 2px;

    border-top-style: var(--border-style);
    border-color: var(--border-color);
    border-width: var(--border-width);
    display: flex;
    justify-content: space-between;
    min-height: 20em;

  }

  ul li:nth-child(1){
    background: var( --lightmode-color-projects);
  }

  ul li:nth-child(2){
    background: var( --lightmode-color-learning-journal);
  }

  ul li:nth-child(3){
    background: var( --lightmode-color-we-love-web);
  }

  ul li:nth-child(4){
    background: var( --lightmode-color-about-me);
  }
  ul li:last-child{
    border-bottom-style: var(--border-style);
    border-color: var(--border-color);
    border-width: var(--border-width);
  }

  ul li div {
    display: none;

    @media (min-width: 600px) {
      display: block;
      padding: var(--average-padding);
    }
  }

  ul li section {
    display: flex;
    flex-direction: column;
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
    --ratio: 3em;
    width: var(--ratio);
    height: var(--ratio);
    padding: .5em;

    display: flex;
    flex-direction: row;
    justify-content: center;

    background-color: var(--lightmode-color-dark);
  }

</style>