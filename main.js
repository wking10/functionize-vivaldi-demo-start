// Functionize Vivaldi Demo- Student copy

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
    setSeason("spring",'#0E94D1');
  } else if (season === "summer") {
     setSeason("summer",'#1BA848');
  } else if (season === "autumn") {
     setSeason("autumn",'#FE6732');
  } else if (season === "winter") { 
     setSeason("winter",'#1C64B9');
  }

}

function setSeason(seasonName, seasonColor){
  seasonH2.innerHTML = seasonName;
  seasonH2.style.color = seasonColor;
  seasonImg.src = `img/${seasonName}.jpg`;
  seasonAudio.src = `songs/vivaldi-${seasonName}.mp3`;
  document.body.style.backgroundColor = seasonColor;
}


