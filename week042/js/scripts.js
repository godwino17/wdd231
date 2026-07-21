const getData = window.location.search; // Get user data from window as string
const capturedData = new URLSearchParams(getData); // Takes the string and creates an object 
// that allows you to access the individual parameters using the .get() method.


const displayResult = document.querySelector('#results');

displayResult.innerHTML = `
<p>Appointment for ${capturedData.get('first')} ${capturedData.get('last')}</p>
<p>Proxy ${capturedData.get('ordinance')} on ${capturedData.get('date')} in the ${capturedData.get('location')} temple.</p>
<p>Your Phone: ${capturedData.get('phone')}</p>
<p>Your Email is: ${capturedData.get('email')}</p>`;

