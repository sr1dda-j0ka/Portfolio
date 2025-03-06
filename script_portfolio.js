document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); 

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
        let statusMessage = document.getElementById("status-message");

        
        statusMessage.innerHTML = "";
        statusMessage.style.color = "black";

       
        if (name === "") {
            statusMessage.innerHTML = "⚠ Please enter your name.";
            return;
        }

        if (!validateEmail(email)) {
            statusMessage.innerHTML = "⚠ Please enter a valid email address.";
            return;
        }

        if (message === "") {
            statusMessage.innerHTML = "⚠ Please enter your message.";
            return;
        }

        
        statusMessage.style.color = "green";
        statusMessage.innerHTML = "✅ Message sent successfully!";
        
        
        setTimeout(() => {
            document.getElementById("contact-form").reset();
            statusMessage.innerHTML = "";
        }, 2000);
    });

   
    function validateEmail(email) {
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
