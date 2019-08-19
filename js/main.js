
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('../sw_cached_pages.js')
      .then(reg => console.log('Servoce Worker: Registered'))
      .catch(err => console.log(`Service Worker: Error ${err}`));
  });
}
