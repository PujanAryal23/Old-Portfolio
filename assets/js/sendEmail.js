const loadingOverlay = document.querySelector('#loading-overlay');

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent the default form submit behavior\
    debugger;
    loadingOverlay.classList.remove('hidden');

    // Get the form fields
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var subject = document.getElementById("subject").value.trim();
    var message = document.getElementById("msg").value.trim();
  
    // Send the email using EmailJS
    var template_params = {
      "from_name": name,
      "from_email": email,
      "to_name": "Pujan",
      "subject": subject,
      "message": message
    };
    emailjs.send("service_j4pbqni", "template_pa70ni4", template_params)
      .then(function(response) {
        console.log("Email sent!", response.status, response.text);
        document.getElementById('loading-icon').style.display = 'none';
        loadingOverlay.classList.add('hidden');
        var successModal = new bootstrap.Modal(document.getElementById("successModal"));
        successModal.show();
        document.getElementById("contact-form").reset();
      }, function(error) {
        console.log("Email failed to send...", error);
        alert("Email failed to send...");
      });
  });
  