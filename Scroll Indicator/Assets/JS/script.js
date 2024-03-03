const scrollIndicator = document.getElementById('scrollIndicator');

const totalScrollHeight = document.body.scrollHeight - window.innerHeight;

function updateScrollIndicator() {
    const newScrollHeight = (window.scrollY / totalScrollHeight) * 100;
    scrollIndicator.style.width = `${newScrollHeight}%`;
}

window.addEventListener('scroll', updateScrollIndicator);

// Set initial scroll indicator state
updateScrollIndicator();
