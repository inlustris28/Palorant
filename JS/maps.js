document.addEventListener("DOMContentLoaded", function () {
    const mainImage = document.getElementById("maps-main-image");
    const thumbnails = document.querySelectorAll(".thumb");
  
    thumbnails.forEach(thumb => {
      thumb.addEventListener("click", function () {
        mainImage.src = this.src;
      });
    });
  });
  