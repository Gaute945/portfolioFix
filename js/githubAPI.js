function formatDate(dateString) {
	// Create a new Date object from the given dateString
	const date = new Date(dateString);

	// Extract the individual components from the date object
	const day = date.getDate();
	const month = date.getMonth() + 1; // Adding 1 because months are zero-based
	const year = date.getFullYear();

	// Format the components into the desired format
	const formattedDate = `${day}.${month}.${year}`;

	return formattedDate;
}

async function repoData(repo, owner, num) {
	const data = await fetch(
		"https://api.github.com/repos/" + owner + "/" + repo
	);
	const json = await data.json();

	repoName = json.name;

	description = json.description;

	language = json.language;

	license = json.license.key;

	updated = json.updated_at;
	const formattedDate = formatDate(updated); // Assign the result to formattedDate

	document.getElementById("name" + num).innerText = repoName;
	document.getElementById("description" + num).innerText =
		"description; " + description;
	document.getElementById("language" + num).innerText = "language; " + language;
	document.getElementById("license" + num).innerText = "license; " + license;
	document.getElementById("updated_at" + num).innerText =
		"updated_at; " + formattedDate;
}

async function userData(user, num) {
	const data = await fetch("https://api.github.com/users" + "/" + user);
	const json = await data.json();

	avatar_url = json.avatar_url;

	userName = json.name;

	login = json.login;

	bio = json.bio;

	followers = json.followers;

	following = json.following;

	userLocation = json.location;

	blog = json.blog;

	const imageElement = document.getElementById("avatar_url" + num);
	imageElement.src = avatar_url;
	document.getElementById("userName" + num).innerText = userName;
	document.getElementById("login" + num).innerText = "login; " + login;
	document.getElementById("bio" + num).innerText = "bio; " + bio;
	document.getElementById("followers" + num).innerText =
		"followers; " + followers;
	document.getElementById("following" + num).innerText =
		"following; " + following;
	document.getElementById("location" + num).innerText =
		"location; " + userLocation;
	const linkElement = document.getElementById("blog" + num);
	linkElement.href = blog;
	document.getElementById("blog" + num).innerText = "blog; " + blog;
}
userData("Gaute945", 0);

repoData("Overmounting", "Gaute945", 0);
repoData("UserIsland", "Gaute945", 1);
repoData("ParkingSensor", "Gaute945", 2);
repoData("randomGroupApp.js", "Gaute945", 3);
repoData("Overtesting", "Gaute945", 4);
repoData("NotYourFireAlarm", "Gaute945", 5);
