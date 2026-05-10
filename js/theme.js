let darkmode = localStorage.getItem("darkmode")
let userMode = window.matchMedia("(prefers-color-scheme: dark)").matches
let autoThemePreference = 0
const themeBtn = document.getElementById("theme-btn")
const mainTitleText = document.getElementById("main-title-text")

console.log(userMode)
// When page loads
function loadTheme(){
    
    if (autoThemePreference === 1){
        autoTheme()
    } else {

    darkmode = localStorage.getItem("darkmode")
    setTheme(JSON.parse(darkmode))
}
}

function autoTheme(){

    if (userMode == true){
        localStorage.setItem("darkmode", "1")
    } else if (userMode === false){
        localStorage.setItem("darkmode", "0")
    }
}

// Dark mode
function setTheme(theme) {
    let root = document.documentElement;
    if (theme === 0) {

        root.style.setProperty('--primary-color', 'rgb(255, 255, 255)');
        root.style.setProperty('--secondary-color', 'rgb(228, 227, 227)');
        root.style.setProperty('--text-color', '#000');
        root.style.setProperty('--darkmode-toggle', 'rgb(255, 166, 0)');
        root.style.setProperty('--accent-color', '#4E9F3D'); 
        root.style.setProperty('--secondary-accent-color', '#03A9F4');
        
        localStorage.setItem("darkmode", "0")
        themeBtn.removeAttribute("checked")   
        themeBtn.setAttribute("unchecked", "0")
        
    } else if (theme === 1) {

        root.style.setProperty('--primary-color', 'rgba(37, 37, 37, 0.934)');
        root.style.setProperty('--secondary-color', '#000000');
        root.style.setProperty('--text-color', '#fff');
        root.style.setProperty('--darkmode-toggle', '#fff');
        root.style.setProperty('--primary-accent-color', '#5fc44b'); 
        root.style.setProperty('--secondary-accent-color', '#303F9F'); 
        
        localStorage.setItem("darkmode", "1")
        themeBtn.removeAttribute("unchecked")   
        themeBtn.setAttribute("checked", "1")
    }
}
themeBtn.addEventListener("click", function(){
    darkmode = localStorage.getItem("darkmode")
    if (JSON.parse(darkmode) !== 1){
        setTheme(1)
        // mainTitleText.textContent = `Apagaste las luces! 🌙`
    } else if (JSON.parse(darkmode) !== 0){
        setTheme(0)
        // mainTitleText.textContent = `Encendiste las luces! ✨`
    }
})


export {loadTheme}