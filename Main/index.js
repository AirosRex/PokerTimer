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