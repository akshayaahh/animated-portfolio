document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll(".project-card");

    projects.forEach(project => {
        project.addEventListener("mouseover", () => {
            project.style.transform = "scale(1.05)";
            project.style.transition = "0.3s ease";
        });

        project.addEventListener("mouseout", () => {
            project.style.transform = "scale(1)";
        });
    });
});
