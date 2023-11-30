const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');

document.addEventListener('mousemove', function(event) {
    // Calculate the distance between the cursor and the "No" button
    const deltaX = event.clientX - noButton.offsetLeft;
    const deltaY = event.clientY - noButton.offsetTop;

    // Move the "No" button away from the cursor
    noButton.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
});

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
