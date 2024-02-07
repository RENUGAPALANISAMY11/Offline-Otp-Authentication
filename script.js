const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})
fetch('/user')
.then(response => response.json())
.then(user => {
	document.getElementById("nameDisplay").textContent = user.name;
	document.getElementById("userEmail").textContent = user.email;
})
.catch(error => {
	console.error('Error fetching user:', error);
});
console.log("hello user")

// function getURLParameter(name) {
// 	const urlParams = new URLSearchParams(window.location.search);
// 	return urlParams.get(name);
// }

// // Get the 'name' value from the URL
// const nameValue = getURLParameter('name');

// // Update the HTML content with the 'name' value
// const nameDisplay = document.getElementById('nameDisplay');
// nameDisplay.textContent = ` ${nameValue}`;	
//.................................................\\

