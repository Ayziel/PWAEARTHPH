
document.getElementById('submit-button').addEventListener('click', () => {

    alert('Survey submitted. Thank you!');
    // Redirect to the next page
    window.location.href = 'https://earthph.jdinfotech.net/OrderForm/Order-Info.html'; 
});

const link = document.createElement("link");
link.rel = "manifest";
link.href = "/System/manifest.json";
document.head.appendChild(link);

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/System/service-worker.js")
        .then(() => console.log("Service Worker registered"))
        .catch((error) => console.log("Service Worker registration failed:", error));
}

// Listen for the "beforeinstallprompt" event
window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    const installPrompt = event;
    //document.getElementById("install-btn").style.display = "block";

    // document.getElementById("install-btn").addEventListener("click", () => {
    //     installPrompt.prompt();
    //     installPrompt.userChoice.then((choiceResult) => {
    //         if (choiceResult.outcome === "accepted") {
    //             console.log("User accepted the install prompt");
    //         } else {
    //             console.log("User dismissed the install prompt");
    //         }
    //     });
    // });
}); 
