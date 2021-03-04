const signUpButton = document.getElementByid('signUp');
const signInButton = document.getElementByid('signIn');
const container = document.getElementByid('container');

signUpButton.addEventListener('click', () =>(
	container.classList.add ('right-panel-active')
);

signUpButton.addEventListener('click', ()=>
	container.classList.remove('right-panel-active')
);

/* Animation */

/* Move signin to the right */
.container.right-panel-active .sign-in-container {
	transform: translateX(100%);
}

/* Move overlay to left */
.container.right-panel-active .overlay-container {
	transform: translateX(-100%);
}

/* Bring sign up over sign in */
.container.right-panel-active .sign-up-container {
	transform: translateX(100%);
	opacity: 1;
	z-index: 5;
}

/* Move overlay back to right */
.container.right-panel-active .overlay-container {
	transform: translateX(50%);
}
.container.right-panel-active .overlay-left {
	transform: translateX(20%);
}