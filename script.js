
const bookingForm = document.getElementById("booking-form");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("patient-name").value;
    const phone = document.getElementById("patient-phone").value;
    const treatment = document.getElementById("treatment").value;
    const date = document.getElementById("appointment-date").value;

    const message = document.getElementById("booking-message");

    message.textContent =
        "Thank you, " + name +
        "! Your appointment request has been prepared. " +
        "Please contact the clinic to confirm your booking.";

    console.log({
        name: name,
        phone: phone,
        treatment: treatment,
        date: date
    });

    bookingForm.reset();
});

