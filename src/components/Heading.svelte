
<section>
  <h1>Archive.</h1>
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
  animation: gradient 8s ease infinite alternate;
  background-size: 400% 100%;

  position: relative;
  overflow: hidden;
  clip: auto;

}

section h1 {
  margin: 0;

  top: 160px;
  right: -170px;
  font-size: 8em;
  color: white;
  mix-blend-mode: difference;

  rotate: -90deg;
  position: fixed;
  pointer-events: none;

}

section p {
  position: absolute;
  font-size: 3em;
  top: 0;
  left: 20px;
  background: var(--lightmode-color-layout);
}

@keyframes gradient {
  0% {
    background-position: 0;
  }

  100% {
    background-position: 100%;
  }
}

@media (min-width: 600px){
  section h1 {
    font-size: 10em;
    top: 195px;
    right: -220px;
  }
}

</style>