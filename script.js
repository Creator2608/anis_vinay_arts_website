// ==========================================
// MOBILE MENU
// ==========================================

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

if (menuButton && navMenu) {

    menuButton.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const icon = menuButton.querySelector("i");

        if (navMenu.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });

}


// ==========================================
// CLOSE MOBILE MENU AFTER CLICK
// ==========================================

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

        if (menuButton) {

            const icon = menuButton.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        }

    });

});


// ==========================================
// WHATSAPP QUOTE FORM
// ==========================================

const quoteForm = document.getElementById("quoteForm");

if (quoteForm) {

    quoteForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value;

        const whatsappNumber = "9890823930";

        const whatsappMessage =
            `Hello! I would like to enquire about your printing services.

Name: ${name}

Phone: ${phone}

Service: ${service}

Project Details:
${message}`;

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank");

    });

}


// ==========================================
// PREMIUM SCROLL ANIMATIONS
// ==========================================

const animatedElements = document.querySelectorAll(
    ".section-heading, " +
    ".service-card, " +
    ".about-image, " +
    ".about-content, " +
    ".process-step, " +
    ".portfolio-item, " +
    ".quote-info, " +
    ".quote-form, " +
    ".cta-content"
);


// Add animation class
animatedElements.forEach(element => {

    element.classList.add("scroll-animate");

});


// Observe elements
const animationObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


// Start observing
animatedElements.forEach(element => {

    animationObserver.observe(element);

});

// ==========================================
// WEDDING INVITATIONS SLIDESHOW
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const weddingSlideshow =
        document.querySelector(".wedding-slideshow");

    if (!weddingSlideshow) {
        console.log("Wedding slideshow NOT FOUND");
        return;
    }

    const image =
        weddingSlideshow.querySelector("img");

    if (!image) {
        console.log("Wedding image NOT FOUND");
        return;
    }

    const images = [
        "./images/wedding/card1.jpg",
        "./images/wedding/card2.jpg",
        "./images/wedding/card3.jpg",
        "./images/wedding/card4.jpg",
        "./images/wedding/card5.jpg",
        "./images/wedding/card6.jpg",
        "./images/wedding/card7.jpg"
    ];

    let index = 0;
    let timer = null;

    weddingSlideshow.addEventListener("mouseenter", function () {

        console.log("Wedding mouse entered");

        if (timer !== null) {
            return;
        }

        timer = setInterval(function () {

            index++;

            if (index >= images.length) {
                index = 0;
            }

            console.log("Changing to:", images[index]);

            image.src = images[index];

        }, 1500);

    });

    weddingSlideshow.addEventListener("mouseleave", function () {

        console.log("Wedding mouse left");

        clearInterval(timer);
        timer = null;

        index = 0;
        image.src = images[0];

    });

});
// ==========================================
// VISITING CARDS SLIDESHOW
// ==========================================

const visitingSlideshow =
    document.querySelector(".visiting-slideshow");

if (visitingSlideshow) {

    const visitingImage =
        visitingSlideshow.querySelector("img");

    const visitingImages = [
         "images/visiting cards/card1.jpg",
         "images/visiting cards/card2.jpg",
        "images/visiting cards/card3.jpg",
        "images/visiting cards/card4.jpg",
        "images/visiting cards/card5.jpg",
        "images/visiting cards/card6.jpg",
        "images/visiting cards/visiting-card.jpg"
    ];

    let visitingIndex = 0;
    let visitingTimer = null;


    visitingSlideshow.addEventListener("mouseenter", function () {

        if (visitingTimer !== null) {
            return;
        }

        visitingTimer = setInterval(function () {

            visitingIndex++;

            if (visitingIndex >= visitingImages.length) {
                visitingIndex = 0;
            }

            visitingImage.src =
                visitingImages[visitingIndex];

        }, 1200);

    });


    visitingSlideshow.addEventListener("mouseleave", function () {

        clearInterval(visitingTimer);

        visitingTimer = null;

        visitingIndex = 0;

        visitingImage.src =
            visitingImages[0];

    });

}
// ==========================================
// BANNERS & FLEX HOVER SLIDESHOW
// ==========================================

const bannerSlideshow =
    document.querySelector(".banner-slideshow");

