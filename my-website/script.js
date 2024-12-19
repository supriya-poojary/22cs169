// Navigation logic to handle page links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Check if it's an external or internal link
            if (href && !href.startsWith('#')) {
                // Allow default navigation for external links
                return;
            }

            e.preventDefault();

            // Smooth scroll for same-page anchors
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
