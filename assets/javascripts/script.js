const imgs = document.querySelectorAll(".header-image");
const prevBtn = document.querySelector(".control-prev");
const nextBtn = document.querySelector(".control-next");

let i = 0;

function changeSlide() {
  for (let j = 0; j < imgs.length; j++) {
    imgs[j].style.display = "none";
  }
  imgs[i].style.display = "block";
}

changeSlide();

prevBtn.addEventListener("click", (e) => {
  if (i > 0) {
    i--;
  } else {
    i = imgs.length - 1;
  }
  changeSlide();
});

nextBtn.addEventListener("click", (e) => {
  if (i < imgs.length - 1) {
    i++;
  } else {
    i = 0;
  }
  changeSlide();
});
