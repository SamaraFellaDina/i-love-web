
<section>
  <h1>Archive</h1>
  <p>Welcome to my archive. Where you can find journals, notes, projects and even more! Take a look around :-)</p>
</section>

<style>

section {
  padding: var(--average-padding) 0;
  position: relative;
  width: 100vw;
  height: 90vh;

  background: var(--lightmode-color-footer);
  background: var(--lightmode-color-rainbow-gradient);
  animation: gradient 5s ease infinite alternate;
  background-size: 400% 400%;
}

section h1 {
  --heading-margin:.2em;
  margin-block-start: var(--heading-margin);
  margin-block-end: var(--heading-margin);
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