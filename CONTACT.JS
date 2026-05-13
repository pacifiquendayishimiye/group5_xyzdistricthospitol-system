document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault(); // ntireka page refresh

    // gufata values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    // kubyerekanabnb
    alert(
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n" +
        "Subject: " + subject + "\n" +
        "Message: " + message
    );
});