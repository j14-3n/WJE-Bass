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