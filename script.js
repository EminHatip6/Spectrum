document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Logo scroll to top
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Smooth Scroll for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetHeader = document.querySelector(targetId);

            if (targetHeader) {
                const headerOffset = 100;
                const elementPosition = targetHeader.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Pro Typewriter effect for Triple Main Titles
    const t1 = document.getElementById('typewriter-title-1');
    const t2 = document.getElementById('typewriter-title-2');
    const t3 = document.getElementById('typewriter-title-3');
    
    const text1 = "SPEKTRUM";
    const text2 = "Siyasal Bilimler";
    const text3 = "Sempozyumu";
    
    let idx1 = 0, idx2 = 0, idx3 = 0;
    let deleting = false;
    let waitTime = 150;

    function runTypewriter() {
        if (!t1 || !t2 || !t3) return;

        if (!deleting) {
            // Forward Typing
            if (idx1 < text1.length) {
                t1.classList.add('typing');
                t1.innerHTML = text1.substring(0, idx1 + 1);
                idx1++;
                waitTime = 100 + Math.random() * 100;
            } else if (idx2 < text2.length) {
                t1.classList.remove('typing');
                t2.classList.add('typing');
                t2.innerHTML = text2.substring(0, idx2 + 1);
                idx2++;
                waitTime = 80 + Math.random() * 80;
            } else if (idx3 < text3.length) {
                t2.classList.remove('typing');
                t3.classList.add('typing');
                t3.innerHTML = text3.substring(0, idx3 + 1);
                idx3++;
                waitTime = 80 + Math.random() * 80;
            } else {
                // Done: Hold
                deleting = true;
                waitTime = 5000; 
            }
        } else {
            // Reverse Deleting
            if (idx3 > 0) {
                t3.classList.add('typing');
                t3.innerHTML = text3.substring(0, idx3 - 1);
                idx3--;
                waitTime = 30;
            } else if (idx2 > 0) {
                t3.classList.remove('typing');
                t2.classList.add('typing');
                t2.innerHTML = text2.substring(0, idx2 - 1);
                idx2--;
                waitTime = 30;
            } else if (idx1 > 0) {
                t2.classList.remove('typing');
                t1.classList.add('typing');
                t1.innerHTML = text1.substring(0, idx1 - 1);
                idx1--;
                waitTime = 30;
            } else {
                deleting = false;
                waitTime = 1000;
            }
        }

        setTimeout(runTypewriter, waitTime);
    }

    runTypewriter();

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});
