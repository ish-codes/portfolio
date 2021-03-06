const app = {};

app.apiUrl =
	"https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

app.listenForHover = () => {
	const headerImage = document.querySelector(".header-img");
	headerImage.addEventListener("mouseover", function () {
		headerImage.src = `./assets/avatar-${
			Math.floor(Math.random() * 3) + 2
		}.svg`;
	});
	headerImage.addEventListener("mouseleave", function () {
		headerImage.src = "./assets/avatar-1.svg";
	});
};

app.listenForFocus = () => {
	const avatarContainer = document.querySelector(".avatar");
	const headerImage = document.querySelector(".header-img");
	avatarContainer.addEventListener("focus", function () {
		headerImage.src = `./assets/avatar-${
			Math.floor(Math.random() * 3) + 2
		}.svg`;
	});
	avatarContainer.addEventListener("focusout", function () {
		headerImage.src = "./assets/avatar-1.svg";
	});
};

// app.toggleDarkMode = () => {
// 	const darkModeButton = document.querySelector(body);
// 	darkModeButton.classList.toggle("dark-mode");
// };

app.giveFunnyJoke = () => {
	const textArea = document.querySelector("textarea");

	fetch(app.apiUrl)
		.then(function (res) {
			return res.json();
		})
		.then(function (jsonRes) {
			if (jsonRes.type == "twopart") {
				textArea.setAttribute(
					"placeholder",
					jsonRes.setup + " " + jsonRes.delivery
				);
			} else if (jsonRes.type == "single") {
				textArea.setAttribute("placeholder", jsonRes.joke);
			}
		});
};

app.init = () => {
	app.giveFunnyJoke();
	app.listenForHover();
	app.listenForFocus();
};

app.init();
