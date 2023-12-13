async function repoData(repo, owner, num) {
	const data = await fetch("https://api.github.com/repos/" + owner + "/" + repo);
	const json = await data.json();

	name = json.name;

	description = json.description;

	language = json.language;
    
	license = json.license.key;

	updated = json.updated_at;

	document.getElementById("name" + num).innerText = name;
	document.getElementById("description" + num).innerText = description;
    document.getElementById("language" + num).innerText = language;
	document.getElementById("license" + num).innerText = license;
	document.getElementById("updated_at" + num).innerText = updated;
}
repoData("Overmounting", "Gaute945", 0);
repoData("UserIsland", "Gaute945", 1);
repoData("ParkingSensor", "Gaute945", 2);
repoData("randomGroupApp.js", "Gaute945", 3);
repoData("Overtesting", "Gaute945", 4);
repoData("NotYourFireAlarm", "Gaute945", 5);