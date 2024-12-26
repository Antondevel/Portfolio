// Функция для открытия/закрытия меню
function toggleMenu() {
  const menu = document.querySelector(".menu-links"); // Получаем ссылку на меню
  const icon = document.querySelector(".hamburger-icon"); // Получаем ссылку на иконку "гамбургер"

  // Проверка: если меню открыто
  if (menu.classList.contains("open")) {
    menu.classList.remove("open"); // Убираем класс "open", закрывая меню

    // Ждем окончания анимации перед скрытием меню (через CSS transition)
    setTimeout(() => {
      menu.style.visibility = "hidden"; // Убираем видимость
    }, 300); // Время в миллисекундах должно совпадать с CSS-переходом
  } else {
    menu.style.visibility = "visible"; // Делаем меню видимым
    menu.classList.add("open"); // Добавляем класс "open", открывая меню
  }

  icon.classList.toggle("open"); // Переключаем состояние иконки "гамбургер"
}

// Ожидание полной загрузки DOM перед выполнением кода
document.addEventListener("DOMContentLoaded", function () {
  const firstSection = document.querySelector('.fade-in:first-of-type'); // Выбираем первый элемент с классом "fade-in"
  if (firstSection) {
    firstSection.classList.add("visible"); // Делаем его видимым сразу после загрузки
  }

  // Обработчик события прокрутки
  window.addEventListener("scroll", function () {
    const elements = document.querySelectorAll('.fade-in'); // Все элементы с классом "fade-in"
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top; // Позиция элемента относительно viewport
      const screenPosition = window.innerHeight / 1.3; // Точка активации анимации (высота экрана делится на 1.3)

      if (elementPosition < screenPosition) {
        element.classList.add("visible"); // Если элемент достигает точки, добавляем класс "visible"
      }
    });
  });
});

// Второй обработчик события для появления и исчезновения элементов
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const elements = document.querySelectorAll('.fade-in'); // Выбираем все элементы с классом "fade-in"

    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect(); // Получаем положение элемента
      const topTrigger = window.innerHeight / 1.3; // Точка появления элемента
      const bottomTrigger = window.innerHeight * 0.2; // Точка исчезновения элемента

      // Условие: элемент находится в зоне видимости
      if (elementPosition.top < topTrigger && elementPosition.bottom > bottomTrigger) {
        element.classList.add("visible"); // Делаем элемент видимым
      } else {
        element.classList.remove("visible"); // Скрываем элемент, если он вне зоны видимости
      }
    });
  });
});

// Функция для перезапуска анимации текста
document.addEventListener("DOMContentLoaded", function () {
  const textContainer = document.querySelector(".text-container p"); // Получаем элемент текста

  // Создаем Intersection Observer для отслеживания видимости элемента
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Если элемент становится видимым, перезапускаем анимацию
          textContainer.style.animation = "none"; // Сбрасываем текущую анимацию
          void textContainer.offsetWidth; // Принудительный триггер перерисовки
          textContainer.style.animation = "textReveal 3s ease forwards"; // Запускаем анимацию
        }
      });
    },
    {
      threshold: 0.00000001, // Анимация срабатывает, если 30% элемента видны
    }
  );

  observer.observe(textContainer); // Подключаем наблюдатель к элементу
});
