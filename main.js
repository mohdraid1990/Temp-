"use strict";
 // update price//
const oldPriceElement = document.getElementById("oldPrice");
const newPriceElement = document.getElementById("newPrice");

const oldPrice = parseFloat(oldPriceElement.innerText);
const action = 64;

const newPrice = (oldPrice * action) / 100;
newPriceElement.innerHTML = newPrice.toFixed(2);
//-*****************************-//



//Stars //
let events = {
  mouse: {
    over: "click",
  },
  touch: {
    over: "touchstart",
  },
};

let deviceType = "";
//Detect touch device
const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

isTouchDevice();

const stars = document.querySelectorAll(".star");
const ratingValue = document.getElementById("rating-value");
  const starContainer = document.querySelectorAll(".fa-regular");

  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      const currentRating = parseInt(ratingValue.textContent.slice(1, -1));
      const newRating = (index + 1) * 2;
      ratingValue.textContent = `(${newRating})`;

      starContainer.forEach((element, i) => {
        if (i <= index) {
          element.classList.remove("fa-regular");
          element.classList.add("fa-solid");
        } else {
          element.classList.remove("fa-solid");
          element.classList.add("fa-regular");
        }
      });
    });
  });









// select box //
const selected1 = document.querySelector(
  ".select-box:nth-of-type(1) .selected"
);
const optionsContainer1 = document.querySelector(
  ".select-box:nth-of-type(1) .options-container"
);
const optionsList1 = document.querySelectorAll(
  ".select-box:nth-of-type(1) .option"
);
selected1.innerHTML = optionsList1[0].querySelector("label").innerHTML;
selected1.addEventListener("click", () => {
  optionsContainer1.classList.toggle("active");
});
optionsList1.forEach((o) => {
  o.addEventListener("click", () => {
    selected1.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer1.classList.remove("active");
  });
});

const selected2 = document.querySelector(
  ".select-box:nth-of-type(2) .selected"
);
const optionsContainer2 = document.querySelector(
  ".select-box:nth-of-type(2) .options-container"
);
const optionsList2 = document.querySelectorAll(
  ".select-box:nth-of-type(2) .option"
);
selected2.innerHTML = optionsList2[0].querySelector("label").innerHTML;
selected2.addEventListener("click", () => {
  optionsContainer2.classList.toggle("active");
});
optionsList2.forEach((o) => {
  o.addEventListener("click", () => {
    selected2.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer2.classList.remove("active");
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.getElementById("time");
  updateTime();
// Time
  function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const timeString = hours + ":" + minutes + ":" + seconds;
    timeElement.textContent = timeString;

    setTimeout(updateTime, 1000); // Update time every second
  }
});


// Slider
function currentSlide(index) {
  const itemImages = document.querySelectorAll(".item-image img");
  const slides = document.querySelectorAll(".slide img");
  itemImages.forEach((image, i) => {
    if (i === index - 1) {
      image.style.display = "flex";
    } else {
      image.style.display = "none";
    }
  });
  slides.forEach((slide, i) => {
    if (i === index - 1) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

currentSlide(1);
