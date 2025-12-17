//---- Header Js -----//

// Get elements
const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const scrollProgress = document.getElementById('scrollProgress');

// Sticky header on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Update scroll progress bar
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active link on scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-link[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav-link[href*=' + sectionId + ']').classList.remove('active');
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

//---- End Header Js -----//



// -----------Typing Animation --------------//

const roles = [
    'Shopify Developer',
    'Wix Developer',
    'CMS Specialist',
    'Front-End Developer',
    'eCommerce Expert'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingText = document.getElementById('typing-text');
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenRoles = 2000;

function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
        speed = delayBetweenRoles;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(type, speed);
}

// Start typing animation
type();

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// End of Typing Animation    


//--------------- About Sections Js---------- //

// Animate skill bars when section is in view
const observerOptionsSkillBar = {
    threshold: 0.3
};

const animateSkills = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const progress = bar.getAttribute('data-progress');
                bar.style.width = progress + '%';
            });
            observer.unobserve(entry.target);
        }
    });
};

const skillObserver = new IntersectionObserver(animateSkills, observerOptionsSkillBar);
const aboutSection = document.querySelector('.about-section');
skillObserver.observe(aboutSection);

// Animate counter numbers
const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += step;
        if (current < target) {
            element.textContent = Math.floor(current) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };

    updateCounter();
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(num => animateCounter(num));
            counterObserver.unobserve(entry.target);
        }
    });
}, observerOptionsSkillBar);

const statsSection = document.querySelector('.experience-stats');
if (statsSection) {
    counterObserver.observe(statsSection);
}

// --------------- End About Section Js ------------//



// ---------------- Education Section Js ---------------// 

// Intersection Observer for timeline animations
const observerOptionsEducation = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 200);
            timelineObserver.unobserve(entry.target);
        }
    });
}, observerOptionsEducation);

// // Observe all timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach(item => {
    timelineObserver.observe(item);
});

// ---------------- End Education Section Js---------------// 



// ------------ Service Section Js ---------------// 

// Intersection Observer for service cards
const observerOptionsService = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 150);
            serviceObserver.unobserve(entry.target);
        }
    });
}, observerOptionsService);

// Observe all service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    serviceObserver.observe(card);
});

// ------------ End Service Section Js --------------// 


// ------------ Project Section Js ---------------// 

// Filter functionality
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');

            if (filter === 'all' || category === filter) {
                card.classList.remove('hide');
                setTimeout(() => {
                    card.classList.add('show');
                }, 10);
            } else {
                card.classList.remove('show');
                setTimeout(() => {
                    card.classList.add('hide');
                }, 300);
            }
        });
    });
});

// Intersection Observer for project cards
const observerOptionsProject = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }, index * 100);
        }
    });
}, observerOptionsProject);

projectCards.forEach(card => {
    projectObserver.observe(card);
});

// ------------ End Project Section Js --------------// 


// ------------------------------------------//
// ---------- Form Submission Js -------------//
// ------------------------------------------//

// Form submission handler (you can add your own backend logic)
(function () {
    emailjs.init("41OHPaCAk8sjfx6kL"); // 🔴 Replace this
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.send(
        "service_y89crcb",      // ✅ Your Service ID
        "template_qeqnadd",     // 🔴 Replace this
        {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value,
        }
    )
        .then(() => {
            alert("✅ Message sent successfully!");
            this.reset();
        })
        .catch((error) => {
            alert("❌ Failed to send message.");
            console.log(error);
        });
});

// -------------------------------------//
// ---- End Form Submission Js -------//
// ----------------------------------// 