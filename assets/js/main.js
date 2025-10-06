// WEB ATELIER (UDIT) - Student Project Template JavaScript
// Add your interactive functionality here

document.addEventListener("DOMContentLoaded", function () {
  // Initialize your project functionality
  console.log("WEB ATELIER (UDIT) - Student project initialized");

  // Example: Add smooth scrolling for anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Example: Add skip link functionality
  const skipLink = document.querySelector(".skip-link");
  if (skipLink) {
    skipLink.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.focus();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});

// Add your custom functions here
// Example: Function to update page metadata
function updatePageMetadata(title, description) {
  document.title = title;

  let metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", description);
  } else {
    metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    metaDescription.setAttribute("content", description);
    document.head.appendChild(metaDescription);
  }
}

// Verificación de conexión
console.log("✅ main.js cargado correctamente");

// Selección de un elemento del DOM
const titulo = document.getElementById("titulo");

// Cambiar su contenido si existe
if (titulo) {
  titulo.textContent = "Texto cambiado desde main.js";
}

// Cogemos la referencia del botón
const btn = document.getElementById("btn-action");

// Añadimos el evento click al botón
if (btn) {
  // Al hacer click, abrir el enlace en una nueva pestaña
  btn.addEventListener("click", (commits) => {
    // Prevenimos el comportamiento por defecto del botón
    commits.preventDefault();
    window.open(
      "https://github.com/PRNovoa/Front_End1_Project/commits/main",
      "_blank",
      "noopener,noreferrer"
    );
  });
}

const header = document.querySelector("header");

// Cambiar el estilo del header al hacer scroll
window.addEventListener("scroll", () => {
  if (header) {
    if (window.scrollY > 50) {
      header.style.backgroundColor = "rgba(255, 255, 255, 1)";
      header.style.color = "white";
    } else {
      header.style.backgroundColor = "transparent";
      header.style.color = "inherit";
    }
  }
});

// Easter egg: Mostrar alerta al presionar la tecla "ñ"
document.addEventListener("keydown", (ñ) => {
  if (ñ.key === "ñ") {
    alert("Esto es un españa easter egg");
  }
});
