document.addEventListener("DOMContentLoaded", function() {
    const images = [
      "suite-junior-1.jpg",
      "suite-junior-2.jpg",
      "suite-junior-3.jpg",
      "suite-junior-4.jpg",
      "suite-junior-5.jpg",
      "suite-junior-6.jpg",
      "suite-junior-7.jpg"
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
  