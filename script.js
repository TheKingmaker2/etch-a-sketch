document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.getElementById('grid-container');
    const newGridButton = document.getElementById('button');

    function createGrid(size) {
        // Clear any existing grid
        gridContainer.innerHTML = '';

        // Update CSS variable for grid size
        gridContainer.style.setProperty('--grid-size', size);

        // Create the grid items
        for (let i = 0; i < size * size; i++) {
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
    }

    newGridButton.addEventListener('click', function() {
        let size = prompt("Enter the number of squares per side for the new grid (maximum 100):");
        size = parseInt(size);

        if (isNaN(size) || size < 1 || size > 100) {
            alert("Please enter a valid number between 1 and 100.");
        } else {
            createGrid(size);
        }
    });

    // Create initial grid
    createGrid(16);
});
