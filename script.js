document.addEventListener("DOMContentLoaded", setupEventListeners);

function setupEventListeners() {
  document
    .getElementById("generateBtn")
    .addEventListener("click", generatePassword);
}

function getWords() {
  const w1 = document.getElementById("word1").value.trim();
  const w2 = document.getElementById("word2").value.trim();
  if (w1.length < 3 || w2.length < 3) {
    alert("Cada palabra debe tener al menos 3 caracteres.");
    return null;
  }
  return [w1, w2];
}

function interleaveWords(a, b) {
  let res = "";
  const max = Math.max(a.length, b.length);
  for (let i = 0; i < max; i++) {
    if (i < a.length) res += a[i];
    if (i < b.length) res += b[i];
  }
  return res;
}

function capitalizeRandom(str) {
  const i = Math.floor(Math.random() * str.length);
  return str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
}

function insertRandom(str, chars) {
  const pos = Math.floor(Math.random() * (str.length + 1));
  const c = chars[Math.floor(Math.random() * chars.length)];
  return str.slice(0, pos) + c + str.slice(pos);
}

function ensureMinLength(str, min = 12) {
  const allChars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  while (str.length < min) {
    str = insertRandom(str, allChars);
  }
  return str;
}

function shuffleString(str) {
  return str
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
}

function generatePassword() {
  const words = getWords();
  if (!words) return;
  let pwd = interleaveWords(words[0], words[1]);
  pwd = capitalizeRandom(pwd);
  pwd = insertRandom(pwd, "0123456789");
  pwd = insertRandom(pwd, "!@#$%^&*");
  pwd = ensureMinLength(pwd);
  pwd = shuffleString(pwd);
}
