function validateEmail() {
	const email = document.getElementById("email").value;
	const valid = email.includes("@");
	if (!valid) {
		alert("Email is bad. Fix it!");
		console.log("apple");
	} else {
		alert("Email is good. Proceed.");
	}
	return valid;
}

function validateEmail() {
	let isValid = true;

	// Clear previous error messages
	document.getElementById("nameError").textContent = "";
	document.getElementById("emailError").textContent = "";

	// Check if the name field is empty
	let name = document.getElementById("name").value.trim();
	if (name === "") {
		document.getElementById("nameError").textContent = "Name is required";
		isValid = false;
	}

	// Check if the email field is empty
	let email = document.getElementById("email").value.trim();
	if (email === "") {
		document.getElementById("emailError").textContent = "Email is required";
		isValid = false;
	}

	// Prevent form submission if validation fails
	if (!isValid) {
		event.preventDefault();
	}
}
