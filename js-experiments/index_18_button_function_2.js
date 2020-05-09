function replaseText() {
  let inputeFieldElement = document.getElementById("inputeField");
  console.log(inputeFieldElement.value)

  let outputFieldElement = document.getElementById("outputField");
  outputFieldElement.setAttribute("value", inputeFieldElement.value);
}