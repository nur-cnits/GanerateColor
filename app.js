let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let h3 = document.querySelector("h3"); //get element
  let randomcolor = getRandomColor();

  h3.innerText = `Color Code: ${randomcolor}`; //set attribute
  let div = document.querySelector("div");
  div.style.backgroundColor = randomcolor;
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red} , ${green} , ${blue})`;
  return color;
}
