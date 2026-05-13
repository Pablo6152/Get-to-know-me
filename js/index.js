import {loadTheme} from "./theme.js"
import {appContainer} from "./containers.js"
import {startContent} from "./pages/start.js"



// In your main.js or inline in HTML
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registered successfully:', registration.scope);
      })
      .catch(error => {
        console.log('ServiceWorker registration failed:', error);
      });
  });
}



const currentPage = {
    aInternal: 0,
    aListener: function(val) {},
    set a(val) {
      this.aInternal = val;
      this.aListener(val);
    },
    get a() {
      return this.aInternal;
    },
    registerListener: function(listener) {
      this.aListener = listener;
    }
}

// Show current page on load
if (localStorage.getItem("currentPage") !== null) {
    currentPage.a = localStorage.getItem("currentPage")
}

currentPage.registerListener(function(val) {
    renderApp()
    localStorage.setItem("currentPage", JSON.stringify(val))
})

function renderApp() {
  
  if (currentPage.a == 0){
    appContainer.innerHTML = startContent
  }
}



loadTheme()
renderApp()


