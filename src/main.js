// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.15)";
  } else {
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  }
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all cards for animation
document
  .querySelectorAll(".skill-card, .project-card, .stat")
  .forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(element);
  });

// Mobile Sidebar Toggle
const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const sidebarLinks = document.querySelectorAll(".sidebar-link");

// Toggle sidebar on hamburger click
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  sidebar.classList.toggle("active");
});

// Close sidebar when a link is clicked
sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    sidebar.classList.remove("active");
  });
});

// Close sidebar when clicking outside
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !sidebar.contains(e.target)) {
    hamburger.classList.remove("active");
    sidebar.classList.remove("active");
  }
});

// Contact form functionality (if you add a form later)
console.log("Portfolio loaded successfully!");
