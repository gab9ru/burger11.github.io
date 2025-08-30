// Creepy/mysterious subtitle flicker
const subtitles = [
  "What the helly",
  "Welcome lol",
  "This site is barely working",
  "Thank you Chatgpt",
  "WHAT!!",
  "soul not found",
  "wake up..."
];
const subtitleEl = document.querySelector(".subtitle");
setInterval(() => {
  const random = subtitles[Math.floor(Math.random() * subtitles.length)];
  subtitleEl.textContent = random;
}, 3000);

// Currency system
let gems = parseInt(localStorage.getItem("gems")) || 0;
const currencyEl = document.getElementById("currency");
const resultEl = document.getElementById("result");
currencyEl.textContent = gems;

const waifus = [
  { name: "Yelan", img: "images/yelan.jpg" },
  { name: "Frieren", img: "images/freren.jpg" },
  { name: "Mambo", img: "images/mambo.jpg" },
  { name: "Racist", img: "images/neckhurts.jpg" }
];

function rollGacha() {
  const cost = 3; // cost per summon
  if (gems < cost) {
    resultEl.innerHTML = "Not enough gems 💎! Spin the roulette first.";
    return;
  }

  // subtract cost
  gems -= cost;
  localStorage.setItem("gems", gems);
  currencyEl.textContent = gems;

  // Animation effect (shuffling names/images quickly before result)
  let shuffleCount = 0;
  const shuffleInterval = setInterval(() => {
    const random = waifus[Math.floor(Math.random() * waifus.length)];
    resultEl.innerHTML = `
      <p>Summoning...</p>
      <img src="${random.img}" alt="${random.name}" style="opacity:0.6; filter:blur(2px);">
    `;
    shuffleCount++;
    if (shuffleCount > 8) { // after ~8 shuffles, stop
      clearInterval(shuffleInterval);

      // Final Result
      const final = waifus[Math.floor(Math.random() * waifus.length)];
      resultEl.innerHTML = `
        <p>✨ You summoned: <strong>${final.name}</strong> ✨</p>
        <img src="${final.img}" alt="${final.name}">
      `;
    }
  }, 200); // shuffle speed
}