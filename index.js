

//CD icon

var img = document.getElementById("image");
document.addEventListener("keydown", function (event) {
    if (!img)
        return;
  if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
  event.preventDefault();
    }
    var left = parseInt(img.style.left || "0");
    var top = parseInt(img.style.top || "0");
    if (event.key === "ArrowLeft") {
        img.style.left = "".concat(left - 10, "px");
    }
    if (event.key === "ArrowRight") {
        img.style.left = "".concat(left + 10, "px");
    }
    if (event.key === "ArrowUp") {
        img.style.top = "".concat(top - 10, "px");
    }
    if (event.key === "ArrowDown") {
        img.style.top = "".concat(top + 10, "px");
    }
}); 


//Weather station from this website (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)

const API_KEY ="a10c63adbe072abaec763bdb77ddbe55"; 
const city = "Reykjavik";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    console.log(data); 
    const temp = data.main.temp;       
    const desc = data.weather[0].description; 

    document.getElementById("weather").textContent =
      `${city}: ${temp}°C, ${desc}  ⛅, `;
  })
document.querySelector("#myDiv").innerHTML += `<h1> 90s Slider</h1>`;
//Slider

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

document.getElementById("prev").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

document.getElementById("next").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

showSlide(currentSlide);

//Map from Google and API KEY
function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:10,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var marker = new google.maps.Marker({
    position: { lat: 51.508742, lng: -0.120850 }, // same as center
    map: map,
    title: "Hello London!"
  });
}
//Dolphin cursor
  const follower = document.getElementById('follower');
  document.addEventListener('mousemove', e => {
    follower.style.left = e.pageX + 'px';
    follower.style.top = e.pageY + 'px';
  });
//Moving music box
const music = document.getElementById("music"); 
 music.animate(
  [
    { transform: 'translateX(-20px)' },
    { transform: 'translatex(1600px)' },
  ],
  {
    duration: 10000, 
    iterations: Infinity, // loop forever
    direction: "alternate" // go back and forth
  }
);