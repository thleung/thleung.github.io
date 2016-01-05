var bio = {
	"name": "Thomas Leung", 
	"role": "Web Developer", 
	"contacts": {
		"email": "thomassleung@gmail.com",
		"location": "boston, MA, US",
		"github": "https://github.com/thleung",
		"mobile": "408-506-5938"
	},
	"welcomeMessage": "I am an experienced software engineer looking to transition from software programming to front end web developer.  I am a skilled problem solver, quick learner and analytical thinker, looking to apply these skills as a web developer.",
	"skills": ["HTML", "CSS", "Javascript", "Perl", "Python", "C"],
	"bioPic": "images/fry.jpg"
}

var work = {
	"jobs": [
		{
			"employer": "Sun Microsystems / Oracle",
			"title": "Software Engineer",
			"location": "Burlington, MA",
			"dates": "2006-2012",
			"description": "Maintained and enhanced hardware and design group payroll web based software, resulting in improved response time for workers and managers. \
			Software was HTML/CGI interface accessing Oracle SQL database through PERL script developed in UNIX environment. \
			Developed PERL and shell scripts to enhance daily SQL server data usage to ensure quality of database through loading of data and to scrub inconsistencies resulting in better user experience."
		},
		{
			"employer": "Brocade Communications Systems",			
			"title": "Software Developer",
			"location": "San Jose, CA",
			"dates": "2001-2003",
			"description": "Responsible for maintaining all of ASIC engineering work environment, work environment include production UNIX and Linux servers, software tools and licenses, ASIC network, and internal ASIC website. \
			Developed PERL and shell scripts to analyze tool licenses and server usage to maximize company resources, reducing redundant license costs by 15%.  \
			Tested and incorporated into UNIX production environment Linux servers, improving speed of production environment by 100%."
		},
		{
			"employer": "Cisco Systems",
			"title": "Intern",
			"location": "San Jose, CA",
			"dates": "summer 2000",
			"description": "Responsible for developing PERL script that converted PCB schematic symbols and designs from Cadence Concept HDL to View Logic and vice versa.  \
			With no prior knowledge to PERL, was able to learn and develop PERL scripts to save PCB layout time from having to recreate database of schematics."
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Online Resume",
			"dates": "2015",
			"description": "Interactive resume",
			"images": ["images/project_01.jpg", "images/project_01.jpg"]
		}
	]
}

var education = {
	"schools": [
		{
			"name": "UCLA",
			"location": "Los Angeles, CA",
			"degree": "Bachelor of Science",
			"dates": "1996-2001",
			"majors": ["Compsci"],
			"url": "www.ucla.edu"
		}
	],

	"onlineCourses": [
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": "2015 - Future",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"title": "Programming Foundations with Python",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/programming-foundations-with-python--ud036"
		}
	]
}

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedSchool + formattedDegree);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajor);
	}

	$("#education").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedTitle + formattedSchool);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedUrl);
	}
}

// Append bio information
bio.display = function() {
	//bio.role.bold();
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedLocation);

	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedPic);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (var skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedWorkLocation);

		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedWorkDates);

		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}
function inName() {
    //var name = window.name;
    var name = $("#name").html();
	name = name.trim().split(" ");
	console.log(name);
	name[1]=name[1].toUpperCase();
	name[0]=name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	
	return name[0] +" "+ name[1];
	
}

var name = $("#name").text();

$("#main").append(internationalizeButton);

projects.display = function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

$(document).click(function(loc) {
  // your code goes here!
  logClicks(loc.pageX, loc.pageY);
});

bio.display();
projects.display();
work.display();
education.display();

$("#mapDiv").append(googleMap);
