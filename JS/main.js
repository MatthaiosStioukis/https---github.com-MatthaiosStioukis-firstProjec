
// creating the buttonPressed object with id carBook so I can call some functionson it.
const buttonPressed = document.getElementById("carBook");
// buttonPressed object will call the bookingForm when clicked, because the eventlistener function.
buttonPressed.addEventListener('click', function() {
    bookingForm();
});

//created a bookingForm function which is taking the window url and changing it the the one i specify here to load the form i created.
const bookingForm = function() {
    window.location.href = '/Html/form.html';
};