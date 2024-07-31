document.addEventListener('DOMContentLoaded', () => {
    function validateInput(input, min, max) {
        let number = parseInt(input);
        return !isNaN(number) && number >= min && number <= max;
    }

    let firstName = prompt("Enter your first name:");
    while (!firstName || firstName.trim() === "") {
        alert("First name cannot be empty. Please enter your first name.");
        firstName = prompt("Enter your first name:");
    }

    let lastName = prompt("Enter your last name:");
    while (!lastName || lastName.trim() === "") {
        alert("Last name cannot be empty. Please enter your last name.");
        lastName = prompt("Enter your last name:");
    }

    let month, day, year;
    let valid = false;

    while (!valid) {
        month = prompt("Enter your birth month (1-12):");
        day = prompt("Enter your birth day (1-31):");
        year = prompt("Enter your birth year:");

        const currentYear = new Date().getFullYear();
        const age = currentYear - parseInt(year);

        if (validateInput(month, 1, 12) && validateInput(day, 1, 31) && validateInput(year, currentYear - 100, currentYear - 5)) {
            valid = true;
            alert(`Your name: ${firstName} ${lastName}\nYour birthdate: ${day}/${month}/${year}`);
        } else {
            alert("Invalid input. Please try again.");
        }
    }
});
