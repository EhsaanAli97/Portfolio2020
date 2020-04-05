window.sr = ScrollReveal();
sr.reveal('.animate-left', {
	origin: 'left',
	duration: 1000,
	distance: '25rem',
	delay: 175,
});

sr.reveal('.animate-right', {
	origin: 'right',
	duration: 1000,
	distance: '25rem',
	delay: 175,
});

sr.reveal('.animate-top', {
	origin: 'top',
	duration: 1000,
	distance: '25rem',
	delay: 500,
});

sr.reveal('.animate-bottom', {
	origin: 'bottom',
	duration: 1000,
	distance: '25rem',
	delay: 500,
});

const selectElement = function (element) {
	return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let navToggler = selectElement('.nav-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
	body.classList.toggle('open');
});

navToggler.addEventListener('click', function () {
	body.classList.toggle('open');
});

function lockScroll() {
	if ($('body').hasClass('lock-scroll')) {
		$('body').removeClass('lock-scroll');
	} else {
		$('body').addClass('lock-scroll');
	}
}

$('a.nav-link').click(function () {
	$('body').removeClass('lock-scroll');
});

function validation() {
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var message = document.getElementById('message').value;
	var errorMessage = document.getElementById('errorMessage');
	var text;

	errorMessage.style.padding = '1.2rem';
	errorMessage.style.marginTop = '2rem';
	errorMessage.style.fontWeight = 'bold';

	if (name.length < 2) {
		text = 'Please enter a valid name';
		errorMessage.innerHTML = text;
		return false;
	} else if (email.length < 5 && !email.includes('@') && !email.includes('.')) {
		text = 'Please enter a valid email address';
		errorMessage.innerHTML = text;
		return false;
	} else if (message.length < 2) {
		text = 'Please Enter more than 2 characters';
		errorMessage.innerHTML = text;
		return false;
	} else {
		errorMessage.hidden = true;
		return true;
	}
}
