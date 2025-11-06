const mediaContainer = document.getElementById("mediaContainer");
const mainMedia = document.getElementById("mainMedia");
const slideText = document.getElementById("slideText");

let currentSlide = 0;

const slides = [
  {
    type: "image",
    src: "assets/slide1.png",
    text: "Scannable QR Codes On Every Dose Cup — Verify doses and automate eMAR simply by scanning the QR code during drug administration."
  },
  {
    type: "image",
    src: "assets/slide2.png",
    text: "Choose from 26+ Customizable Configurations — Tailor-made compliance packs according to weekly, biweekly, or monthly dose cycles."
  },
  {
    type: "video",
    src: "assets/slide3.mp4",
    text: "Tearable Dose Cups For Convenience — Travel-friendly tearaway dose cups for medication intake at the prescribed time."
  }
];

function changeSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  const slide = slides[currentSlide];

  mainMedia.style.opacity = 0;

  setTimeout(() => {
    if (slide.type === "image") {
      const img = document.createElement("img");
      img.src = slide.src;
      img.alt = "Slide " + (currentSlide + 1);
      img.id = "mainMedia";
      img.className = "poster";
      img.style.opacity = 0;
      img.onclick = changeSlide;
      mediaContainer.innerHTML = "";
      mediaContainer.appendChild(img);

      setTimeout(() => {
        img.style.opacity = 1;
      }, 50);
    } else if (slide.type === "video") {
      const video = document.createElement("video");
      video.src = slide.src;
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.className = "poster";
      video.onclick = changeSlide;
      mediaContainer.innerHTML = "";
      mediaContainer.appendChild(video);

      setTimeout(() => {
        video.style.opacity = 1;
      }, 50);
    }

    slideText.textContent = slide.text;
  }, 500);
}

mainMedia.onclick = changeSlide;
