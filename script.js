var _a;
// listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var exprienceElement = document.getElementById('experience');
    var skillElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && exprienceElement && skillElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var exprience = exprienceElement.value;
        var skills = skillElement.value;
    }
    // creat resume output
    var resumeOutput = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> $(name)</p>\n        <p><strong>Email:</strong> $(email)</p>\n        <p><strong>Phone:</strong> $(phone)</p>\n\n\n        <h3>Education</h3>\n        <p>".concat("education", "</p>      \n      \n        <h3>Experience</h3>\n        <p>").concat("exprience", "</p>\n\n        <h3>Skills</h3>\n        <p>").concat("skills", "</p>\n\n    ");
    var resumeOutputElement = document.getElementById('resumeoutput');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    }
    else {
        console.error('The resume output element are missing');
    }
});
