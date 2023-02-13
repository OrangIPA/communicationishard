function start_game() {
  // Warning to user that this screen is for defuser only
  alert(
    "ATTENTION: this screen is for you only, no other person is allowed to see this screen"
  );

  // Declaration and time initialization
  const section = document.getElementById("home");
  const module_count = Number(document.getElementById("mod-count").value);
  window.time = Number(document.getElementById("time").value);

  // Module count check: must be between 2 and 10
  if (module_count < 2 || module_count > 10) {
    alert("module count must be between 2 and 10");
    return;
  }

  // Remove home screen
  section.remove();

  // Unhidden the header
  document.querySelector("header").style.display = "flex";

  // Update the timer and stop the game if the time is up
  const f = () => {
    window.time -= 1;
    const time_in_header = document.querySelector("header p");
    time_in_header.innerHTML = "time left: " + window.time;
    if (window.time <= 0) {
      alert("time's up!");
      document.location.reload();
      return;
    }
    setTimeout(f, 1000);
  };
  f();
  create_cable();
}

function cable_listener() {
  const buttons = document.querySelectorAll("section button");
  console.log(buttons.length);
  buttons.forEach((button, _i) => {
    button.addEventListener("click", () => {
      button.classList.add("clicked");
    });
  });
}

function create_cable() {
  const section = document.createElement("section");
  section.classList.add("cable");
  const cable_color = ["#f00", "#0f0", "#00f", "#ff0", "#0ff", "#f0f"];
  cable_color.forEach((color, i) => {
    const cable = document.createElement("button");
    cable.id = "cable" + i;
    cable.style.backgroundColor = color;
    section.appendChild(cable);
  });
  document.body.appendChild(section);
  cable_listener();
}
