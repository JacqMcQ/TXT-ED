const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    butInstall.style.display = "block";
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
     if (!deferredPrompt) {
    return;
  }
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond
  const { outcome } = await deferredPrompt.userChoice;
  console.log(`User response to install prompt: ${outcome}`);
  deferredPrompt = null;
  // Hide the install button after installation
  butInstall.style.display = 'none';
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
      console.log("PWA installed successfully!", event);
});
