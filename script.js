function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}





document.addEventListener("DOMContentLoaded", function () {
  const firstSection = document.querySelector('.fade-in:first-of-type');
  if (firstSection) {
    firstSection.classList.add("visible");
  }

  window.addEventListener("scroll", function () {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (elementPosition < screenPosition) {
        element.classList.add("visible");
      }
    });
  });
});



document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect();
      const topTrigger = window.innerHeight / 1.3; // Точка появления
      const bottomTrigger = window.innerHeight * 0.2; // Точка исчезновения

      // Если элемент в зоне появления
      if (elementPosition.top < topTrigger && elementPosition.bottom > bottomTrigger) {
        element.classList.add("visible");
      } else {
        // Если элемент выходит из видимости
        element.classList.remove("visible");
      }
    });
  });
});






function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  // Проверка на открытие/закрытие меню
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");

    // Ждем окончания анимации перед скрытием видимости
    setTimeout(() => {
      menu.style.visibility = "hidden";
    }, 300); // Время совпадает с transition в CSS
  } else {
    menu.style.visibility = "visible";
    menu.classList.add("open");
  }

  icon.classList.toggle("open");
}



document.addEventListener("DOMContentLoaded", function () {
  const textContainer = document.querySelector(".text-container p");

  // Создаем Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Перезапуск анимации при входе в зону видимости
          textContainer.style.animation = "none"; // Сброс анимации
          void textContainer.offsetWidth; // Триггер перерисовки
          textContainer.style.animation = "textReveal 3s ease forwards"; // Включение анимации
        }
      });
    },
    {
      threshold: 0.3, // 30% текста должно быть видно, чтобы сработать
    }
  );

  observer.observe(textContainer);
});












