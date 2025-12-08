(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })

    // Handle hash navigation on page load
    function handleHashNavigation() {
        const hash = window.location.hash.substring(1); // Remove the '#'
        if (hash) {
            // Remove active class from current section and button
            const activeSection = document.querySelector(".container.active");
            const activeButton = document.querySelector(".control.active-btn");
            
            if (activeSection) activeSection.classList.remove("active");
            if (activeButton) activeButton.classList.remove("active-btn");
            
            // Add active class to target section and button
            const targetSection = document.getElementById(hash);
            const targetButton = document.querySelector(`.control[data-id="${hash}"]`);
            
            if (targetSection) targetSection.classList.add("active");
            if (targetButton) targetButton.classList.add("active-btn");
        }
    }

    // Run on page load
    handleHashNavigation();

    // Run when hash changes
    window.addEventListener("hashchange", handleHashNavigation);
})();
