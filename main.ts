const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeContainer = document.getElementById('resume') as HTMLElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    const resume = `
        <h1>${name}</h1>
        <p>${email}</p>
        <h2>Education</h2>
        <p>${education}</p>
        <h2>Work Experience</h2>
        <p>${workExperience}</p>
        <h2>Skills</h2>
        <p>${skills}</p>
    `;
    
    resumeContainer.innerHTML = resume;
});