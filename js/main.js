"use strict";

{
  const images = [
    "img/head01.jpg",
    "img/head02.jpg",
    "img/head03.jpg"
  ];

  let currentIndex = 0;

  let mainImage = document.getElementById("head_img");
  mainImage.src = images[currentIndex];
  
  const next = document.getElementById("next");
  next.addEventListener("click", () => {
    let target = currentIndex + 1;
    if (target === 3) {
      mainImage.src = images[0];
    } else {
      mainImage.src = images[target];
    }
  });
  
  const prev = document.getElementById("prev");
  prev.addEventListener("click", () => {
    let target = currentIndex - 1;
    if (target < 0) {
      mainImage.src = images[2];
    } else {
      mainImage.src = images[target];
    }

  });
}