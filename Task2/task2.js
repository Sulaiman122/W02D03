const headings = document.querySelectorAll("h1");
const paragraphs = document.querySelectorAll("p");
const firstImage = document.getElementById("firstImg");
const midImage = document.getElementById("midImg");
const lastImage = document.getElementById("lastImg");
const textInput = document.getElementById("textInput");
const submitBtn = document.getElementById("submit");

const btn1 = document.getElementById("input_button1");
btn1.addEventListener("click", () => {
  headings.forEach((item) => {
    item.style.fontSize = "36pt";
  });
});

const btn2 = document.getElementById("input_button2");
btn2.addEventListener("click", () => {
  paragraphs.forEach((item) => {
    item.style.color = "green";
  });
});

const btn3 = document.getElementById("input_button3");
btn3.addEventListener("click", () => {
  paragraphs.forEach((item) => {
    item.style.backgroundColor = "yellow";
  });
});

const btn4 = document.getElementById("input_button4");
btn4.addEventListener("click", () => {
  firstImg.style.visibility = "hidden";
});

const btn5 = document.getElementById("input_button5");
btn5.addEventListener("click", () => {
  if (
    firstImage.src !=
    "https://www.wpbeginner.com/wp-content/uploads/2020/03/ultimate-small-business-resource-180x180.png"
  ) {
    firstImage.src =
      "https://www.wpbeginner.com/wp-content/uploads/2020/03/ultimate-small-business-resource-180x180.png";
    midImage.src =
      "https://icon-library.com/images/small-icon-images/small-icon-images-4.jpg";
  } else {
    firstImage.src =
      "https://icon-library.com/images/small-icon-images/small-icon-images-4.jpg";
    midImage.src =
      "https://www.wpbeginner.com/wp-content/uploads/2020/03/ultimate-small-business-resource-180x180.png";
  }
});

midImage.addEventListener("mouseenter", () => {
  midImage.src = "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg";
  midImage.style.height = "200px";
});
midImage.addEventListener("mouseleave", () => {
  midImage.src =
    "https://www.wpbeginner.com/wp-content/uploads/2020/03/ultimate-small-business-resource-180x180.png";
});

firstImage.addEventListener("contextmenu", () => {
  alert("why you click me");
});

submitBtn.addEventListener("click", () => {
  if (textInput.value.length) {
    alert("Data saved.");
  } else {
    alert("It is Empty");
  }
});

window.onload = ()=>{
    alert("page loaded")
}

const ppp = document.querySelectorAll("p");
ppp.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.backgroundColor = "yellow";
  });
  item.addEventListener("mouseleave", () => {
    item.style.backgroundColor = "white";
  });
});
