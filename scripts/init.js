import { create_cable } from "./cable.js";
import { create_word } from "./word.js";

export function start_game() {
  // Warn user that this screen is for defuser only
  alert(
    "ATTENTION: this screen is for you only, no other person is allowed to see this screen"
  );

  // Declaration and time initialization
  const section = document.getElementById("home");
  const module_count = Number(document.getElementById("mod-count").value);
  window.time = Number(document.getElementById("time").value);
  window.mod_result = [false];
  for (let i = 0; i < module_count; i++) {
    window.mod_result[i] = false;
  }
  window.lives = 3;

  // Module count check: must be between 2 and 10
  if (module_count < 2 || module_count > 2) {
    alert("module count must be between 2 and 2");
    return;
  }

  // Add play class to body
  document.body.classList.add("play");

  // Remove home screen
  section.remove();

  // Unhidden the header
  document.querySelector("header").style.display = "flex";

  // Update the timer and stop the game if the time is up
  const f = () => {
    window.time -= 1;
    const time_in_header = document.getElementById("time-left");
    time_in_header.innerHTML = "time left: " + window.time;
    if (window.time <= 0) {
      alert("time's up!");
      document.location.reload();
      return;
    }
    setTimeout(f, 1000);
  };
  f();

  // Spawn the modules
  create_cable(0);
  create_word(1);

  // Call the update function
  update();
}
function update() {
  const livesdom = document.getElementById("lives-left");
  if (window.lives === 1) {
    livesdom.innerHTML = "LAST LIVE!";
  } else if (window.lives <= 1) {
    alert("Game Over D:");
    document.location.reload();
  } else {
    livesdom.innerHTML = "lives left: " + window.lives;
  }
  setTimeout(update, 0);
}