// Functionize Vivaldi Demo

// spring-color: #0E94D1
// summer-color: #1BA848
// autumn-color: #FE6732
// winter-color: #1C64B9

// Variables for HTML Elements
let seasonSelect = document.getElementById("season-select");
let seasonH2 = document.getElementById("season-heading");
let seasonImg = document.getElementById("season-img");
let seasonAudio = document.getElementById("season-audio");

// Event Listener
seasonSelect.addEventListener("input", seasonSelectChanged);

// Event handler for season select
function seasonSelectChanged() {
  // Get selected season
  let season = seasonSelect.value;

  // Update page to match selected season
  if (season === "spring") {
    seasonH2.innerHTML = "spring";
    seasonH2.style.color = "#0E94D1";
    seasonImg.src = "img/spring.jpg";
    seasonAudio.src = "songs/vivaldi-spring.mp3";
    document.body.style.backgroundColor = "#0E94D1";
  } else if (season === "summer") {
    seasonH2.innerHTML = "summer";
    seasonH2.style.color = "#1BA848";
    seasonImg.src = "img/summer.jpg";
    seasonAudio.src = "songs/vivaldi-summer.mp3";
    document.body.style.backgroundColor = "#1BA848";
  } else if (season === "autumn") {
    seasonH2.innerHTML = "autumn";
    seasonH2.style.color = "#FE6732";
    seasonImg.src = "img/autumn.jpg";
    seasonAudio.src = "songs/vivaldi-autumn.mp3";
    document.body.style.backgroundColor = "#FE6732";
  } else if (season === "winter") {
    seasonH2.innerHTML = "winter";
    seasonH2.style.color = "#1C64B9";
    seasonImg.src = "img/winter.jpg";
    seasonAudio.src = "songs/vivaldi-winter.mp3";
    document.body.style.backgroundColor = "#1C64B9";
  }
}
