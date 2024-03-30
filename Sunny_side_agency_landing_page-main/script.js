console.log("hello");

function mobileMenu() {
  if (document.querySelector(".mainMenu").style.display == "none") {
    document.querySelector(".mainMenu").style.display = "block";
    console.log("please select the menu items to display");
  } else {
    document.querySelector(".mainMenu").style.display = "none";
    console.log("hhhgrs");
  }
}
const mobile = document.querySelector(".mobile");
const ham = document.querySelector(".ham");
ham.addEventListener("click", mobileMenu);
