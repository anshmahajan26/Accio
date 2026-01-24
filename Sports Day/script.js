const logDiv = document.getElementById("log");
const startBtn = document.getElementById("startBtn");

let scores = {
  red: 0,
  blue: 0,
  green: 0,
  yellow: 0
};

function log(message) {
  logDiv.textContent += message + "\n";
}

// Opening Ceremony
function OpeningCeremony() {
  return new Promise((resolve) => {
    log("🏁 Opening Ceremony Started");

    let count = 1;
    let interval = setInterval(() => {
      log(`Opening Ceremony... ${count}`);
      count++;

      if (count > 3) {
        clearInterval(interval);
        log("🏁 Opening Ceremony Finished\n");
        resolve(scores);
      }
    }, 1000);
  });
}

// 100m Race
function Race100M(scores) {
  return new Promise((resolve) => {
    setTimeout(() => {
      log("🏃 100m Race Started");

      let times = {
        red: Math.floor(Math.random() * 6) + 10,
        blue: Math.floor(Math.random() * 6) + 10,
        green: Math.floor(Math.random() * 6) + 10,
        yellow: Math.floor(Math.random() * 6) + 10
      };

      log("Race Times: " + JSON.stringify(times));

      let sorted = Object.entries(times).sort((a, b) => a[1] - b[1]);

      scores[sorted[0][0]] += 50;
      scores[sorted[1][0]] += 25;

      log("Updated Scores after Race: " + JSON.stringify(scores) + "\n");
      resolve(scores);
    }, 3000);
  });
}

// Long Jump
function LongJump(scores) {
  return new Promise((resolve) => {
    setTimeout(() => {
      log("🤾 Long Jump Started");

      let colors = ["red", "blue", "green", "yellow"];
      let winner = colors[Math.floor(Math.random() * colors.length)];

      scores[winner] += 150;

      log(`Long Jump Winner: ${winner}`);
      log("Updated Scores after Long Jump: " + JSON.stringify(scores) + "\n");
      resolve(scores);
    }, 2000);
  });
}

// High Jump
function HighJump(scores) {
  return new Promise((resolve) => {
    setTimeout(() => {
      log("🦘 High Jump Started");

      let input = prompt("Which color won the High Jump? (red/blue/green/yellow)");

      if (input && scores.hasOwnProperty(input)) {
        scores[input] += 100;
        log(`High Jump Winner: ${input}`);
      } else {
        log("Invalid input. No points awarded.");
      }

      log("Updated Scores after High Jump: " + JSON.stringify(scores) + "\n");
      resolve(scores);
    }, 2000);
  });
}

// Award Ceremony
function AwardCeremony(scores) {
  log("🏆 Award Ceremony");

  let sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  log(`🥇 First Place: ${sorted[0][0]} (${sorted[0][1]} pts)`);
  log(`🥈 Second Place: ${sorted[1][0]} (${sorted[1][1]} pts)`);
  log(`🥉 Third Place: ${sorted[2][0]} (${sorted[2][1]} pts)`);
}

// Start button
startBtn.addEventListener("click", () => {
  logDiv.textContent = ""; // clear previous logs

  OpeningCeremony()
    .then(Race100M)
    .then(LongJump)
    .then(HighJump)
    .then(AwardCeremony)
    .catch(err => log("Error: " + err));
});
