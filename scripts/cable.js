function color_count(set) {
  let red_count = 0;
  let green_count = 0;
  let blue_count = 0;
  let yellow_count = 0;
  let cyan_count = 0;
  let magenta_count = 0;
  set.forEach((v, _i) => {
    if (v === "#f00") red_count++;
    if (v === "#0f0") green_count++;
    if (v === "#00f") blue_count++;
    if (v === "#ff0") yellow_count++;
    if (v === "#0ff") cyan_count++;
    if (v === "#f0f") magenta_count++;
  });
  return [
    red_count,
    green_count,
    blue_count,
    yellow_count,
    cyan_count,
    magenta_count,
  ];
}

function cable_correct_6(set) {
  // Color count
  let [
    red_count,
    green_count,
    blue_count,
    yellow_count,
    cyan_count,
    magenta_count,
  ] = color_count(set);
  console.log(
    red_count,
    green_count,
    blue_count,
    yellow_count,
    cyan_count,
    magenta_count
  );

  // First condition: IF the amount of red button(s) minus green button(s) is bigger than the amount of blue button(s) AND there is at least 1 green button(s), CLICK the first green button
  if (red_count - green_count > blue_count && green_count > 0){
    // set.forEach((v, i) => {
    //   if (v === "#0f0") return i;
    // });
    for (let i = 0; i < set.length; i++) {
      if (set[i] === "#0f0") {
        console.log("first condition")
        return i;
      }
    }
  }

  // Second condition: OTHERWISE, IF there is more red button than cyan, CLICK the fourth button
  if (red_count > cyan_count) {
    console.log("second condition")
    return 3;
  }

  // Third condition: OTHERWISE, IF there is a magenta button, CLICK the first magenta button
  if (magenta_count > 0){
    // set.forEach((v, i) => {
    //   console.log("third condition");
    //   if (v === "#f0f") return i;
    // });
    for (let i = 0; i < set.length; i++) {
      if (set[i] === "#f0f") {
        console.log("third condition")
        return i;
      }
    }

  }

  // Fourth condition: OTHERWISE, IF there is no cyan button, CLICK the third button
  if (cyan_count === 0) {
    console.log("fourth condition");
    return 2;
  }

  // None of the above: OTHERWISE, CLICK the fifth button
  console.log("None");
  return 4;
}

function cable_correct_5(set) {
  // Color count
  let [red, green, blue, yellow, cyan, magenta] = color_count(set);
  console.log(red, green, blue, yellow, cyan, magenta);

  // First condition: IF there is more than 1 blue button AND the second button is NOT red, CLICK the second button
  if (blue > 1 && set[1] !== "#f00") {
    console.log("first condition");
    return 1;
  }

  // Second condition: OTHERWISE, IF there is NO red button, AND there is exactly 1 cyan button, CLICK the cyan button
  if (red === 0 && cyan === 1){
    // set.forEach((v, i) => {
    //   console.log("second condition");
    //   if (v === "#0ff") return i;
    // });
    for (let i = 0; i < set.length; i++) {
      if (set[i] === "#0ff") {
        console.log("second condition")
        return i;
      }
    }
  }

  // Third condition: OTHERWISE, IF there is exactly 2 yellow buttons, CLICK the third button
  if (yellow === 2) {
    console.log("third condition");
    return 2;
  }

  // Fourth condition: OTHERWISE, IF the color of the first button is green AND the color of the fourth button is NOT green, CLICK the first button
  if (set[0] === "#0f0" && set[3] !== "#0f0") {
    console.log("fourth condition");
    return 0;
  }

  // None of the above: OTHERWISE, CLICK the last button
  console.log("None");
  return 4;
}

