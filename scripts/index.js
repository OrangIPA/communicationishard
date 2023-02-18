import { start_game } from "./init.js";
import { main } from "./test.js";

let start_button = document.getElementById('start-game');
start_button.addEventListener('click', start_game);

// Test
main();