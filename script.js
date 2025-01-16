document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default behavior

        // Scroll to the target section with smooth behavior
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'  // This will make the scroll smooth
        });
    });
});
