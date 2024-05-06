document.addEventListener("DOMContentLoaded", function() {
    const images = [
      "suite-deluxe-1.jpg",
      "suite-deluxe-2.jpg",
      "suite-deluxe-3.jpg",
      "suite-deluxe-4.jpg",
      "suite-deluxe-5.jpg",
      "suite-deluxe-6.jpg",
      "suite-deluxe-7.jpg"
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
  