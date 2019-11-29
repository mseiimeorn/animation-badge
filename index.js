const netcentric = document.querySelector('.netcentric');

const stopAnimation = (event) => {
    console.log(event.target);
    event.target.classList.remove('animated');
}

const startAnimation = (event) => {
    console.log(event.target);
    event.target.classList.add('animated');
}

(function () {
    netcentric.addEventListener('mouseover', stopAnimation);
    netcentric.addEventListener('mousemove', stopAnimation);
    netcentric.addEventListener('mouseleave', startAnimation);
})();

