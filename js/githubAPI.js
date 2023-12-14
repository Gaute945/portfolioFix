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
	console.log(json);

	repoName = json.name;

	description = json.description;

	language = json.language;
	
	if (json.license !== null) {
		license = json.license.key;
	}
	else{
		license = null
	}

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
repoData("fireMovies", "Gaute945", 5);
repoData("NotYourFireAlarm", "Gaute945", 6);
repoData("Trenings-app", "Gaute945", 7);
repoData("pokemon-json", "Gaute945", 8);
repoData("random_autoclicker", "Gaute945", 9);
repoData("slot_maschine", "Gaute945", 10);
repoData("RandomGroupGenerator", "Gaute945", 11);
repoData("Nettbutikk-root", "Gaute945", 12);
repoData("portfolio", "Gaute945", 13);
repoData("ValterKvitt", "Gaute945", 14);
repoData("FunShutdown", "Gaute945", 15);
repoData("codeCrack", "Gaute945", 16);
repoData("BruteForceWList", "Gaute945", 17);
repoData("flopyBird", "Gaute945", 18);