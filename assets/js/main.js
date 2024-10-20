/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

// const scrollHeaderbg = () => {
//   const logomenu = document.getElementsByClassName("addtextnav");
//   const logoimg = document.createElement("img");

//   this.scrollY >= 50
//     ? logoimg.src.add("assets/img/logo_white.png")
//     : logoimg.src.remove("assets/img/logo_white.png");
//     this.scrollY <= 50
//     ? logoimg.src.add("assets/img/logo_black.png")
//     : logoimg.src.remove("assets/img/logo_black.png");
//   logomenu.appendChild(logoimg)
//   // logomenu.classList.add("show-menu");
//   // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
// };
// window.addEventListener("scroll", scrollHeaderbg);

let blackLogo = "../assets/img/logosph.png";
let whiteLogo = "../assets/img/logosph.png";

$(window).scroll(function () {
  var value = $(this).scrollTop(); // Gunakan scrollTop() untuk mendapatkan nilai scroll
  console.log("Scroll Value: ", value); // Menambahkan log untuk melihat nilai scroll
  if (value >= 50) {
    console.log("Change to White Logo"); // Log ketika logo berubah menjadi putih
    $(".logobison").attr("src", whiteLogo);
  } else {
    console.log("Change to Black Logo"); // Log ketika logo berubah menjadi hitam
    $(".logobison").attr("src", blackLogo);
  }
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== PARALLAX ===============*/
let parallax = new Rellax(".parallax");

/*=============== GSAP ANIMATION ===============*/
gsap.from(".home__village", 1.2, { opacity: 0, y: 100, delay: 0.1 });
gsap.from(".home__pine", 1.2, { opacity: 0, y: 150, delay: 0.7 });
gsap.from(".home__mountain-2", 1.2, { opacity: 0, y: 150, delay: 0.5 });
gsap.from(".home__mountain-3", 1.2, { opacity: 0, x: -150, delay: 0.6 });
gsap.from(".home__mountain-1", 1.2, { opacity: 0, y: 250, delay: 0.6 });
gsap.from(".home__moon", 1.2, { opacity: 0, y: 200, delay: 0.8 });
gsap.from(".home__trineo", 1.2, { opacity: 0, x: -200, delay: 0.8 });
gsap.from(".home__title", 1.2, { opacity: 0, y: -60, delay: 1 });
gsap.from(".game_fadedown", 1.2, { opacity: 0, y: -60, delay: 1 });
gsap.from(".game_fadeup", 1.2, { opacity: 0, y: 200, delay: 0.8 });
gsap.from(".game_canvas", 1.2, { opacity: 0, y: 100, delay: 0.1 });
gsap.from(".game_canvas2", 1.2, { opacity: 0, y: 100, delay: 0.3 });
gsap.from(".game_canvas3", 1.2, { opacity: 0, y: 100, delay: 0.8 });
gsap.from(".token_symbol", 1.2, { opacity: 0, x: -200, delay: 0.4 });
gsap.from(".token_lp", 1.2, { opacity: 0, x: 150, delay: 0.6 });
gsap.from(".token_tax", 1.2, { opacity: 0, y: 200, delay: 0.6 });
gsap.from(".token_supply", 1.2, { opacity: 0, y: 200, delay: 0.8 });
gsap.from(".token_section", 1.2, { opacity: 0, y: 200, delay: 0.9 });
gsap.from(".token_section2", 1.2, { opacity: 0, y: 200, delay: 0.4 });
gsap.from(".aboutlate1", 1.2, { opacity: 0, y: 180, delay: 0.4 });
gsap.from(".aboutlate2", 1.2, { opacity: 0, y: 200, delay: 0.6 });
gsap.from(".aboutlate3", 1.2, { opacity: 0, y: 220, delay: 0.8 });

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.about__data, .celebrate__img`, { origin: "right" });
sr.reveal(`.about__img, .celebrate__data`, { origin: "left" });
sr.reveal(`.send__card`, { interval: 100 });
sr.reveal(`.tokenomics`, { interval: 100 });
sr.reveal(`.partnership`, { interval: 100 });
sr.reveal(`.roadmap`, { interval: 100 });
sr.reveal(`.aboutsection`, { interval: 100 });
sr.reveal(`.footer`);

/*=============== SMOOTH SCROLL ===============*/
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

/*=============== COPY TO CLIPBOARD ===============*/
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(
    function () {
      showCopyMessage();
    },
    function (err) {
      showCopyMessage("Failed to copy text", true);
    }
  );
}

/*=============== SHOW COPY MESSAGE ===============*/
function showCopyMessage(message = "Copied to clipboard", isError = false) {
  const copyMessage = document.getElementById("copyMessage");
  copyMessage.textContent = message;
  copyMessage.style.backgroundColor = isError ? "#FFD3B6" : "#FFD3B6";
  copyMessage.style.opacity = 1;
  setTimeout(function () {
    copyMessage.style.opacity = 0;
  }, 2000);
}

let allImages = document.querySelectorAll("img");
allImages.forEach((value) => {
  value.oncontextmenu = (e) => {
    e.preventDefault();
  };
});

document.addEventListener("scroll", function () {
  const scrollUpButton = document.getElementById("scroll-up");

  // Show the button when the user scrolls down 100px
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollUpButton.style.display = "block";
  } else {
    scrollUpButton.style.display = "none";
  }
});

document.getElementById("scroll-up").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent default anchor behavior
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll to top
  });
});
