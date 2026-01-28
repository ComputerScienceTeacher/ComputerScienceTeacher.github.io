const images = [
  "images/1000007230.jpg",
  "images/1000008595.png",
  "images/20160716_181414.jpg",
  "images/fe86ebb5-e89d-40b9-a7bf-813fc973fed9-1_all_5017.jpg",
  "images/fe86ebb5-e89d-40b9-a7bf-813fc973fed9-1_all_5018.jpg",
  "images/IMG_20200809_152026.jpg",
  "images/IMG_20200809_152547.jpg",
  "images/IMG_20200912_114034.jpg",
  "images/IMG_20210509_213008.jpg",
  "images/IMG_32600320354473.jpeg",
  "images/IMG_973862165570.jpeg",
  "images/PXL_20210530_202753818.MP.jpg",
  "images/PXL_20230519_190753741.jpg",
  "images/PXL_20230519_191621249.MP.jpg",
  "images/PXL_20240901_224500435.PORTRAIT.jpg",
  "images/PXL_20240901_224541807.PORTRAIT.jpg",
  "images/PXL_20240902_014006783.PORTRAIT.jpg",
  "images/PXL_20241129_222206215.jpg",
  "images/PXL_20241129_222306517.jpg",
  "images/PXL_20250117_002616340.jpg",
  "images/PXL_20250511_174922052.PORTRAIT.jpg"
];

let currentIndex = 0;
const slide = document.getElementById("slide");
const downloadLink = document.getElementById("downloadLink");

function showImage(index) {
  slide.src = images[index];
  downloadLink.href = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") nextImage();
  if (e.key === "ArrowLeft") prevImage();
});

showImage(currentIndex);


let currentIndex = 0;
const slide = document.getElementById("slide");
const downloadLink = document.getElementById("downloadLink");

function showImage(index) {
  slide.src = images[index];
  downloadLink.href = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") nextImage();
  if (e.key === "ArrowLeft") prevImage();
});

showImage(currentIndex);
