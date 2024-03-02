const homePts = document.querySelector(".home-pts");
const guestPts = document.querySelector(".guest-pts");
const homePlus1 = document.querySelector(".home-plus1");
const homePlus2 = document.querySelector(".home-plus2");
const homePlus3 = document.querySelector(".home-plus3");
const guestPlus1 = document.querySelector(".guest-plus1");
const guestPlus2 = document.querySelector(".guest-plus2");
const guestPlus3 = document.querySelector(".guest-plus3");
const resetBtn = document.querySelector(".reset");
let homeScore = 0;
let guestScore = 0;
function homeplusOne(scoreBoard) {
  homeScore++;
  scoreBoard.textContent = homeScore;
  isHigher(homeScore, guestScore);
}
function homeplusTwo(scoreBoard) {
  homeScore += 2;
  scoreBoard.textContent = homeScore;
  isHigher(homeScore, guestScore);
}
function homeplusThree(scoreBoard) {
  homeScore += 3;
  scoreBoard.textContent = homeScore;
  isHigher(homeScore, guestScore);
}

function guestplusOne(scoreBoard) {
  guestScore++;
  scoreBoard.textContent = guestScore;
  isHigher(homeScore, guestScore);
}
function guestplusTwo(scoreBoard) {
  guestScore += 2;
  scoreBoard.textContent = guestScore;
  isHigher(homeScore, guestScore);
}
function guestplusThree(scoreBoard) {
  guestScore += 3;
  scoreBoard.textContent = guestScore;
  isHigher(homeScore, guestScore);
}
homePlus1.addEventListener("click", function () {
  homeplusOne(homePts);
});
homePlus2.addEventListener("click", function () {
  homeplusTwo(homePts);
});
homePlus3.addEventListener("click", function () {
  homeplusThree(homePts);
});

guestPlus1.addEventListener("click", function () {
  guestplusOne(guestPts);
});
guestPlus2.addEventListener("click", function () {
  guestplusTwo(guestPts);
});
guestPlus3.addEventListener("click", function () {
  guestplusThree(guestPts);
});

function isHigher(home, guest) {
  if (home === guest) {
    homePts.style.color = "#f94f6d";
    guestPts.style.color = "#f94f6d";
  } else if (home > guest) {
    homePts.style.color = "white";
    guestPts.style.color = "#f94f6d";
  } else {
    homePts.style.color = "#f94f6d";
    guestPts.style.color = "white";
  }
}
resetBtn.addEventListener("click", function () {
  guestScore = 0;
  homeScore = 0;
  homePts.textContent = homeScore;
  guestPts.textContent = guestScore;
  homePts.style.color = "#f94f6d";
  guestPts.style.color = "#f94f6d";
});
