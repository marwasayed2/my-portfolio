window.addEventListener('load', function() {
  // Wait for everything to load
  setTimeout(function() {
    const loader = document.querySelector('.loader-wrapper');
    loader.classList.add('fade-out');
    
    // Remove from DOM after animation
    setTimeout(() => {
      loader.remove();
    }, 500);
  }, 1500); // Adjust time as needed (1500 = 1.5 seconds)
});
const toggleModeBtn = document.getElementById('toggleMode');
const body = document.body;

toggleModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Change icon and colors based on mode
  if (body.classList.contains('dark-mode')) {
    toggleModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    toggleModeBtn.style.color = '#ffcc00';
    toggleModeBtn.style.backgroundColor = 'var(--dark-card)';
  } else {
    toggleModeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    toggleModeBtn.style.color = 'var(--primary-color)';
    toggleModeBtn.style.backgroundColor = '';
  }
});

// Check for saved theme preference
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && 
       window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark-mode');
    updateNavbarDarkMode();
  }
});

function updateNavbarDarkMode() {
  const navbar = document.querySelector('.navbar');
  if (document.body.classList.contains('dark-mode')) {
    navbar.style.background = 'rgba(30, 30, 30, 0.95)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.9)';
  }
}
// Custom Cursor
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});


// Toggle Mobile Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Change navbar style on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.9)';
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
});

// Animate elements when scrolling
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.about-img, .about-text, .skill-item, .project-card, .contact-item');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (elementPosition < screenPosition) {
      element.classList.add('animate__animated', 'animate__fadeInUp');
    }
  });
};

window.addEventListener('scroll', animateOnScroll);

// Animate skill bars
const animateSkills = () => {
  const skillBars = document.querySelectorAll('.progress-bar span');
  
  skillBars.forEach(bar => {
    const width = bar.parentElement.getAttribute('data-width');
    bar.style.width = width;
  });
};

// Initialize particles.js
document.addEventListener('DOMContentLoaded', () => {
  // Animate skills when skills section is in view
  const skillsSection = document.getElementById('skills');
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateSkills();
    }
  }, { threshold: 0.1 });
  
  if (skillsSection) {
    observer.observe(skillsSection);
  }
  
  // Initialize particles.js
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#6a11cb" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#6a11cb", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" }
        }
      }
    });
  }
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    });
  });
});


const texts = ["Full Stack Developer", "Front-End Developer","Back-End Developer"]  
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  
  document.getElementById("dynamic-text").textContent = letter;
  
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 2000);
  } else {
    setTimeout(type, 100);
  }
})();

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
const skillItems = document.querySelectorAll('.skill-item');


new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    animateSkills();
  }
}, { threshold: 0.1 }).observe(document.querySelector('.skills-section'));

const projectCards = document.querySelectorAll('.project-card');

const animateProjects = () => {
  projectCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('animate__animated', 'animate__fadeInUp');
    }, index * 150);
  });
};

new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    animateProjects();
  }
}, { threshold: 0.1 }).observe(document.querySelector('#projects'));

