const wheels = document.querySelectorAll('.star');

setTimeout(() => {
    // On page load, assign final positions and rotations to the wheels
    wheels.forEach(wheel => {
        // Get wheel dimensions
        let wheelWidth = wheel.clientWidth;
        let wheelHeight = wheel.clientHeight;
        // Generate random values for the final position and rotation of the wheel
        let randomTop = Math.floor(Math.random() * (window.innerHeight + wheelHeight) - wheelHeight - wheel.offsetTop) + 'px';
        let randomLeft = Math.floor(Math.random() * (window.innerWidth + wheelWidth) - wheelWidth - wheel.offsetLeft) + 'px';
        let randomDegree = Math.floor(Math.random() * 360) + 'deg';
        // Update the transform of the wheel to the final position and rotation
        wheel.style.transform = `translate(${randomLeft}, ${randomTop}) rotate(${randomDegree})`;
    });
}, 100);

// Set an interval to update the positions every 30 seconds
setInterval(() => {
    wheels.forEach(wheel => {
        // Get wheel dimensions
        let wheelWidth = wheel.clientWidth;
        let wheelHeight = wheel.clientHeight;
        // Generate new random values for the final position and rotation of the wheel
        let randomTop = Math.floor(Math.random() * (window.innerHeight + wheelHeight) - wheelHeight - wheel.offsetTop) +'px';
let randomLeft = Math.floor(Math.random() * (window.innerWidth + wheelWidth) - wheelWidth - wheel.offsetLeft) + 'px';
let randomDegree = Math.floor(Math.random() * 360) + 'deg';
// Update the transform of the wheel to the new final position and rotation
wheel.style.transform = `translate(${randomLeft}, ${randomTop}) rotate(${randomDegree})`;
});
}, 30000);


