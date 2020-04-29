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

let modalToggler1 = selectElement('.modal-toggle');
let modalToggler2 = selectElement('.modal-toggle2');
let modalToggler3 = selectElement('.modal-toggle3');

modalToggler1.addEventListener('click', function () {
	body.classList.toggle('lock-scroll');
});

modalToggler2.addEventListener('click', function () {
	body.classList.toggle('lock-scroll');
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

$('span.close').click(function () {
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
		text = 'Please Enter a Valid Name';
		errorMessage.innerHTML = text;
		return false;
	} else if (email.length < 5 && !email.includes('@') && !email.includes('.')) {
		text = 'Please Enter a Valid Email Address';
		errorMessage.innerHTML = text;
		return false;
	} else if (message.length < 2) {
		text = 'Please Enter More Than 2 Characters';
		errorMessage.innerHTML = text;
		return false;
	} else {
		errorMessage.hidden = true;
		return true;
	}
}

// Get the button that opens the modal
var btn = document.querySelectorAll('button.modal-button');

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName('close');

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
	btn[i].onclick = function (e) {
		e.preventDefault();
		modal = document.querySelector(e.target.getAttribute('href'));
		modal.style.display = 'block';
	};
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
	spans[i].onclick = function () {
		for (var index in modals) {
			if (typeof modals[index].style !== 'undefined')
				modals[index].style.display = 'none';
		}
	};
}
