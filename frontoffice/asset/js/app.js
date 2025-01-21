"use strict";

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

const projet = {
  projet1: {
    titre: "Site web judo club d'ascoux",
    description:
      "Un site dynamique en HTML, CSS et JavaScript pour consulter les horaires et contacts du club de judo local.",
    image: "frontoffice/asset/img/judo.webp",
    lien: "https://github.com/killianx45/website_ascoux_judoclub",
    video: "frontoffice/asset/videos/ascoux_judoclub_video.webm",
  },
  projet2: {
    titre: "Jeu Snake",
    description:
      "Un projet en HTML et JavaScript utilisant le Canvas pour recréer le classique jeu Snake, permettant de maîtriser les éléments JavaScript et l'API Canvas pour des animations interactives.",
    image: "frontoffice/asset/img/snake.webp",
    lien: "https://killianx45.github.io/snake/",
    video: "frontoffice/asset/videos/snake_video.webm",
  },
  projet3: {
    titre: "Blog en Symfony",
    description:
      "Un blog interactif développé avec Symfony, permettant la publication d'articles, l'ajout de notes, et intégrant un système de connexion sécurisé, le tout basé sur une base de données fournie par le client.",
    image: "frontoffice/asset/img/blog_symfony.webp",
    lien: "https://github.com/killianx45/projet_symfony",
    video: "frontoffice/asset/videos/blog_symfony_video.webm",
  },
  projet4: {
    titre: "Cinémathèque de France",
    description:
      "Un site web interactif développé avec React, Node.js et MongoDB, offrant une consultation complète des films disponibles, enrichie de fonctionnalités avancées pour les utilisateurs.",
    image: "frontoffice/asset/img/cinetheque_react.webp",
    lien: "https://github.com/killianx45/projetfilerouge_b2d_cinetheque",
    video: "frontoffice/asset/videos/cinetheque_video.webm",
  },
  projet5: {
    titre: "Application chronomètre en Flutter",
    description:
      "Une application mobile basique développée en Flutter pour s'initier au développement d'applications, proposant un chronomètre intuitif avec des fonctionnalités réduites au minimum.",
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
              <a class="link-projet" href="${projetData.lien}" target="_blank" aria-label="${projetData.titre}" rel="noopener">Voir le projet</a>
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

const scrollItems = document.querySelectorAll(".scroll-item");

const observerOptions = {
  root: null, // Utilise le viewport
  rootMargin: "0px",
  threshold: 0.1, // 10% de l'élément visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target); // Arrête d'observer une fois visible
    }
  });
}, observerOptions);

// Observer chaque élément
scrollItems.forEach((item) => {
  observer.observe(item);
});
