// ===== НАСТРОЙКИ =====
const phrases = [
  "Реал рад вас видеть!",
  "Реал желает отличного дня!",
  "Реал передаёт тёплый привет!",
  "Реал улыбается вам 🙂",
  "Реал желает вкусного кофе!",
  "Реал говорит: всё будет хорошо!",
  "Реал рядом. И это приятно.",
  "Реал желает лёгкого дня!",
  "Реал шепчет: вы классные!",
  "Реал всегда вам рад!"
];

// ===== ПЕРЕМЕННЫЕ =====
const textElement = document.getElementById("speechText");
const button = document.getElementById("nextPhrase");
const bubble = document.querySelector(".speech-wrapper");

let lastIndex = -1;

// ===== ФУНКЦИЯ СЛУЧАЙНОЙ ФРАЗЫ (БЕЗ ПОВТОРА ПОДРЯД) =====
function getRandomPhrase() {
  let index;
  do {
    index = Math.floor(Math.random() * phrases.length);
  } while (index === lastIndex);

  lastIndex = index;
  return phrases[index];
}

// ===== СМЕНА ТЕКСТА С АНИМАЦИЕЙ =====
function changePhrase() {
  // Плавно скрываем текст
  textElement.style.opacity = 0;

  // Лёгкая реакция облачка
  bubble.style.transform = "scale(1.13)";

  setTimeout(() => {
    // Меняем текст
    textElement.textContent = getRandomPhrase();

    // Возвращаем облачко
    bubble.style.transform = "scale(1)";

    // Плавно показываем текст
    textElement.style.opacity = 1;
  }, 400);
}

// ===== ПЕРВЫЙ ЗАПУСК ПРИ ОТКРЫТИИ САЙТА =====
document.addEventListener("DOMContentLoaded", () => {
  textElement.textContent = getRandomPhrase();
});

// ===== КНОПКА =====
button.addEventListener("click", changePhrase);
