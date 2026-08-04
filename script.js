/*==================================================
    EVANGELLA ♥ KEVIN
    SCRIPT.JS - PART A
==================================================*/

// ==========================================
// ELEMENTS
// ==========================================

const body = document.body;

const loadingScreen = document.getElementById("loading-screen");

const openInvitation = document.getElementById("openInvitation");

const musicToggle = document.getElementById("musicToggle");

const bgMusic = document.getElementById("bgMusic");

const backToTop = document.getElementById("backToTop");

// ==========================================
// INITIAL SETTINGS
// ==========================================

body.style.overflow = "hidden";

musicToggle.style.display = "none";

backToTop.style.display = "none";

bgMusic.volume = 0;

// ==========================================
// LOADING SCREEN
// ==========================================

window.addEventListener("load", () => {

    setTimeout(() => {

        loadingScreen.style.opacity = "0";

        setTimeout(() => {

            loadingScreen.style.display = "none";

        },1000);

    },1500);

});

// ==========================================
// OPEN INVITATION
// ==========================================

openInvitation.addEventListener("click", () => {

    body.style.overflowY = "auto";

    musicToggle.style.display = "flex";

    document
        .getElementById("welcome-section")
        .scrollIntoView({

            behavior:"smooth"

        });

    bgMusic.play();

    let volume = 0;

    const fadeMusic = setInterval(() => {

        volume += 0.02;

        if(volume >= 0.40){

            volume = 0.40;

            clearInterval(fadeMusic);

        }

        bgMusic.volume = volume;

    },250);

});

// ==========================================
// MUSIC BUTTON
// ==========================================

let musicPlaying = true;

musicToggle.addEventListener("click", () => {

    if(musicPlaying){

        bgMusic.pause();

        musicToggle.innerHTML = "🔇";

    }else{

        bgMusic.play();

        bgMusic.volume = 0.20;

        musicToggle.innerHTML = "🎵";

    }

    musicPlaying = !musicPlaying;

});
/*==================================================
    SCRIPT.JS - PART B
==================================================*/

// ==========================================
// COUNTDOWN
// ==========================================

const weddingDate = new Date("November 14, 2026 09:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance <= 0) {

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60))
        / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60))
        / 1000);

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}

updateCountdown();

setInterval(updateCountdown,1000);

// ==========================================
// BACK TO TOP BUTTON
// ==========================================

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        backToTop.style.display = "flex";

    }else{

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ==========================================
// FADE UP ANIMATION
// ==========================================

const fadeElements = document.querySelectorAll(

    ".family-card, .event-card, .timeline-item, .contact-card, .count-box"

);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("fade-up");

            setTimeout(()=>{

                entry.target.classList.add("show");

            },150);

        }

    });

},{

    threshold:0.15

});

fadeElements.forEach(item=>{

    observer.observe(item);

});

// ==========================================
// BUTTON HOVER EFFECT
// ==========================================

document.querySelectorAll("button,a").forEach(item=>{

    item.addEventListener("touchstart",()=>{

        item.style.transform="scale(.97)";

    });

    item.addEventListener("touchend",()=>{

        item.style.transform="scale(1)";

    });

});

// ==========================================
// END
// ==========================================

console.log(

"Kevin ❤️ Evangella Engagement Invitation Loaded Successfully"

);