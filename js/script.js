"use strict"

//Определяем мышь или тачскрин
const isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows()
		);
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');
}

// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}

//запуск аудио
let defoltButtons = document.querySelectorAll('.sound__player');
if (defoltButtons.length > 0) {
	for (let index = 0; index < defoltButtons.length; index++) {
		const defoltButton = defoltButtons[index];
		defoltButton.addEventListener("click", function(e) {
			defoltButton.classList.remove('_defolt');
			defoltButton.classList.toggle('_play');
			if (defoltButton.classList.contains("_play")) {
				let allAudio = document.getElementsByTagName("audio");
				for (let aud = 0; aud < allAudio.length; aud++) {
					defoltButtons[aud].classList.remove('_play');
					allAudio[aud].pause();
				}
				let soundAudio = defoltButton.getElementsByTagName("audio")[0];
				defoltButton.classList.toggle('_play');
				soundAudio.play();
			} else {
				let soundAudio = defoltButton.getElementsByTagName("audio")[0];
				soundAudio.pause();
			}
			//let soundAudio = defoltButton.getElementsByTagName("audio")[0];
			//soundAudio.play();
		});
	}
}
let playButtons = document.querySelectorAll('._play');
if (playButtons.length > 0) {
	for (let index = 0; index < playButtons.length; index++) {
		const playButton = playButtons[index];
		playButton.addEventListener("click", function(e) {
			playButton.classList.remove('_play');
			playButton.classList.add('_stop');
			//let soundAudio = playButton.getElementsByTagName("audio")[0];
			//soundAudio.pause();
		});
	}
}