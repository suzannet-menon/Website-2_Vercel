const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.getElementById("themeToggle");

menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

themeToggle.addEventListener("click", () => {
document.body.classList.toggle("light");

if(document.body.classList.contains("light")){
themeToggle.textContent = "Dark";
}else{
themeToggle.textContent = "Light";
}
});