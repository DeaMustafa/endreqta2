
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const customCursor = document.querySelector('.custom-cursor');
    const cursorRing = document.createElement('div');
    cursorRing.classList.add('cursor-ring');
    document.body.appendChild(cursorRing);

    // Toggle mobile menu
    hamburgerMenu.addEventListener('click', function () {
        hamburgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Custom cursor
    document.addEventListener('mousemove', function (e) {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
        cursorRing.style.left = `${e.clientX}px`;
        cursorRing.style.top = `${e.clientY}px`;
    });

    // Change cursor color on hover
    navMenu.addEventListener('mouseover', function () {
        customCursor.style.backgroundColor = '#fff';
        cursorRing.style.borderColor = '#fff';
    });

    navMenu.addEventListener('mouseout', function () {
        customCursor.style.backgroundColor = 'var(--main-color)';
        cursorRing.style.borderColor = 'var(--main-color)';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.nav-menu a');
    links.forEach((link) => {
        const letters = link.textContent.trim().split('');
        let delay = 0;
        link.innerHTML = ''; // Clear existing content
        letters.forEach((letter) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.animationDelay = `${delay}s`; // Set animation delay for each letter
            delay += 0.1; // Increment delay for next letter
            link.appendChild(span);
        });
    });
});


/*Featured Section START*/
$(document).ready(function() {
    $('.featured-carousel').owlCarousel({
        // Owl Carousel options
        loop: true, // Enable loop to make the carousel infinite
        nav: true, // Enable navigation arrows
        navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"], // Customize navigation arrow icons
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:6
            }
        }
    });
});


/*Featured Section END*/




/*Dropdown menu */


const app = new PIXI.Application({ width: 800, height: 600 });
document.getElementById('pixi-container').appendChild(app.view);

const texture = PIXI.Texture.from('images/image 3.jpg');
const sprite = new PIXI.Sprite(texture);

sprite.anchor.set(0.5);
sprite.x = app.screen.width / 2;
sprite.y = app.screen.height / 2;

app.stage.addChild(sprite);

app.ticker.add((delta) => {
  sprite.rotation += 0.1 * delta;
});



