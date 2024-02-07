var element = document.querySelector('body > div#video-poster');
if (element) {
	element.parentElement.removeChild(element);
	console.log("Moldy: Removed:", element);
}