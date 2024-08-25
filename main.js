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
function flagcycle() {
  cycleflag = true;
}

function checkflagtype() {
  let current = document.querySelector(".flag");
  console.log(cycleflag);
  if (cycleflag) {
    if (currentIndex == 14) {
      currentIndex = 0;
      console.log(currentIndex);
      let nextIndex = currentIndex;
      console.log(nextIndex);
      current.id = flagarray[nextIndex];
      let nextImage = flagpaths[nextIndex];
      let nextFlag = document.querySelector(".flag-img");
      nextFlag.src = nextImage;
      cycleflag = false;
      console.log(current.id);
      console.log(current.src);
    } else {
      console.log(current.id);
      currentIndex = current.id;
      let tempnext;
      tempnext = currentIndex++;
      console.log(currentIndex);
      let nextIndex = currentIndex;
      console.log(nextIndex);
      current.id = flagarray[nextIndex];
      let nextImage = flagpaths[nextIndex];
      let nextFlag = document.querySelector(".flag-img");
      nextFlag.src = nextImage;
      cycleflag = false;
      console.log(current.id);
      console.log(current.src);
    }
  }
}

setInterval(checkflagtype, 1);
