<script>
  import Icons from '$lib/icons.svelte';
</script>

<ul>
  <li>
      <h2>Projects</h2>
      <p>all my Github projects can be found here with some more information about the project, code and things like issues</p>
      <a href="/">
        <Icons name = 'arrow-right'/>
      </a>
  </li>

  <li>
      <h2>Learning journal</h2>
      <p>a daily to weekly journal about my progress inside the projects.</p>
      <a href="/">
        <svg>
        <Icons name = 'arrow-right'/>
        </svg>
      </a>
  </li>

  <li>
      <h2>We love web</h2>
      <p>The place to find about presentations and the learning envenvironment  outside of the material that has been given by school</p>
      <a href="/">
        <Icons name = 'arrow-right'/>
      </a>
  </li>

  <li>
      <h2>About me</h2>
      <p>Who is the person behind all of this? Find more here!</p>
      <a href="/">
        <Icons name = 'arrow-right'/>
      </a>
  </li>

</ul>

<style>
  ul{
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
    --ratio:2em;
    width: var(--ratio);
    height: var(--ratio);
  }
  ul li h2,
  ul li p {
    margin: 1em 0;
  }
</style>