document.addEventListener("DOMContentLoaded", function() {
    const flexContainer = document.getElementById('flex-container');
    const numItems = 16 * 16; // Total number of items for a 16x16 grid

    // Create the grid items
    for (let i = 0; i < numItems; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        flexContainer.appendChild(gridItem);
    }
});