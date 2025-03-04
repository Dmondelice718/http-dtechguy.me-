document.addEventListener("DOMContentLoaded", function () {
    console.log("Danny's Portfolio Loaded Successfully!");
    
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});
