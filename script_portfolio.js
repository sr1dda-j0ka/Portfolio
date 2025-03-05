document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("KeGAfbVsEGdTgdWsw"); 

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); 

        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        
        emailjs.send("service_pf2k73h", "template_vha0p6u", {
            name: name,
            email: email,
            message: message
        }, "KeGAfbVsEGdTgdWsw") 
        .then(function(response) {
            document.getElementById("status-message").innerText = "Email sent successfully!";
            document.getElementById("status-message").style.color = "green";

            
            document.getElementById("contact-form").reset();
        }, function(error) {
            document.getElementById("status-message").innerText = "Failed to send email.";
            document.getElementById("status-message").style.color = "red";
        });
    });
});
