// Display the value in the range input
const value = document.querySelector("#length-value");
const input = document.querySelector("#customRange3");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});

// Function to generate HTML password set to append to DOM
const generatedPasswordAsHtml = (parameter) => {
  // Password set
  const generatedPasswordDiv = document.createElement("div");
  generatedPasswordDiv.setAttribute("id", "title-bar");
  generatedPasswordDiv.setAttribute(
    "class",
    "container-md mb-5 border-bottom border-start border-end border-3 border-dark rounded"
  );

  const generatedPasswordTitle = document.createElement("h6");
  generatedPasswordTitle.innerHTML = "GET";
  generatedPasswordTitle.setAttribute(
    "class",
    "monda row justify-content-center pt-1 pb-1"
  );

  const generatedPasswordValue = document.createElement("p");
  generatedPasswordValue.innerHTML = parameter;
  generatedPasswordValue.setAttribute("id", "gen-p");
  generatedPasswordValue.setAttribute("class", "row justify-content-center");

  // Copy-icon set
  const generatedClipboardDiv = document.createElement("div");
  generatedClipboardDiv.setAttribute("class", "container-md text-center mb-3");

  const generatedClipboard = document.createElement("i");
  generatedClipboard.innerHTML = " Copy";
  generatedClipboard.setAttribute("id", "copy-clipboard");
  generatedClipboard.setAttribute("class", "bi bi-clipboard");

  // Append password and copy-icon sets
  generatedClipboardDiv.append(generatedClipboard);

  generatedPasswordDiv.append(
    generatedPasswordTitle,
    generatedPasswordValue,
    generatedClipboardDiv
  );

  // Append the function result to the resultDisplay element
  const resultDisplay = document.getElementById("resultDisplay");
  resultDisplay.appendChild(generatedPasswordDiv);
};

// Trigger the function
// Select the button element
const submitButton = document.getElementById("submitButton");

// Add a click event listener to the button
submitButton.addEventListener("click", () => {
  // Retrieve data from the input fields
  const getLength = document.getElementById("customRange3").value;
  const length = Number(getLength);
  const getNumbers = document.getElementById("numbers-switch");
  const numbers = getNumbers.checked;
  const getSymbols = document.getElementById("symbols-switch");
  const symbols = getSymbols.checked;

  // Call the function to generate the password and display to the DOM
  generatedPasswordAsHtml(passwordGenerator(length, numbers, symbols));
});

// Function to reload the page to append to DOM
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", () => {
  location.reload();
});
