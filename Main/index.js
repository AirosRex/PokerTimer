document.getElementById('selectTimer').addEventListener('change', function() {
    var selectedValue = this.value;
    document.getElementById('selectedTimer').innerText = "You selected: " + selectedValue;
});

document.getElementById('selectBreaks').addEventListener('change', function() {
    var selectedValue = this.value;
    if (selectedValue == "No breaks") {
        document.getElementById('selectedBreaks').innerText = "There will be no breaks";
    } else {
        document.getElementById('selectedBreaks').innerText = "There will be a break every " + selectedValue;
    }
});

// Function to set a cookie
function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie by name
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to save the selected value in a cookie
function saveSelection() {
    let colorSelect = document.getElementById('colorSelect');
    let selectedColor = colorSelect.value;
    setCookie('selectedColor', selectedColor, 7); // Save for 7 days
    displayStoredSelection();
}

// Function to display the stored selection
function displayStoredSelection() {
    let storedColor = getCookie('selectedColor');
    if (storedColor) {
        document.getElementById('displaySelection').textContent = 'Previously selected color: ' + storedColor;
        document.getElementById('colorSelect').value = storedColor;
    }
}

// Display the stored selection when the page loads
window.onload = displayStoredSelection;