import {loadTheme} from "./theme.js"
import {appContainer} from "./containers.js"
import {app} from "./pages/app.js"


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



function loadApp() {
    console.log("Loading app...")
    appContainer.innerHTML = app
    

}



loadTheme()
loadApp()