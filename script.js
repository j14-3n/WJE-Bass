const recording = document.getElementById("Bottesini Concerto No. 2");
const mpyo = document.getElementById("MPYO");
const mpyoDialog = document.getElementById("MPYO pieces");
const nso = document.getElementById("NSO");
const nsoDialog = document.getElementById("NSO pieces");
const ayo = document.getElementById("AYO 2026");
const ayoDialog = document.getElementById("AYO pieces");
const rondoFest = document.getElementById("RondoFest 2026");
const rondoFestDialog = document.getElementById("RondoFest about");

recording.addEventListener('click', () => {
    window.open("https://www.youtube.com/watch?v=3g0j1k5J6xM", "_blank");
});

mpyo.addEventListener('click', () => {
    mpyoDialog.showModal();
});

nso.addEventListener('click', () => {
    nsoDialog.showModal();
});

mpyoDialog.addEventListener('click', (event) => {
    if (event.target === mpyoDialog) {
        mpyoDialog.close();
    }
});

nsoDialog.addEventListener('click', (event) => {
    if (event.target === nsoDialog) {
        nsoDialog.close();
    }
});

ayo.addEventListener('click', () => {
    ayoDialog.showModal();
});

ayoDialog.addEventListener('click', (event) => {
    if (event.target === ayoDialog) {
        ayoDialog.close();
    }
});

rondoFest.addEventListener('click', () => {
    rondoFestDialog.showModal();
});

rondoFestDialog.addEventListener('click', (event) => {
    if (event.target === rondoFestDialog) {
        rondoFestDialog.close();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        root: null,       // Uses the browser viewport
        rootMargin: '0px',
        threshold: 0.15   // Triggers when 15% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Scrolled INTO view: Fade up and in
                entry.target.classList.add('is-visible');
            } else {
                // Scrolled AWAY: Remove class to fade back out / reset 
                // (Delete this 'else' block if you only want it to animate once)
                entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    // Target your section
    const section = document.querySelector('.fade-section');
    observer.observe(section);
});

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                // Optional: remove class if you want it to fade out when scrolling away
                entry.target.classList.remove('is-visible');
            }
        });
    }, {
        threshold: 0.2 // Triggers when 20% of the section is visible
    });

    document.querySelectorAll('.scroll-section').forEach(section => {
        observer.observe(section);
    });
});