if (bannerSlideshow) {

    const bannerImage =
        bannerSlideshow.querySelector("img");

    const bannerImages = [
        "images/banners/banner1.jpg",
        "images/banners/banner2.jpg",
        "images/banners/banner3.jpg",
        "images/banners/banner4.jpg",
        "images/banners/banner5.jpg",
        "images/banners/banner6.jpg"
    ];

    let bannerIndex = 0;
    let bannerTimer = null;


    bannerSlideshow.addEventListener("mouseenter", function () {

        if (bannerTimer !== null) return;

        bannerTimer = setInterval(function () {

            bannerIndex++;

            if (bannerIndex >= bannerImages.length) {
                bannerIndex = 0;
            }

            bannerImage.src = bannerImages[bannerIndex];

        }, 1200);

    });


    bannerSlideshow.addEventListener("mouseleave", function () {

        clearInterval(bannerTimer);

        bannerTimer = null;

        bannerIndex = 0;

        bannerImage.src = bannerImages[0];

    });

}
// ==========================================
// SIGN BOARDS HOVER SLIDESHOW
// ==========================================

const signboardSlideshow =
    document.querySelector(".signboard-slideshow");

if (signboardSlideshow) {

    const signboardImage =
        signboardSlideshow.querySelector("img");

    const signboardImages = [
        "images/signboards/board1.jpg",
        "images/signboards/board2.jpg",
        "images/signboards/board3.jpg",
        "images/signboards/board4.jpg",
        "images/signboards/board5.jpg",
        "images/signboards/board6.jpg"
    ];

    let signboardIndex = 0;
    let signboardTimer = null;


    signboardSlideshow.addEventListener("mouseenter", function () {

        if (signboardTimer !== null) return;

        signboardTimer = setInterval(function () {

            signboardIndex++;

            if (signboardIndex >= signboardImages.length) {
                signboardIndex = 0;
            }

            signboardImage.src =
                signboardImages[signboardIndex];

        }, 1200);

    });


    signboardSlideshow.addEventListener("mouseleave", function () {

        clearInterval(signboardTimer);

        signboardTimer = null;

        signboardIndex = 0;

        signboardImage.src =
            signboardImages[0];

    });

}
// ==========================================
// COMMERCIAL PRINTING HOVER SLIDESHOW
// ==========================================

const commercialSlideshow =
    document.querySelector(".commercial-slideshow");

if (commercialSlideshow) {

    const commercialImage =
        commercialSlideshow.querySelector("img");

    const commercialImages = [
        "images/commercial/company2.jpg",
        "images/commercial/company3.jpg",
        "images/commercial/company4.jpg",
        "images/commercial/company5.jpg",
        "images/commercial/company6.jpg"
    ];

    let commercialIndex = 0;
    let commercialTimer = null;


    commercialSlideshow.addEventListener("mouseenter", function () {

        if (commercialTimer !== null) return;

        commercialTimer = setInterval(function () {

            commercialIndex++;

            if (commercialIndex >= commercialImages.length) {
                commercialIndex = 0;
            }

            commercialImage.src =
                commercialImages[commercialIndex];

        }, 1200);

    });


    commercialSlideshow.addEventListener("mouseleave", function () {

        clearInterval(commercialTimer);

        commercialTimer = null;

        commercialIndex = 0;

        commercialImage.src =
            commercialImages[0];

    });

}
// ==========================================
// INDUSTRIAL PROJECTS HOVER SLIDESHOW
// ==========================================

const industrialSlideshow =
    document.querySelector(".industrial-slideshow");

if (industrialSlideshow) {

    const industrialImage =
        industrialSlideshow.querySelector("img");

    const industrialImages = [
        "images/industrial projects/in 1.jpg",
        "images/industrial projects/in2.jpg",
        "images/industrial projects/in3.jpg",
        "images/industrial projects/in4.jpg",
        "images/industrial projects/in5.jpg",
        "images/industrial projects/in6.jpg"
    ];

    let industrialIndex = 0;
    let industrialTimer = null;


    industrialSlideshow.addEventListener("mouseenter", function () {

        if (industrialTimer !== null) return;

        industrialTimer = setInterval(function () {

            industrialIndex++;

            if (industrialIndex >= industrialImages.length) {
                industrialIndex = 0;
            }

            industrialImage.src =
                industrialImages[industrialIndex];

        }, 1200);

    });


    industrialSlideshow.addEventListener("mouseleave", function () {

        clearInterval(industrialTimer);

        industrialTimer = null;

        industrialIndex = 0;

        industrialImage.src =
            industrialImages[0];

    });

}

