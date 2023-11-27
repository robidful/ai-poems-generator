function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#actual-poem", {
    strings: "Hello, I am a poet",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
