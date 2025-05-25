function setupEmailLinks() {
    // Split email into parts to make it harder to scrape
    const parts = ['vlbuchner', '@', 'gmail.com'];
    const email = parts.join('');
    
    // Update all email links
    const emailLinks = document.querySelectorAll('[data-email-link]');
    emailLinks.forEach(link => {
        link.href = `mailto:${email}?subject=Lets%20get%20in%20touch!`;
    });
}

// Run when the document is ready
document.addEventListener('DOMContentLoaded', setupEmailLinks); 