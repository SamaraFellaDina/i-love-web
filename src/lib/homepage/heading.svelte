<script>

</script>

<article>
<section>
  <h1>Archive</h1>
  <div></div>
</section>
  <p>Welcome to my archive. Where you can find journals, notes, projects and even more! Take a look around :-)</p>
</article>

<style>

article {
  padding: var(--average-padding);
}
article section {
  display: flex;
  justify-content: space-between;
  gap: 1em;
}

article section h1 {
  --heading-margin:.2em;
  margin-block-start: var(--heading-margin);
  margin-block-end: var(--heading-margin);
}
article section div {
  background: var(--lightmode-color-footer);
  background: var(--lightmode-color-rainbow-gradient);
  width: 100%;
  animation: gradient 5s ease infinite alternate;
  background-size: 400% 400%;
}

@keyframes gradient {
  0% {
    background-position: 0;
  }

  100% {
    background-position: 100%;
  }
}

</style>