import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';

const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor();

if (typeof editor === 'undefined') {
  loadSpinner();
}

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // register the generated service worker
  const workboxSW = new Workbox('./service-worker.js'); // Updated to point to the correct path
  workboxSW.register()
    .then(() => {
      console.log('Service Worker registered successfully');
    })
    .catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
} else {
  console.error('Service workers are not supported in this browser.');
}
