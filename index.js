const netcentric = document.querySelector('.NC');

var stopAnimation= function () {
    netcentric && netcentric.querySelector('path') && netcentric.querySelector('path').classList.remove('animated');
}

var startAnimation = function () {
    netcentric && netcentric.querySelector('path') && netcentric.querySelector('path').classList.add('animated');
}

(function () {
    netcentric.addEventListener('mouseover', stopAnimation);
    netcentric.addEventListener('mousemove', stopAnimation);
    netcentric.addEventListener('mouseleave', startAnimation);
})();

