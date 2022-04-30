document.getElementById("menu-toggler").addEventListener("click", function(e) {
    e.stopPropagation()
    let navLinks = document.getElementById("navbar-section-links");
    if(navLinks.classList.contains("d-none"))
    {
        navLinks.classList.remove("d-none");
        setTimeout(function () {
            navLinks.classList.remove("opacity-0");
        }, 20);
    }
    else
    {
        navLinks.classList.add("opacity-0");
        navLinks.addEventListener('transitionend', function(e) {
            navLinks.classList.add("d-none");
        },
        {
            once: true,
        });
    }
});