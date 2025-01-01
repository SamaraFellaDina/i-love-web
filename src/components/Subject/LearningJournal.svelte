<script>
  import {Archive, Intro } from '../../index.js';
  const data = Archive.archive[1]
  console.log(data)
  </script>

<section>
  <Intro {data} />
</section>


<style>
  section{
    background: var(--lightmode-color-learning-journal);
    width: 100vw;
    position: relative;
  }
</style>