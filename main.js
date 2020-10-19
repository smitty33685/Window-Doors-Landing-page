// Google maps
function initMap() {
  const loc = { lat: 40.8136, lng: -96.70261 };
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 6,
    center: loc,
  });
  const market = new google.maps.Marker({ position: loc, map: map });
}

// Hamburger menu
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // Animate LInks
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    //Burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

// smooth scrolling
$(".nav-links a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

//sticky menu
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector(".navbar").style.background = "#000";
  } else {
    document.querySelector(".navbar").style.background = "transparent";
  }
});
