// Shfaq ose fsheh përmbajtjen e dropdown kur klikohet titulli
document.querySelectorAll(".dropdown").forEach(function(dropdown) {
    var title = dropdown.querySelector(".dropdown-title");
    var content = dropdown.querySelector(".dropdown-content");

    title.addEventListener("click", function(event) {
        event.stopPropagation(); // Parandalon shfaqjen e dropdown-it nëse klikohet në dropdown-title

        // Kontrollon nëse dropdown-i është i hapur
        var isOpen = content.style.display === "block";

        // Mbyll të gjitha dropdown-et përpara se të hapni këtë dropdown
        closeAllDropdowns();

        // Nëse dropdown-i nuk është i hapur, hap atë
        if (!isOpen) {
            content.style.display = "block";
            title.classList.add("open"); // Shto klasën "open" për titullin
        } else {
            content.style.display = "none";
            title.classList.remove("open"); // Hiq klasën "open" për titullin
        }
    });
});

// Mbyll të gjitha dropdown-et kur klikohet kudo tjetër në dokument
document.addEventListener("click", function(event) {
    if (!event.target.closest(".dropdown")) {
        closeAllDropdowns();
    }
});

function closeAllDropdowns() {
    document.querySelectorAll(".dropdown").forEach(function(dropdown) {
        var content = dropdown.querySelector(".dropdown-content");
        var title = dropdown.querySelector(".dropdown-title");
        content.style.display = "none";
        title.classList.remove("open"); // Hiq klasën "open" për të gjitha titujt
    });
}



//cursor 


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

