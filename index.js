let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
console.log(homeScore);

let homeScoreCount = 0
let guestScoreCount = 0

function homeBtnAddOne() {
  homeScoreCount += 1
  homeScore.textContent = homeScoreCount
}

function homeBtnAddTwo() {
  homeScoreCount += 2
  homeScore.textContent = homeScoreCount
}

function homeBtnAddThree() {
  homeScoreCount += 3
  homeScore.textContent = homeScoreCount
}

function guestBtnAddOne() {
  guestScoreCount += 1
  guestScore.textContent = guestScoreCount
}

function guestBtnAddTwo() {
  guestScoreCount += 2
  guestScore.textContent = guestScoreCount
}

function guestBtnAddThree() {
  guestScoreCount += 3
  guestScore.textContent = guestScoreCount
}