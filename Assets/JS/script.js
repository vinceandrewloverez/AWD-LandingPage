    const projectsPerPage = 4;
    let currentPage = 1;
    const projects = document.querySelectorAll('.activity');

    function showPage(page) {
        const startIndex = (page - 1) * projectsPerPage;
        const endIndex = startIndex + projectsPerPage;

        projects.forEach((project, index) => {
            if (index >= startIndex && index < endIndex) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });

        document.getElementById('prevBtn').disabled = page === 1;
        document.getElementById('nextBtn').disabled = endIndex >= projects.length;
    }

    document.getElementById('prevBtn').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        const totalPages = Math.ceil(projects.length / projectsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });

    showPage(currentPage);
