class Stardust {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: 0, y: 0 };
        this.prevMouse = { x: 0, y: 0 };
        this.mouseHistory = []; // Store mouse position history
        this.isMoving = false;
        this.movementTimeout = null;

        this.init();
    }

    init() {
        // Set canvas properties
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '9999';
        document.body.appendChild(this.canvas);

        // Set canvas size
        this.resize();
        window.addEventListener('resize', () => this.resize());

        // Mouse events
        document.addEventListener('mousemove', (e) => {
            // Clear any existing timeout
            if (this.movementTimeout) {
                clearTimeout(this.movementTimeout);
            }

            // Update positions
            this.prevMouse.x = this.mouse.x;
            this.prevMouse.y = this.mouse.y;
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;

            // Add current position to history
            this.mouseHistory.push({ x: this.mouse.x, y: this.mouse.y });
            // Keep only last 5 positions
            if (this.mouseHistory.length > 5) {
                this.mouseHistory.shift();
            }

            // Check if mouse has actually moved
            const hasMoved = Math.abs(this.mouse.x - this.prevMouse.x) > 0 || 
                           Math.abs(this.mouse.y - this.prevMouse.y) > 0;

            if (hasMoved) {
                this.isMoving = true;
                // Create multiple particles for a more visible effect
                for (let i = 0; i < 3; i++) {
                    this.createParticle();
                }
            }

            // Set a timeout to mark movement as stopped
            this.movementTimeout = setTimeout(() => {
                this.isMoving = false;
                this.particles = [];
                this.mouseHistory = []; // Clear history when movement stops
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            }, 50); // 50ms threshold for movement
        });

        document.addEventListener('mouseleave', () => {
            this.isMoving = false;
            this.particles = [];
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            if (this.movementTimeout) {
                clearTimeout(this.movementTimeout);
            }
        });

        // Start animation
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticle() {
        // Use an older position from history if available
        const historyPos = this.mouseHistory[0] || this.prevMouse;
        const particle = {
            x: historyPos.x,
            y: historyPos.y + 20,
            size: Math.random() * 4, // Increased size range
            speedX: (Math.random() - 0.5) * 4, // Increased speed range
            speedY: (Math.random() - 0.5) * 4, // Increased speed range
            life: 0.25, // Increased initial life
            color: `hsl(${Math.random() * 360}, 100%, 50%)` // Full rainbow spectrum
        };
        this.particles.push(particle);
    }

    updateParticles() {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            if (this.isMoving) {
                p.x += p.speedX;
                p.y += p.speedY;
            }
            p.life -= 0.005; // Keep the quick fade out

            if (p.life <= 0) {
                this.particles.splice(i, 1);
            }
        }
    }

    drawParticles() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(p => {
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = p.life;
            this.ctx.fill();
        });
    }

    animate() {
        this.updateParticles();
        this.drawParticles();
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize stardust effect when the page loads
window.addEventListener('load', () => {
    new Stardust();
}); 