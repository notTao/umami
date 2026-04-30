// Preloader - Umami
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const body = document.body;
    const loaderText = document.getElementById('loader-text');

    loaderText.innerText = "¡Listo!";

    setTimeout(() => {
        preloader.style.opacity = '0';
        
        setTimeout(() => {
            preloader.style.display = 'none';
            body.classList.remove('loading');
        }, 600);
    }, 500); 
});

setTimeout(() => {
    if (document.body.classList.contains('loading')) {
        document.body.classList.remove('loading');
        document.getElementById('preloader').style.display = 'none';
    }
}, 10000);
