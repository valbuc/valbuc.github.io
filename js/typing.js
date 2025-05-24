document.addEventListener('DOMContentLoaded', function() {
    const text = "Hi, I'm Valentin Buchner";
    const nameElement = document.querySelector('.text-color-brand');
    let i = 0;
    let cursorVisible = true;
    
    // Create a fixed-width container
    nameElement.style.width = '400px';
    nameElement.style.display = 'inline-block';
    
    function typeWriter() {
        if (i < text.length) {
            nameElement.textContent = text.substring(0, i + 1) + '|';
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Start blinking cursor after typing is complete
            setInterval(() => {
                cursorVisible = !cursorVisible;
                nameElement.textContent = text + (cursorVisible ? '|' : ' ');
            }, 500);
        }
    }
    
    typeWriter();
}); 