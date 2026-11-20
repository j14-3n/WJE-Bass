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

document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("menu-open-btn");
    const closeBtn = document.getElementById("menu-close-btn");
    const drawer = document.getElementById("nav-drawer");
    const triggerBtns = document.querySelectorAll(".dropdown-trigger-btn");
    const navLinks = document.querySelectorAll(".nav-link, .dropdown-link");

    function openDrawer() {
        drawer.classList.add("is-open");
        drawer.setAttribute("aria-hidden", "false");
    }

    function closeDrawer() {
        drawer.classList.remove("is-open");
        drawer.setAttribute("aria-hidden", "true");
    }

    openBtn.addEventListener("click", openDrawer);
    closeBtn.addEventListener("click", closeDrawer);

    // Close the drawer right after clicking a navigation or sub-menu link
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            closeDrawer();
        });
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && drawer.classList.contains("is-open")) {
            closeDrawer();
        }
    });

    // Sub-menu toggle button remains intact
    triggerBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const parentItem = btn.closest(".nav-item");
            parentItem.classList.toggle("is-open");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("bg-music");
    const playPauseBtn = document.getElementById("play-pause-btn");
    const seekBar = document.getElementById("seek-bar");
    const volumeBar = document.getElementById("volume-bar");
    const currentTimeEl = document.getElementById("current-time");
    const durationEl = document.getElementById("duration");

    audio.volume = volumeBar.value;
    let userPaused = false;

    // Format seconds into M:SS
    function formatTime(seconds) {
        if (isNaN(seconds)) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    }

    // Attempt autoplay; fallback to first click/keypress if browser blocks it
    function startMusic() {
        if (!userPaused && audio.paused) {
            audio.play().then(() => {
                playPauseBtn.textContent = "⏸";
            }).catch(() => {
                // Waiting for first user interaction
            });
        }
    }

    startMusic();
    document.addEventListener("click", startMusic, { once: true });
    document.addEventListener("keydown", startMusic, { once: true });

    // Play / Pause Button
    playPauseBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevents triggering the document click fallback
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = "⏸";
            userPaused = false;
        } else {
            audio.pause();
            playPauseBtn.textContent = "▶";
            userPaused = true;
        }
    });

    // Update timeline as song plays
    audio.addEventListener("timeupdate", () => {
        if (audio.duration) {
            seekBar.value = (audio.currentTime / audio.duration) * 100;
            currentTimeEl.textContent = formatTime(audio.currentTime);
        }
    });

    // Load total track duration
    audio.addEventListener("loadedmetadata", () => {
        durationEl.textContent = formatTime(audio.duration);
    });

    // Scrub through the song
    seekBar.addEventListener("input", () => {
        if (audio.duration) {
            audio.currentTime = (seekBar.value / 100) * audio.duration;
        }
    });

    // Adjust volume
    volumeBar.addEventListener("input", () => {
        audio.volume = volumeBar.value;
    });
});
