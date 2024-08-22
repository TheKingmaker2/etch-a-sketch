document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.getElementById('grid-container');
    const rows = 16;
    const columns = 16;

    // Create the grid items
    for (let i = 0; i < rows * columns; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridContainer.appendChild(gridItem);
    }

    const items = document.querySelectorAll('.grid-item');

    // Add hover effect
    items.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.classList.add('hovered');
            });
    });
});