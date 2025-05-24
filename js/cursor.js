let lastX = 0;
let lastY = 0;
let rotation = 0;

document.addEventListener('mousemove', (e) => {
    // Calculate the angle between the current and last position
    const deltaX = e.clientX - lastX;
    const deltaY = e.clientY - lastY;
    
    if (deltaX !== 0 || deltaY !== 0) {
        
        
        // Add scale transformation when moving right
        const scaleX = deltaX > 0 ? -1 : 1;
        const rotation_additional = deltaX > 0 ? 360 : 180;
        rotation = Math.atan2(deltaY, deltaX) * 180 / Math.PI + rotation_additional;
        
        // Update the cursor style with the new rotation and scale
        document.body.style.cursor = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><text y='20' font-size='24' transform='translate(12,12) rotate(${rotation}) scale(${scaleX}, 1) translate(-12,-12)'>🐝</text></svg>"), auto`;
    }
    
    // Store the current position for the next calculation
    lastX = e.clientX;
    lastY = e.clientY;
});