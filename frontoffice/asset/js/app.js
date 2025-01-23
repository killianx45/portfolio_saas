"use strict";

const scrollItems = document.querySelectorAll(".scroll-item");

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

scrollItems.forEach((item) => {
  observer.observe(item);
});

const lien = document.querySelectorAll('a[href^="#"]');

lien.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href").substring(1);
    const target = document.getElementById(id);
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

function toggleNavbar() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("rounded-full");
}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navbar-cta a");

const navObserverOptions = {
  root: null,
  rootMargin: "-50% 0px",
  threshold: 0,
};

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.remove("text-blueColor", "lg:text-blueColor");
        link.classList.add(
          "text-black",
          "dark:text-white",
          "lg:hover:text-blueColor"
        );
      });

      const activeLink = document.querySelector(
        `#navbar-cta a[href="#${entry.target.id}"]`
      );
      if (activeLink) {
        activeLink.classList.remove(
          "text-black",
          "dark:text-white",
          "lg:hover:text-blueColor"
        );
        activeLink.classList.add("text-blueColor", "lg:text-blueColor");
      }
    }
  });
}, navObserverOptions);

sections.forEach((section) => {
  navObserver.observe(section);
});

const header = document.querySelector("header");
const homeLink = document.querySelector('#navbar-cta a[href="#home"]');

const headerObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.remove("text-blueColor", "lg:text-blueColor");
        link.classList.add(
          "text-black",
          "dark:text-white",
          "lg:hover:text-blueColor"
        );
      });

      homeLink.classList.remove(
        "text-black",
        "dark:text-white",
        "lg:hover:text-blueColor"
      );
      homeLink.classList.add("text-blueColor", "lg:text-blueColor");
    }
  });
}, navObserverOptions);

headerObserver.observe(header);

const projet = {
  projet1: {
    titre: "Site web judo club d'ascoux",
    description:
      "Un site dynamique conçu en HTML, CSS et JavaScript pour promouvoir l'association de judo de mon père. Il permet de consulter facilement les horaires et les informations de contact, tout en reflétant l'identité et les activités du club.",
    image: "frontoffice/asset/img/judo.webp",
    lien: "https://github.com/killianx45/website_ascoux_judoclub",
    video: "frontoffice/asset/videos/ascoux_judoclub_video.webm",
  },
  projet2: {
    titre: "Jeu Snake",
    description:
      "Un remake interactif du jeu classique Snake développé en HTML et JavaScript avec l'API Canvas. Ce projet m'a permis de comprendre les fondamentaux de Canvas et de créer des animations dynamiques et immersives.",
    image: "frontoffice/asset/img/snake.webp",
    lien: "https://killianx45.github.io/snake/",
    video: "frontoffice/asset/videos/snake_video.webm",
  },
  projet3: {
    titre: "Blog en Symfony",
    description:
      "Un blog interactif réalisé pour apprendre les bases de Symfony et enrichir mon expérience en développement backend. Ce projet inclut la publication d'articles, des notations, et un système d'authentification sécurisé, tout en se basant sur une base de données fournie par le client.",
    image: "frontoffice/asset/img/blog_symfony.webp",
    lien: "https://github.com/killianx45/projet_symfony",
    video: "frontoffice/asset/videos/blog_symfony_video.webm",
  },
  projet4: {
    titre: "Cinémathèque de France",
    description:
      "Projet scolaire développé pour explorer React, Node.js, TailwindCSS et MongoDB. Ce site interactif permet aux utilisateurs de consulter un catalogue de films et intègre des fonctionnalités avancées d'interaction et de gestion des API.",
    image: "frontoffice/asset/img/cinetheque_react.webp",
    lien: "https://github.com/killianx45/projetfilerouge_b2d_cinetheque",
    video: "frontoffice/asset/videos/cinetheque_video.webm",
  },
  projet5: {
    titre: "Application chronomètre en Flutter",
    description:
      "Première incursion dans le développement mobile, cette application Flutter propose un chronomètre simple et efficace, conçue pour apprendre les bases de Flutter et le développement d'UI réactives.",
    image: "frontoffice/asset/img/stopwatch.webp",
    lien: "https://github.com/killianx45/stopwatch",
    video: "frontoffice/asset/videos/stopwatch_video.webm",
  },
  projet6: {
    titre: "Tendance or Not",
    description:
      "Projet scolaire en PHP, MySQL, HTML, CSS, JavaScript, permettant de consulter les tendances actuelles grâce à des images triées par catégories.",
    image: "frontoffice/asset/img/tendance-or-not.webp",
    lien: "https://github.com/killianx45/tendance-or-not",
    video: "frontoffice/asset/videos/tendance_or_not_video.webm",
  },
};

const popup = document.querySelector(".popup");

document.querySelectorAll(".project-image").forEach((image) => {
  image.addEventListener("click", () => {
    const imageSrc = image.getAttribute("src");
    for (const key in projet) {
      if (projet[key].image === imageSrc) {
        const projetData = projet[key];
        popup.innerHTML = `
          <span class="popup-close">&times;</span>
          <div class="content-popup">
            <video class="img-popup" autoplay muted playsinline loop>
              <source src="${projetData.video}" type="video/mp4">
              Votre navigateur ne supporte pas les vidéos.
            </video>
            <div class="text-popup">
              <h4>${projetData.titre}</h4>
              <p>${projetData.description}</p>
              <a class="link-projet" href="${projetData.lien}" target="_blank" aria-label="${projetData.titre}" rel="noopener">Voir le code</a>
            </div>
          </div>`;
        popup.style.display = "flex";
        popup.style.justifyContent = "center";
        popup.style.alignItems = "center";
        document.body.style.overflow = "hidden";

        const closePopup = document.querySelector(".popup-close");
        closePopup.addEventListener("click", () => {
          popup.style.display = "none";
          document.body.style.overflow = "auto";
        });

        document.addEventListener("click", (e) => {
          if (e.target === popup) {
            popup.style.display = "none";
            document.body.style.overflow = "auto";
          }
        });
      }
    }
  });
});

// Gestion du thème clair/sombre
var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Par défaut en mode clair
if (localStorage.getItem("color-theme") === "dark") {
  themeToggleLightIcon.classList.remove("hidden");
  document.documentElement.classList.add("dark");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
  document.documentElement.classList.remove("dark");
  localStorage.setItem("color-theme", "light");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});
