const mobile_navbar = document.getElementById("mobile_navbar");
const ham_burger = document.getElementById("ham_burger");
const cross = document.getElementById("cross");

ham_burger.addEventListener("click",() => {
     mobile_navbar.classList.add("active");
})

cross.addEventListener("click",() => {
     mobile_navbar.classList.remove("active");
})