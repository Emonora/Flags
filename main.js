let cycleflag = false;
function flagcycle() {
  cycleflag = true;
}

function checkflagtype() {
  let current = document.querySelector(".flag");
  if (cycleflag) {
    if (current.id === "lesbian") {
      current.id = "gay";
      let flagtochange = document.querySelector(".flag-img");
      flagtochange.src = "assets/images/gay-pride-flag.jpg";
      cycleflag = false;
    } else if (current.id === "gay") {
      current.id = "bisexual";
      let flagtochange = document.querySelector(".flag-img");
      flagtochange.src = "assets/images/bisexual-pride-flag.jpg";
      cycleflag = false;
    } else if (current.id === "bisexual") {
      current.id = "transgender";
      let flagtochange = document.querySelector(".flag-img");
      flagtochange.src = "assets/images/transgender-pride-flag.jpg";
      cycleflag = false;
    } else if (current.id === "transgender") {
      current.id = "queer";
      let flagtochange = document.querySelector(".flag-img");
      flagtochange.src = "assets/images/queer-pride-flag.jpg";
      cycleflag = false;
    } else if (current.id === "queer") {
      current.id = "intersex";
      let sorry = document.getElementById("bad-image");
      sorry.innerHTML = "Sorry the flag looks weird. It compressed wrong :(";
      let flagtochange = document.querySelector(".flag-img");
      flagtochange.src = "assets/images/intersex-pride-flag.jpg";
      cycleflag = false;
    } else if (current.id === "intersex") {
      let sorry = document.getElementById("bad-image");
      sorry.innerHTML = "";
      current.id = "asexual";
      let flagtochange = document.querySelector(".flag-img");
      flagtochange.src = "assets/images/asexual-pride-flag.jpg";
      cycleflag = false;
    } else if (current.id === "asexual") {
      current.id = "aromantic";
      let flagtochange = document.querySelector(".flag-img");
      flagtochange.src = "assets/images/aromantic-pride-flag.jpg";
      cycleflag = false;
    } else if (current.id === "aromantic") {
      current.id = "agender";
      let flagtochange = document.querySelector(".flag-img");
      flagtochange.src = "assets/images/agender-pride-flag.jpg";
      cycleflag = false;
    } else {
      current.id = "lesbian";
      let flagtochange = document.querySelector(".flag-img");
      flagtochange.src = "assets/images/lesbian-pride-flag.jpg";
      cycleflag = false;
    }
  }
}

setInterval(checkflagtype, 1);
