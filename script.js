// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", function () {
    // Custom cursor
    const cursor = document.querySelector(".cursor");
    const cursorFollower = document.querySelector(".cursor-follower");

    document.addEventListener("mousemove", function (e) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

        // Delay follower effect
        setTimeout(function () {
            cursorFollower.style.left = e.clientX + "px";
            cursorFollower.style.top = e.clientY + "px";
        }, 100);
    });

    // Links and buttons hover effect
    const links = document.querySelectorAll("a, button");

    links.forEach((link) => {
        link.addEventListener("mouseenter", () => {
            cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
            cursorFollower.style.width = "0px";
            cursorFollower.style.height = "0px";
        });

        link.addEventListener("mouseleave", () => {
            cursor.style.transform = "translate(-50%, -50%) scale(1)";
            cursorFollower.style.width = "40px";
            cursorFollower.style.height = "40px";
        });
    });

    // Sticky header
    const header = document.querySelector("header");
    const scrollY = 100;

    window.addEventListener("scroll", function () {
        if (window.scrollY > scrollY) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    // Mobile navigation
    const navToggle = document.querySelector(".mobile-nav-toggle");
    const navbar = document.querySelector(".navbar");

    navToggle.addEventListener("click", function () {
        navbar.classList.toggle("active");

        if (navbar.classList.contains("active")) {
            navToggle.innerHTML = '<i class="ri-close-line"></i>';
        } else {
            navToggle.innerHTML = '<i class="ri-menu-line"></i>';
        }
    });

    // Close mobile menu when clicking a nav link
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
            navToggle.innerHTML = '<i class="ri-menu-line"></i>';
        });
    });

    // Active nav link on scroll
    window.addEventListener("scroll", () => {
        let current = "";
        const sections = document.querySelectorAll("section");

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 100) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
});
