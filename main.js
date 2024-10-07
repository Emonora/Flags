let currentIndex = 0;
let cycleflag = false;

let flagdata = [
  {
    index: 0,
    path: "assets/images/lesbian-pride-flag.jpg",
    page: "./pages/lesbian.html",
  },
  {
    index: 1,
    path: "assets/images/gay-pride-flag.jpg",
    page: "./pages/wip.html",
  },
  {
    index: 2,
    path: "assets/images/bisexual-pride-flag.jpg",
    page: "./pages/wip.html",
  },
  {
    index: 3,
    path: "assets/images/transgender-pride-flag.jpg",
    page: "./pages/wip.html",
  },
  {
    index: 4, 
    path: "assets/images/queer-pride-flag.jpg",
    page: "./pages/wip.html",
  }, 
  {
    index: 5, 
    path: "assets/images/intersex-pride-flag.jpg",
    page: "./pages/wip.html",
  },
  {
    index: 6,
    path: "assets/images/asexual-pride-flag.jpg",
    page: "./pages/wip.html",
  },
  {
    index: 7, 
    path: "assets/images/aromantic-pride-flag.jpg",
    page: "./pages/wip.html",
  },
  {
    index: 8,
    path: "assets/images/agender-pride-flag.jpg",
    page: "./pages/wip.html",
  },
  {
    index: 9,
    path: "assets/images/pansexual-pride-flag.jpg",
    page: "./pages/wip.html",
  },
  {
    index: 10,
    path: "assets/images/pangender-pride-flag.jpg",
    page: "./pages/wip.html",
  },
  {
    index: 11,
    path: "assets/images/nonbinary-pride-flag.jpg",
    page: "./pages/wip.html",
  },
  {
    index: 12,
    path: "assets/images/polysexual-pride-flag.jpg",
    page: "./pages/wip.html",
  },
  {
    index: 13,
    path: "assets/images/genderfluid-pride-flag.jpg",
    page: "./pages/wip.html",
  },
  {
    index: 14,
    path: "assets/images/genderqueer-pride-flag.jpg",
    page: "./pages/wip.html",
  },
  {
    index: 15,
    path: "assets/images/bigender-pride-flag.jpg",
    page: "./pages/wip.html",
  },
];

function flagcycle() {
  cycleflag = true;
}

function checkflagtype() {
  if (cycleflag) {

    if (currentIndex >= flagdata.length) {
      currentIndex = 0;
    } 

    let current = document.querySelector(".flag");
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

    current.id = flagdata[currentIndex].index;
    let nextImage = flagdata[currentIndex].path;
    let nextFlag = document.querySelector("#flag-img");
    
    nextFlag.setAttribute("src", nextImage);

    let flagPageLink = document.querySelector("#flagpg-link");
    flagPageLink.setAttribute("href", flagdata[currentIndex].page);

    currentIndex++;
    cycleflag = false; 
  }
}

setInterval(checkflagtype, 1);
