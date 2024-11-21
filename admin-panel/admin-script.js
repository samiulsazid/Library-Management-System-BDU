document.addEventListener('DOMContentLoaded', function() {
    // Logout functionality
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            // In a real application, you would handle the logout process here
            alert('Logging out...');
            window.location.href = 'index.html'; // Redirect to login page
        });
    }

    // User search functionality
    const searchButton = document.getElementById('search-button');
    const userSearch = document.getElementById('user-search');
    if (searchButton && userSearch) {
        searchButton.addEventListener('click', function() {
            const searchTerm = userSearch.value;
            // In a real application, you would send this search term to your server
            alert(`Searching for users with term: ${searchTerm}`);
            // Then update the user table with the results
        });
    }

    // Add book functionality
    const addBookForm = document.getElementById('add-book-form');
    if (addBookForm) {
        addBookForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const title = document.getElementById('book-title').value;
            const author = document.getElementById('book-author').value;
            const isbn = document.getElementById('book-isbn').value;
            const quantity = document.getElementById('book-quantity').value;
            const description = document.getElementById('book-description').value;

            // In a real application, you would send this data to your server
            alert(`Adding book: ${title} by ${author}`);
            addBookForm.reset();
        });
    }

    // Add admin functionality
    const addAdminForm = document.getElementById('add-admin-form');
    if (addAdminForm) {
        addAdminForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('admin-name').value;
            const email = document.getElementById('admin-email').value;
            const password = document.getElementById('admin-password').value;
            const confirmPassword = document.getElementById('admin-confirm-password').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }

            // In a real application, you would send this data to your server
            alert(`Adding admin: ${name} (${email})`);
            addAdminForm.reset();
        });
    }

    // Edit profile functionality
    const editProfileButton = document.getElementById('edit-profile-button');
    if (editProfileButton) {
        editProfileButton.addEventListener('click', function() {
            // In a real application, you would show a form to edit the profile
            alert('Edit profile functionality would be implemented here');
        });
    }

    // Populate admin profile (this would normally fetch data from a server)
    const adminName = document.getElementById('admin-name');
    const adminEmail = document.getElementById('admin-email');
    const adminRole = document.getElementById('admin-role');
    const adminLastLogin = document.getElementById('admin-last-login');

    if (adminName && adminEmail && adminRole && adminLastLogin) {
        adminName.textContent = 'John Doe';
        adminEmail.textContent = 'john.doe@example.com';
        adminRole.textContent = 'Super Admin';
        adminLastLogin.textContent = '2023-05-15 14:30:00';
    }
});

document.addEventListener('DOMContentLoaded', function() {

    // Payment search functionality
    const paymentSearchButton = document.getElementById('payment-search-button');
    const paymentSearch = document.getElementById('payment-search');
    if (paymentSearchButton && paymentSearch) {
        paymentSearchButton.addEventListener('click', function() {
            const searchTerm = paymentSearch.value;
            // In a real application, you would send this search term to your server
            alert(`Searching for payments with term: ${searchTerm}`);
            // Then update the payment table with the results
        });
    }

    // Add payment functionality
    const addPaymentButton = document.getElementById('add-payment-button');
    if (addPaymentButton) {
        addPaymentButton.addEventListener('click', function() {
            // In a real application, you would show a form to add a new payment
            alert('Add payment functionality would be implemented here');
        });
    }

    // Populate payment table (this would normally fetch data from a server)
    const paymentTable = document.getElementById('payment-table');
    if (paymentTable) {
        const samplePayments = [
            { id: '1', user: 'John Doe', amount: '$50.00', date: '2023-05-15', status: 'Completed' },
            { id: '2', user: 'Jane Smith', amount: '$30.00', date: '2023-05-14', status: 'Pending' },
            // Add more sample data as needed
        ];

        const tbody = paymentTable.querySelector('tbody');
        samplePayments.forEach(payment => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${payment.id}</td>
                <td>${payment.user}</td>
                <td>${payment.amount}</td>
                <td>${payment.date}</td>
                <td>${payment.status}</td>
                <td><button class="action-button">View</button></td>
            `;
            tbody.appendChild(row);
        });
    }

});