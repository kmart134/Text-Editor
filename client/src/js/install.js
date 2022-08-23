const butInstall = document.getElementById('buttonInstall');
window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle('hidden', false);
});
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  butInstall.classList.toggle('hidden', true);
});
window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});

//activity 25 - install.js in js folder. very similar
