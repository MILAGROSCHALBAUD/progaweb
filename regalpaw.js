document.addEventListener("DOMContentLoaded", function() {
    const images = [
      "suite-paw-1.jpg",
      "suite-paw-2.jpg",
      "suite-paw-3.jpg",
      "suite-paw-4.jpg",
      "suite-paw-5.jpg",
      "suite-paw-6.jpg",
      "suite-paw-7.jpg",
      "suite-paw-8.jpg"
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
  