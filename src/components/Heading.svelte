
<section>
  <h1>Archive</h1>
  <p>Welcome to my archive. Where you can find journals, notes, projects and even more! <span class="cursive">Take a look around :-)</span></p>
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

  position: relative;
}

section h1 {
  bottom: 175px;
  right: -220px;
  margin: 6px;
  color: white;
  mix-blend-mode: difference;
  font-size: 10em;
  rotate: -90deg;
  position: absolute;
}

section p {
  position: absolute;
  font-size: 30px;
  top: 0;
  left: 20px;
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