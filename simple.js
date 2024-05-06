document.addEventListener("DOMContentLoaded", function() {
  const images = [
    "suite-simple-1.jpg",
    "suite-simple-2.jpg",
    "suite-simple-3.jpg",
    "suite-simple-4.jpg",
    "suite-simple-5.jpg"
  ];
  let currentImageIndex = 0;
  const currentImage = document.getElementById("current-image");

  function showImage(index) {
    currentImage.src = images[index];
  }

  document.getElementById("prev-image").addEventListener("click", function() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
  });

  document.getElementById("next-image").addEventListener("click", function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  });
});
