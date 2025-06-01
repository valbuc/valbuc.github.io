function renderEducation() {
    const educationContainer = document.querySelector('#education-container');
    if (!educationContainer) return;

    educationData.forEach(edu => {
        const eduElement = document.createElement('div');
        eduElement.className = 'eduexp-card';
        eduElement.innerHTML = `
            <div>
                ${edu.period}<br>
                <strong>${edu.programmeLink ? 
                    `<a href="${edu.programmeLink}" target="_blank" class="company-link">${edu.title}</a>` : 
                    edu.title} @ ${edu.institution}</strong><br>
                ${edu.description}
                ${edu.gpa ? `<br>${edu.gpa}` : ''}
            </div>
        `;
        educationContainer.appendChild(eduElement);
    });
}

function renderExperience() {
    const experienceContainer = document.querySelector('#experience-container');
    if (!experienceContainer) return;

    experienceData.forEach(exp => {
        const expElement = document.createElement('div');
        expElement.className = 'eduexp-card';
        expElement.innerHTML = `
            <div>
                ${exp.period}<br>
                <strong>${exp.title} @ <a href="${exp.companyLink}" target="_blank" class="company-link">${exp.company}</a></strong><br>
                ${exp.description}
            </div>
        `;
        experienceContainer.appendChild(expElement);
    });
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderEducation();
    renderExperience();
}); 