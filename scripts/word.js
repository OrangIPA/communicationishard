import { random_int } from "./utils.js";

const words = [
  "WHAT",
  "WHEN",
  "WHERE",
  "CHEETAH",
  "KILL",
  "BLOOD",
  "EXPLODE",
  "LOREM",
  "IPSUM",
  "IPA",
  "NGISING",
  "CHESS",
  "HOOH",
  "YAHAHA",
  "HAYYUKK",
  "LEFT",
  "RIGHT",
  "WAIT",
  "EH",
  "LOLO",
  "KOSONG",
  "WADOH",
  "YOU",
  "FIRST",
];

export function create_word(id) {
  const section = document.createElement("section");
  section.id = id;
  section.classList.add("word");
  const words = words_gen();
  words.forEach((word, i) => {
    const token = document.createElement("p");
    token.id = "word" + i;
    token.innerHTML = word;
    section.appendChild(token);
  });
  document.body.appendChild(section);
}

function words_except(full, not) {
  let res = full;
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < not.length; j++) {
      if (not[j] === res[i]) res.splice(i, 1);
    }
  }
  return res;
}

function random_words(set, len) {
  let res = [];
  for (let i = 0; i < len; i++) {
    let index = Math.floor(Math.random() * set.length);
    res.push(set[index]);
    set.splice(index, 1);
  }
  return res;
}

function words_gen() {
  const condition = random_int(0, 7);
  let set = [];
  let res = []
  switch (condition) {
    case 1:
      res = random_words(words_except(words, ["CHEETAH", "WAIT"]), 5)
      res[0] = "CHEETAH"
      res[3] = "WAIT"
      break;
    case 2:
      res = random_words(words_except(words, ["LEFT", "YOU"]), 5)
      res[1] = "LEFT"
      res[2] = "YOU"
      break;
    case 3:
      res = random_words(words_except(words, ["FIRST", "YAHAHA"]), 5);
      res[0] = "FIRST"
      res[1] = "YAHAHA"
      break;
    case 4:
      res = random_words(words_except(words, ["FIRST", "NGISING"]), 5);
      res[3] = "FIRST"
      res[0] = "NGISING"
      break;
    case 5:
      res = random_words(words_except(words, ["EH", "HAYYUKK"]), 5);
      res[0] = "EH"
      res[2] = "HAYYUKK"
      break;
    case 6:
      res = random_words(words_except(words, ["LOLO", "BLOOD"]), 5);
      res[0] = "LOLO"
      res[4] = "BLOOD"
      break;
    case 7:
      res = random_words(words_except(words, ["LOREM", "IPSUM"]), 5);
      res[2] = "LOREM"
      res[3] = "IPSUM"
    default:
      res = random_words(words, 5);
  }
  return res;
}

function get_word_list(arg) {
}

async function word_answer(arg) {
  const list = await (await fetch("/scripts/word_list.json")).json();

}

export async function word_test() {
  const list = await (await fetch("/scripts/word_list.json")).json();
  console.log(list);
}
