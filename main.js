let currentIndex = 0;
let cycleflag = false;
let flagarray = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
];
let flagpaths = [
  "assets/images/lesbian-pride-flag.jpg",
  "assets/images/gay-pride-flag.jpg",
  "assets/images/bisexual-pride-flag.jpg",
  "assets/images/transgender-pride-flag.jpg",
  "assets/images/queer-pride-flag.jpg",
  "assets/images/intersex-pride-flag.jpg",
  "assets/images/asexual-pride-flag.jpg",
  "assets/images/aromantic-pride-flag.jpg",
  "assets/images/agender-pride-flag.jpg",
  "assets/images/pansexual-pride-flag.jpg",
  "assets/images/pangender-pride-flag.jpg",
  "assets/images/nonbinary-pride-flag.jpg",
  "assets/images/polysexual-pride-flag.jpg",
  "assets/images/genderfluid-pride-flag.jpg",
  "assets/images/genderqueer-pride-flag.jpg",
];
let pagepaths = [
  "./pages/lesbian.html",
  "./pages/wip.html",
  "./pages/wip.html",
  "./pages/wip.html",
  "./pages/wip.html",
  "./pages/wip.html",
  "./pages/wip.html",
  "./pages/wip.html",
  "./pages/wip.html",
  "./pages/wip.html",
  "./pages/wip.html",
  "./pages/wip.html",
  "./pages/wip.html",
  "./pages/wip.html",
  "./pages/wip.html",
]
function flagcycle() {
  cycleflag = true;
}

function checkflagtype() {
  if (typeof cycleflag === 'undefined' || typeof currentIndex === 'undefined' || 
      !Array.isArray(flagarray) || !Array.isArray(flagpaths) || !Array.isArray(pagepaths)) {
    console.error("Required variables are not defined or initialized properly.");
    return;
  }

  let current = document.querySelector(".flag");
  if (!current) {
    console.error("No element found with class .flag");
    return;
  }

  if (cycleflag) {
    if (currentIndex >= flagarray.length) {
      currentIndex = 0;
    }


    current.id = flagarray[currentIndex];
    let nextImage = flagpaths[currentIndex];
    let nextFlag = document.querySelector("#flag-img");
    
    if (nextFlag) {
      nextFlag.src = nextImage;
    } else {
      console.error("No element found with class #flag-img");
      return;
    }

    let flagPageLink = document.querySelector("#flagpg-link");
    if (flagPageLink) {
      flagPageLink.setAttribute("href", pagepaths[currentIndex]);
    } else {
      console.error("No element found with ID #flagpg-link");
      return;
    }

    let badflagdesign = document.querySelector("#bad-image");
    if (currentIndex === 5) {
      if (badflagdesign) {
        badflagdesign.innerHTML = "Sorry the flag looks strange. It compressed wrong. :(";
      }
    } else {
      if (badflagdesign) {
        badflagdesign.innerHTML = "";
      }
    }

    currentIndex++;
    cycleflag = false; 
  }
}


setInterval(checkflagtype, 1);
