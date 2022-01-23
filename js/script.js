// method of toggling menu

let togglebar= document.querySelector(".toggle-bar");
let menubar= document.querySelector(".menu-bar");

togglebar.addEventListener("click",function(){
	if(togglebar.firstElementChild.classList.contains("fa-bars")){
		togglebar.firstElementChild.classList.replace("fa-bars","fa-times");
		console.log("hi!");
	}
	else {
		togglebar.firstElementChild.classList.replace("fa-times","fa-bars");
	}
	menubar.classList.toggle("menu-bar");
	
});












let parallax= document.getElementById("parallax");

window.addEventListener("scroll", function(){
	let offset = window.pageYOffset;
	parallax.style.backgroundPositionY = offset*0.7+ "px";
});