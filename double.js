document.addEventListener("DOMContentLoaded", function() {
    const images = [
      "suite-double-1.jpg",
      "suite-double-2.jpg",
      "suite-double-3.jpg",
      "suite-double-4.jpg",
      "suite-double-5.jpg",
      "suite-double-6.jpg",
      "suite-double-7.jpg",
      "suite-double-8.jpg"
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
  