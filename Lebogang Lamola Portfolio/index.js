document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const navMenu = document.querySelector(".nav-menu");

  menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
      menu.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );

  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  themeToggle.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    body.setAttribute("data-theme", newTheme);
  });

  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-item");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 70;
      const sectionHeight = section.clientHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  const sliderContainer = document.querySelector(".slider-container");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;

  nextBtn.addEventListener("click", () => {
    const totalSlides = sliderContainer.children.length;
    currentIndex = (currentIndex + 1) % totalSlides;
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  });

  prevBtn.addEventListener("click", () => {
    const totalSlides = sliderContainer.children.length;
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  });
});

function downloadPDF() {
  const link = document.createElement("a");

  link.href = "image/pdf/LEBOGANG_LAMOLA.CV.pdf"; 
  link.download = "LebogangLamola_Resume.pdf"; 
  link.click();
}

function toggleHide() {
‎    const content = document.querySelector('.more');
‎    const button = document.getElementById('toggleBtn1');
‎    
‎    if (content.style.display === "none") {
‎      content.style.display = "block";
‎      button.textContent = "Read Less";
‎    } else {
‎      content.style.display = "none";
‎      button.textContent = "Read More";
‎    }
‎  }
‎
