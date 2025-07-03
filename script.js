document.addEventListener('DOMContentLoaded', setupEventListeners);

function setupEventListeners() {
  document.getElementById('generateBtn').addEventListener('click', generatePassword);
}

function getWords() {
  const w1 = document.getElementById('word1').value.trim();
  const w2 = document.getElementById('word2').value.trim();
  if (w1.length < 3 || w2.length < 3) {
    alert('Cada palabra debe tener al menos 3 caracteres.');
    return null;
  }
  return [w1, w2];
}

function generatePassword() {
  const words = getWords();
  if (!words) return;
  // Aquí se añadirá la lógica más adelante
}
