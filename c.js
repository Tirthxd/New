const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');

noButton.addEventListener('click', function() {
    // Disable the "No" button to prevent further clicks
    noButton.disabled = true;

    // Enable the "Yes" button
    yesButton.disabled = false;
});

yesButton.addEventListener('click', function() {
    // Show "I love you" message as an alert
    alert('I love you ❤️');
});

// Optional: Add click event for the "Of course, Yes" button
noButton.addEventListener('mouseover', function() {
    noButton.click();
});
