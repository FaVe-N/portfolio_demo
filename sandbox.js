// function buttonClick() {
//         // alert('Wow');
//         let elements = document.body;
//         elements.classList.toggle('light')
//     }




const themeToggle = document.getElementById("theme-toggle");
const themeStylesheet = document.getElementById("theme-stylesheet");

themeToggle.addEventListener("click", () => {
    if (themeStylesheet.getAttribute("href") === "style.css") {
        themeStylesheet.setAttribute("href", "light-mode.css");
    } else {
        themeStylesheet.setAttribute("href", "style.css");
    }
});


