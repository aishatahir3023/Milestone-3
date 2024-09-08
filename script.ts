// listing element
document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    // type assertion

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const exprienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillElement = document.getElementById('skills') as HTMLInputElement;

  

    if (nameElement && emailElement && phoneElement && educationElement && exprienceElement && skillElement){

        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const exprience = exprienceElement.value;
        const skills = skillElement.value;
    }

    // creat resume output

    const resumeOutput = `
        <h2>Resume</h2>
        <p><strong>Name:</strong> $(name)</p>
        <p><strong>Email:</strong> $(email)</p>
        <p><strong>Phone:</strong> $(phone)</p>


        <h3>Education</h3>
        <p>${"education"}</p>      
      
        <h3>Experience</h3>
        <p>${"exprience"}</p>

        <h3>Skills</h3>
        <p>${"skills"}</p>

    `;

    const resumeOutputElement = document.getElementById('resumeoutput')
    if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput;
    } else {
        console.error('The resume output element are missing');
    }

})

