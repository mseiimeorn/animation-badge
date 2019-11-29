var netcentric = document.querySelector('.NC');
var letters = document.querySelectorAll('.letter');

function stopAnimation() {
    netcentric && netcentric.querySelector('path') && netcentric.querySelector('path').classList.remove('animated');
    Array.from(letters).forEach(function(letter) {
        letter.classList.remove('letter-animation');;
    });
}

function startAnimation() {
    netcentric && netcentric.querySelector('path') && netcentric.querySelector('path').classList.add('animated');
    Array.from(letters).forEach(function(letter) {
        letter.classList.add('letter-animation');;
    });
}

(function () {
    Array.from(letters).forEach(function(letter) {
        letter.classList.add('letter-animation');
    });
    netcentric.addEventListener('mouseover', stopAnimation);
    netcentric.addEventListener('mousemove', stopAnimation);
    netcentric.addEventListener('mouseleave', startAnimation);
})();

