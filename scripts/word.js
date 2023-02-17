export function create_word(id) {
    const section = document.createElement("section");
    section.id = id;
    section.classList.add("word");
    const words = ["lorem", "ipsum", "dolor", "sit", "amet"];
    words.forEach((word, i) => {
      const token = document.createElement("p");
      token.id = "word" + i;
      token.innerHTML = word;
      section.appendChild(token);
    });
    document.body.appendChild(section);
  }