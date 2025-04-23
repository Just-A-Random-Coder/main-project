/*
Om Kanabar 2025
This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
(CC BY-NC-SA 4.0).

You are free to:
- Share: copy and redistribute the material in any medium or format
- Adapt: remix, transform, and build upon the material

Under the following terms:
- Attribution: You must give appropriate credit to me, Om Kanabar, provide a link to the license, and indicate if changes were made.
- NonCommercial: You may not use the material for commercial purposes.
- ShareAlike: If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.

License details: https://creativecommons.org/licenses/by-nc-sa/4.0/
*/

addEventListener("DOMContentLoaded", (event) => {
    createGrid()
});


function createGrid(){
    const mainDiv = document.getElementById("mainDiv"); // Get the element by ID
    mainDiv.classList.add("containergrid");

    const totalBoxes = 1000; // 10x10 grid
    for (let i = 0; i < totalBoxes-310; i++) {
        const box = document.createElement("div");
        box.classList.add("gridbox");
        mainDiv.appendChild(box);
    }

    document.querySelectorAll('.gridbox').forEach((box, index, boxes) => {
        box.addEventListener('mouseenter', () => {
            // Get the row and column based on index (assuming 50 columns)
            const row = Math.floor(index / 50);  // 50 columns
            const col = index % 50;  // Column number
    
            // Highlight the current box
            box.style.backgroundColor = 'lightblue';
    
            // Get the adjacent boxes: top, bottom, left, right
            const right = boxes[index + 1];
            const left = boxes[index - 1];
            const top = boxes[index - 50];  // Adjust for row width (50 columns)
            const bottom = boxes[index + 50];
    
            // Apply a lighter color to adjacent boxes
            if (right && col < 49) right.style.backgroundColor = 'rgba(173, 216, 230, 0.475)';
            if (left && col > 0) left.style.backgroundColor = 'rgba(173, 216, 230, 0.475)';
            if (top && row > 0) top.style.backgroundColor = 'rgba(173, 216, 230, 0.475)';
            if (bottom && row < 49) bottom.style.backgroundColor = 'rgba(173, 216, 230, 0.475)';
        });
    
        box.addEventListener('mouseleave', () => {
            // Reset the hover effect
            box.style.backgroundColor = '';
    
            // Reset adjacent boxes
            const row = Math.floor(index / 50);
            const col = index % 50;
            const right = boxes[index + 1];
            const left = boxes[index - 1];
            const top = boxes[index - 50];
            const bottom = boxes[index + 50];
    
            if (right && col < 49) right.style.backgroundColor = '';
            if (left && col > 0) left.style.backgroundColor = '';
            if (top && row > 0) top.style.backgroundColor = '';
            if (bottom && row < 49) bottom.style.backgroundColor = '';
        });
    });
}
