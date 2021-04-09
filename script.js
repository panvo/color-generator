var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.querySelector(".randomcolor");


function initialGradient() {
	body.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";
	css.textContent = body.style.background + ";";
}

window.addEventListener("load", initialGradient);


function setGradient() {
	body.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


// function newGradient() {
// 	color1 = {
// 		r: Math.floor(Math.random() * 255),
// 		g: Math.floor(Math.random() * 255),
// 		b: Math.floor(Math.random() * 255)
// 	};
// 	color2 = {
// 		r: Math.floor(Math.random() * 255),
// 		g: Math.floor(Math.random() * 255),
// 		b: Math.floor(Math.random() * 255)
// 	};
// 	color1.rgb = 'rgb(' + color1.r + ',' + color1.g + ',' + color1.b + ')';
// 	color2.rgb = 'rgb(' + color2.r + ',' + color2.g + ',' + color2.b + ')';



function setRandomGradient() {

	// var letters = '0123456789abcdef';
	// var hash1 = '#';
	// var hash2 = '#';

	// for (i = 0; i < 6; i++) {

	// hash1 += letters[Math.floor(Math.random() * 16)];
	// hash2 += letters[Math.floor(Math.random() * 16)];
	var hash1 = "#" + Math.random().toString(16).substring(2, 8);
	var hash2 = "#" + Math.random().toString(16).substring(2, 8);
	// }
	body.style.background =
		"linear-gradient(to right, "
		+ hash1
		+ ", "
		+ hash2
		+ ")";

	css.textContent = body.style.background + ";";
	// css.textContent = "linear-gradient(to right, " + hash1 + ", "
	// 	+ hash2
	// 	+ ")";

	color1.value = hash1;
	color2.value = hash2;
}

randomBtn.addEventListener("click", setRandomGradient);










let organizeArray = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]

function sortArray() {
	let sorted = organizeArray.sort(function (a, b) {
		return a - b;
	});
	return sorted;
}

function similarArray() {
	let answer = sortArray().reduce((r, v, i, a) => {
		if (v === a[i - 1]) {
			r[r.length - 1].push(v);
		} else {
			r.push(v === a[i + 1] ? [v] : v);
			// debugger;
		}
		return r;
	}, []);

	return answer;
}


const name = {
	name1: 'sally'
}




