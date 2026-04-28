// Create particle effect
const particlesContainer = document.getElementById("particles-container");
const particleCount = 80;

// Create particles
for (let i = 0; i < particleCount; i++) {
  createParticle();
}

function createParticle() {
  const particle = document.createElement("div");
  particle.className = "particle";

  // Random size (small)
  const size = Math.random() * 3 + 1;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  // Initial position
  resetParticle(particle);

  particlesContainer.appendChild(particle);

  // Animate
  animateParticle(particle);
}

function resetParticle(particle) {
  // Random position
  const posX = Math.random() * 100;
  const posY = Math.random() * 100;

  particle.style.left = `${posX}%`;
  particle.style.top = `${posY}%`;
  particle.style.opacity = "0";

  return {
    x: posX,
    y: posY,
  };
}

function animateParticle(particle) {
  // Initial position
  const pos = resetParticle(particle);

  // Random animation properties
  const duration = Math.random() * 10 + 10;
  const delay = Math.random() * 5;

  // Animate with timing
  setTimeout(() => {
    particle.style.transition = `all ${duration}s linear`;
    particle.style.opacity = Math.random() * 0.3 + 0.1;

    // Move in a slight direction
    const moveX = pos.x + (Math.random() * 20 - 10);
    const moveY = pos.y - Math.random() * 30; // Move upwards

    particle.style.left = `${moveX}%`;
    particle.style.top = `${moveY}%`;

    // Reset after animation completes
    setTimeout(() => {
      animateParticle(particle);
    }, duration * 1000);
  }, delay * 1000);
}

// Toggle menu animation section
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuLinks = mobileMenu.querySelectorAll("a");

function closeMobileMenu() {
  mobileMenu.classList.remove("open");
  menuToggle.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
}

// Toggle menu open/close when clicking the button
menuToggle.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");

  menuToggle.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
});

// Close the menu when any link inside the menu is clicked
menuLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (!form || !status) return;

  const submitBtn = form.querySelector("button[type='submit']");
  if (!submitBtn) return;
  const submitBtnText = submitBtn.textContent;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    // clear previous status
    showStatus("", "");

    // client-side validation (optional extra)
    if (!form.checkValidity()) {
      showStatus("Please fill in all required fields.", "error");
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    const formData = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }, // ask Formspree for JSON response
      });

      if (res.ok) {
        form.reset();
        showStatus("Thanks! Your message has been sent.", "success");
      } else {
        // attempt to read JSON error details
        const data = await res.json().catch(() => ({}));
        const message = data.error || "Oops - something went wrong. Please try again.";
        showStatus(message, "error");
      }
    } catch (err) {
      showStatus("Network error - please check your connection and try again.", "error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = submitBtnText;
    }
  });

  // showStatus(message, type) where type is 'success' or 'error' or ''
  function showStatus(message, type) {
    status.textContent = message;
    status.className = type; // style via CSS
    if (type === "success") {
      // auto-hide success after a while (optional)
      setTimeout(() => {
        // only clear if it hasn't been changed
        if (status.className === "success") {
          status.textContent = "";
          status.className = "";
        }
      }, 7000);
    }
  }
});
