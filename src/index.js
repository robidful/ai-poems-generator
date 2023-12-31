function displayPoem(response) {
  let waitingElement = document.querySelector(".waiting-message");
  waitingElement.style.display = "none";

  new Typewriter("#actual-poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userInstructions = document.querySelector("#prompt");

  let apiKey = "47a73a37647027b080t9do6f11739604";
  let prompt = `User instructions: Generate a poem in English about ${userInstructions.value}`;
  let context =
    "You are a romantic yet ironic expert writer and you love generating poems.Your mission is to generate 6 lines poem, making sure to follow the user instructions. Make sure to display a new line of text whenever there is a new verse, like a proper poem would be written.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let waitingElement = document.querySelector(".waiting-message");
  waitingElement.innerHTML = `Generating a sublime poem about ${userInstructions.value}...`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
