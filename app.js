document.querySelectorAll('.accordion-title').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        const content = parent.querySelector('.accordion-content');

        // Toggle the active class on the parent
        parent.classList.toggle('active');

        // Close other open items (optional, for single open item at a time)
        document.querySelectorAll('.accordion-item').forEach(otherItem => {
            if (otherItem !== parent && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
    });
});