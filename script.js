// scripts.js

// Handle registration form
document.getElementById('donorForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for registering as a blood donor!');
});

// Handle search form
document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const bloodType = document.getElementById('bloodType').value;
    const location = document.getElementById('location').value;
    document.getElementById('donorResults').innerHTML = `
        <h3>Found Donors with Blood Type: ${bloodType} in ${location}</h3>
        <p>Results will be displayed here.</p>'
    `;
});