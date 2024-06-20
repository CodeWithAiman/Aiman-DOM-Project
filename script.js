document.addEventListener('DOMContentLoaded', () => {
    const studentForm = document.getElementById('studentForm');
    const studentNameInput = document.getElementById('studentName');
    const studentIDInput = document.getElementById('studentID');
    const emailInput = document.getElementById('email');
    const contactNoInput = document.getElementById('contactNo');
    const recordsTableBody = document.querySelector('#recordsTable tbody');

    studentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const studentName = studentNameInput.value;
        const studentID = studentIDInput.value;
        const email = emailInput.value;
        const contactNo = contactNoInput.value;

        // To check if any fields are empty
        if (!studentName || !studentID || !email || !contactNo) {
            alert('Please fill in all fields.');
            return;
        }

        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${studentName}</td>
            <td>${studentID}</td>
            <td>${email}</td>
            <td>${contactNo}</td>
            <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;

        recordsTableBody.appendChild(newRow);

        studentNameInput.value = '';
        studentIDInput.value = '';
        emailInput.value = '';
        contactNoInput.value = '';

        attachButtonEvents(newRow);
    });

    function attachButtonEvents(row) {
        const editButton = row.querySelector('.edit-btn');
        const deleteButton = row.querySelector('.delete-btn');

        editButton.addEventListener('click', function() {
            // To get the current values from the row
            const cells = row.querySelectorAll('td');
            const studentName = cells[0].textContent;
            const studentID = cells[1].textContent;
            const email = cells[2].textContent;
            const contactNo = cells[3].textContent;

            // Tp populate the form with current values for editing
            studentNameInput.value = studentName;
            studentIDInput.value = studentID;
            emailInput.value = email;
            contactNoInput.value = contactNo;

            // To remove the current row from the table
            row.remove();
        });

        deleteButton.addEventListener('click', function() {
            row.remove();
        });
    }
});