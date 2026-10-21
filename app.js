
console.log('Hello World!');

const name = "Linzy Butron Rangel";

let hasDownloadedResume = false;
let downloadCount = 0;

const resumeButton = document.getElementById("resumeButton");
const resumeDownloadCount = document.getElementById("resumeDownloadCount");

resumeButton.addEventListener("click", function() {
    downloadCount++;
    resumeDownloadCount.textContent = "Resume downloads: " + downloadCount;

    if (hasDownloadedResume === false) {
        alert("Your resume is downloaded successfully!");
        hasDownloadedResume = true;
    }
});

function showGreeting(name) {
    return "Hello, my name is " + name + "! Welcome to my portfolio!";
}

const greeting = document.getElementById("greeting");
greeting.textContent = showGreeting(name);

function daysUntilDeadline(submissionDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const deadline = new Date(submissionDate + "T00:00:00");
    const difference = deadline - today;

    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

    return days;
}

const remainingDays = daysUntilDeadline("2026-12-15");

console.log("Days until deadline: " + remainingDays);

const deadlineText = document.getElementById("projectDeadline");
deadlineText.textContent = "Days remaining: " + remainingDays;



const skillForm = document.getElementById("skillForm");
const skillInput = document.getElementById("skillInput");
const skillList = document.getElementById("skillList");

skillForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const newSkill = skillInput.value.trim();

    if (newSkill !== "") {
        const skillColumn = document.createElement("div");
        skillColumn.className = "col-12 col-sm-6 col-lg-4";

        const skillCard = document.createElement("div");
        skillCard.className = "card skill-card h-100 text-center shadow-sm";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const skillTitle = document.createElement("h5");
        skillTitle.className = "card-title";
        skillTitle.textContent = newSkill;

        cardBody.appendChild(skillTitle);
        skillCard.appendChild(cardBody);
        skillColumn.appendChild(skillCard);
        skillList.appendChild(skillColumn);

        skillInput.value = "";
    }
});




const projectTitles = [
    "Studybuddy Quiz App",
    "Simple Budget Tracker",
    "Portfolio Improvements"
];

const projectDescriptions = [
    "A beginner-friendly Python project that lets students take short multiple-choice quizzes on subjects like math, science, and history. It keeps track of the score and displays the results at the end.",
    "A basic Python program where users enter their income and expenses. The program calculates how much money they have left and displays a simple spending summary.",
    "Improvements to my personal portfolio website using HTML, CSS, and JavaScript."
];

const projectImages = [
    "Studybudy.png",
    "Budget.png",
    ""
];


const projectDeadlines = [
    "2026-05-01",
    "2026-06-01",
    "2026-12-15"
];

const projectList = document.getElementById("projectList");

projectList.innerHTML = "";

const today = new Date();
today.setHours(0, 0, 0, 0);

for (let i = 0; i < projectTitles.length; i++) {
    const projectDeadline = new Date(projectDeadlines[i] + "T00:00:00");

    let projectStatus = "";


    if (projectDeadline.getTime() === today.getTime()) {
        projectStatus = "Due today.";
    } else if (projectDeadline > today) {
        projectStatus = "Ongoing.";
    } else if (projectDeadline < today) {
        projectStatus = "Completed.";
    }

    const projectColumn = document.createElement("div");
    projectColumn.className = "col-12 col-md-6";

    const projectCard = document.createElement("div");
    projectCard.className = "card project-card h-100 shadow-sm";

    if (projectImages[i] !== "") {
        const projectImage = document.createElement("img");
        projectImage.src = projectImages[i];
        projectImage.className = "card-img-top project-image";
        projectImage.alt = projectTitles[i] + " screenshot";
        projectCard.appendChild(projectImage);
    }

    const cardBody = document.createElement("div");
    cardBody.className = "card-body text-center";

    const projectTitle = document.createElement("h4");
    projectTitle.className = "card-title";
    projectTitle.textContent = projectTitles[i];

    const projectDescription = document.createElement("p");
    projectDescription.className = "card-text";
    projectDescription.textContent = projectDescriptions[i];

    const statusText = document.createElement("p");
    statusText.className = "card-text";
    statusText.textContent = "Status: " + projectStatus;

    const deadlineDisplay = document.createElement("p");
    deadlineDisplay.className = "card-text";
    deadlineDisplay.textContent = "Deadline: " + projectDeadlines[i];

    cardBody.appendChild(projectTitle);
    cardBody.appendChild(projectDescription);
    cardBody.appendChild(statusText);
    cardBody.appendChild(deadlineDisplay);

    projectCard.appendChild(cardBody);
    projectColumn.appendChild(projectCard);
    projectList.appendChild(projectColumn);
}



const educationEntries = [
    {
        startDate: "2021",
        endDate: "2025",
        school: "Canyon View High School",
        degree: "High School Diploma"
    },
    {
        startDate: "2025",
        endDate: "Present",
        school: "Northern Arizona University",
        degree: "Bachelor's Degree in Computer Science"
    }
];

const educationTableBody = document.getElementById("educationTableBody");

educationTableBody.innerHTML = "";

for (let i = 0; i < educationEntries.length; i++) {
    const row = document.createElement("tr");

    const startDateCell = document.createElement("td");
    startDateCell.textContent = educationEntries[i].startDate;

    const endDateCell = document.createElement("td");
    endDateCell.textContent = educationEntries[i].endDate;

    const schoolCell = document.createElement("td");
    schoolCell.textContent = educationEntries[i].school;

    const degreeCell = document.createElement("td");
    degreeCell.textContent = educationEntries[i].degree;

    row.appendChild(startDateCell);
    row.appendChild(endDateCell);
    row.appendChild(schoolCell);
    row.appendChild(degreeCell);

    educationTableBody.appendChild(row);
}



const experienceEntries = [
    {
        role: "Receptionist",
        company: "Farm Bureau Financial Services",
        startDate: "July 2024",
        endDate: "August 2024"
    },
    {
        role: "Sales Associate",
        company: "Home Depot",
        startDate: "June 2026",
        endDate: "Present"
    }
];

const experienceTableBody = document.getElementById("experienceTableBody");

experienceTableBody.innerHTML = "";

for (let i = 0; i < experienceEntries.length; i++) {
    const row = document.createElement("tr");

    const roleCell = document.createElement("td");
    roleCell.textContent = experienceEntries[i].role;

    const companyCell = document.createElement("td");
    companyCell.textContent = experienceEntries[i].company;

    const startDateCell = document.createElement("td");
    startDateCell.textContent = experienceEntries[i].startDate;

    const endDateCell = document.createElement("td");
    endDateCell.textContent = experienceEntries[i].endDate;

    row.appendChild(roleCell);
    row.appendChild(companyCell);
    row.appendChild(startDateCell);
    row.appendChild(endDateCell);

    experienceTableBody.appendChild(row);
}
