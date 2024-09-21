let arrayNum = [0, 0, 0, 0];

function createNum(value) {
  let div = document.createElement("div");
  div.className = "array-item";
  div.textContent = value;
  return div;
}

function renderArray(array, container) {
  container.innerHTML = "";
  for (let item of array) {
    let numbers = createNum(item);
    container.append(numbers);
  }
}

let arr = document.querySelector("#original .array");
renderArray(arrayNum, arr);

document.addEventListener("click", function (event) {
  if (event.target.tagName !== "BUTTON") return;

  let action = event.target.textContent;
  if (action === "start") {
    let updatedArray = arrayNum.map((item, index) => {
      if (index < 4) {
        return Math.floor(Math.random() * 10);
      }
      return item;
    });
    renderArray(updatedArray, arr);
  }
});