function cable_correct_4(set) {
  // Color count
  let [red, green, blue, yellow, cyan, magenta] = color_count(set);
  console.log(red, green, blue, yellow, cyan, magenta);

  // First condition: IF the amount of red button(s) is bigger than green button AND there is exactly 1 yellow button, CLICK the yellow button
  if (red > green && yellow === 1){
    // set.forEach((v, i) => {
    //   console.log("first condition");
    //   if (v === "#ff0") return i;
    // });
    for (let i = 0; i < set.length; i++) {
      if (set[i] === "#ff0") {
        console.log("first condition")
        return i;
      }
    }

  }

  // Second condition: OTHERWISE, IF there is more than 1 yellow button, CLICK the last yellow button
  if (yellow > 1) {
    for (let i = 3; i >= 0; i--) {
      console.log("second condition");
      if (set[i] === "#ff0") return i;
    }
  }

  // Third condition: OTHERWISE, IF the third button is cyan AND the second button is yellow, CLICK the third button
  if (set[2] === "#0ff" && set[1] === "#ff0") {
    console.log("third condition");
    return 2;
  }

  // Fourth condition: OTHERWISE, IF there is NO magenta button, CLICK the first button
  if (magenta === 0) {
    console.log("fourth condition");
    return 0;
  }

  // Fifth condition: OTHERWISE, IF there is exactly 1 red button AND more than 1 green button, CLICK the red button
  if (red === 1 && green > 1){
    // set.forEach((v, i) => {
    //   console.log("fifth condition");
    //   if (v === "#f00") return i;
    // });
    for (let i = 0; i < set.length; i++) {
      if (set[i] === "#f00") {
        console.log("fifth condition")
        return i;
      }
    }

  }

  // None of the above: OTHERWISE, CLICK the second button
  console.log("None");
  return 1;
}

function cable_color_rand(val) {
  let set = ["#f00", "#0f0", "#00f", "#ff0", "#0ff", "#f0f"];
  let res = [];
  if (Number(val) === NaN) throw "val is not a number";
  for (let i = 0; i < val; i++) {
    res[i] = set[Math.floor(Math.random() * 6)];
  }
  return res;
}

function cable_listener(correct, id) {
  const buttons = document.querySelectorAll("section button");
  buttons.forEach((button, _i) => {
    button.addEventListener("click", () => {
      const section = document.querySelector("section.cable");
      if (window.mod_result[id] === true) return;
      if (button.id === "cable" + correct) {
        button.classList.add("clicked");
        section.style.backgroundColor = "#5f5";
        window.mod_result[id] = true;
      } else {
        button.style.border = "7px " + "solid " + button.style.backgroundColor;
        button.style.backgroundColor = "#000";
        section.style.backgroundColor = "#f00";
        window.lives -= 1;
        setTimeout(() => {
          section.style.backgroundColor = "#fff";
        }, 300);
      }
    });
  });
}

export function create_cable(id) {
  const section = document.createElement("section");
  section.id = id;
  section.classList.add("cable");

  const cable_val = Math.floor(Math.random() * 3) + 4;
  const cable_color = cable_color_rand(cable_val);

  // DEBUG
  // const cable_color = ["#f00", "#f00", "#f00", "#f0f", "#0f0", "#f0f"];
  // const cable_color = ["#f0f", "#f0f", "#f0f", "#f0f", "#f0f", "#f0f"];
  // const cable_val = 6;
  // DEBUG

  let correct = null;
  switch (cable_val) {
    case 4:
      console.log("4!");
      correct = cable_correct_4(cable_color);
      break;
    case 5:
      console.log("5!");
      correct = cable_correct_5(cable_color);
      break;
    case 6:
      console.log("6!");
      correct = cable_correct_6(cable_color);
      break;
    default:
      throw "ERROR! cable value is not 4, 5, or 6";
  }

  cable_color.forEach((color, i) => {
    const cable = document.createElement("button");
    cable.id = "cable" + i;
    cable.style.backgroundColor = color;
    section.appendChild(cable);
  });
  document.body.appendChild(section);
  cable_listener(correct, id);
  console.log(correct);
}
