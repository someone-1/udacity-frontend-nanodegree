var bio = info.bio;
var work = info.work;
var education = info.education;
var project = info.project;


bio.displayName = function (){
	//adding name
	var HTMLheaderName = '<h1 id="name">%data%</h1>';
	var name = bio.name;
	var formattedName = HTMLheaderName.replace("%data%" , name);
	$("#name").append(formattedName);

	//adding role
	var HTMLheaderRole = '<span>%data%</span><hr>';
	var role = bio.role;
	var fromattedRole = HTMLheaderRole.replace("%data%" , role);
	$("#name").append(fromattedRole);
}


bio.displayContact = function(){
	
	//contacts and links
	var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span>'+
	'<span class="white-text">%data%</span></li>';
	var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span>'+
	'<span class="white-text">%data%</span></li>';
	var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span>'+
	'<span class="white-text">%data%</span></li>';
	var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span>'+
	'<span class="white-text">%data%</span></li>';
	var HTMLbioPic = '<img src="%data%" class="biopic">';
	var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';
	var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';


	var mobile = bio.contacts.mobile;
	var formattedMobile = HTMLmobile.replace("%data%" , mobile);
	$("#topContacts").append(formattedMobile)

	var email = bio.contacts.email;
	var formattedEmail = HTMLemail.replace("%data%" , email);
	$("#topContacts").append(formattedEmail)

	var github = bio.contacts.github;
	var formattedGithub = HTMLgithub.replace("%data%" , github);
	$("#topContacts").append(formattedGithub)

	var location = bio.contacts.location;
	var formattedLocation = HTMLlocation.replace("%data%" , location);
	$("#topContacts").append(formattedLocation)

	var bioPic = bio.bioPic;
	var formattedPic = HTMLbioPic.replace("%data%" , bioPic);
	$("#img_skills").append(formattedPic);

	var welcomeMessage = bio.welcomeMessage;
	var formattedMsg = HTMLwelcomeMsg.replace("%data%" , welcomeMessage);
	$("#img_skills").append(formattedMsg)

	var skills = bio.skills;
	var formattedSkill = "";
	for(i in skills){
		skills[i] = '<li class="flex-item"><span class="white-text">' + skills[i] + '</span></li>'
		formattedSkill = formattedSkill + skills[i];
	}
	$("#img_skills").append(formattedSkill)

}

education.display = function(){

	var HTMLschoolStart = '<div class="education-entry"></div>';
	var HTMLschoolName = '<a href="#">%data%';
	var HTMLschoolDegree = ' -- %data%</a>';
	var HTMLschoolDates = '<div class="date-text">%data%</div>';
	var HTMLschoolLocation = '<div class="location-text">%data%</div>';
	var HTMLschoolMajor = '<em><br>Major: %data%</em>';


	var schools = education.schools;
	var formattedSchools = "";
	for(i in schools){
		//console.log(schools[i]);
		formattedSchools += '<a href="#"> ' + schools[i].name + ' --  ' + schools[i].degree + ' </a>' + 
		'<div class="date-text"> ' +schools[i].dates+' </div>' + 
		'<div class="location-text"> '+schools[i].location+' </div></br>';
	}
	formattedSchools = '<div class="education-entry"> ' + formattedSchools + '</div>'
	$("#education").append(formattedSchools)
}


work.display = function(){
	var HTMLworkStart = '<div class="work-entry"></div>';
	var HTMLworkEmployer = '<a href="#">%data%';
	var HTMLworkTitle = ' - %data%</a>';
	var HTMLworkDates = '<div class="date-text">%data%</div>';
	var HTMLworkLocation = '<div class="location-text">%data%</div>';
	var HTMLworkDescription = '<p><br>%data%</p>';

	var jobs = work.jobs;
	formattedJobs = "";


	for(i in jobs){
		formattedJobs += '<a href="#">' + jobs[i].employer + ' - ' + jobs[i].title + '</a>' +
		'<div class="date-text">' + jobs[i].dates+ '</div>' + 
		'<div class="location-text">' +jobs[i].location + '</div>' + 
		'<p><br>' + jobs[i].description + '</p></br>'
	}
	formattedJobs = '<div class="work-entry">' + formattedJobs + '</div>'
	$('#workExperience').append(formattedJobs);
}

projects.display = function(){

	// var HTMLprojectStart = '<div class="project-entry"></div>';
	// var HTMLprojectTitle = '<a href="#">%data%</a>';
	// var HTMLprojectDates = '<div class="date-text">%data%</div>';
	// var HTMLprojectDescription = '<p><br>%data%</p>';
	// var HTMLprojectImage = '<img src="%data%">';

	var projects = project.projects;
	var formattedProjects = "";

	for(i in projects){
		formattedProjects += '<a href="#">' + projects[i].title + '</a>' + 
		'<div class="date-text"> ' + projects[i].dates + '</div>' + 
		'<p><br>' + projects[i].description+ '</p>'
	}
	formattedProjects = '<div class="project-entry">' +formattedProjects +  '</div>'
	$('#projects').append(formattedProjects);
}

display = function(){
	//calling the function to display the contacts
	bio.displayContact()
	//displaying name and role
	bio.displayName();

	education.display()

	projects.display();

	work.display()
}

display();

$('#mapDiv').append(googleMap);