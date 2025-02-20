document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch("https://GENN-Z.infinityfreeapp.com/backend.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.json()) // JSON format me response le raha hai
    .then(data => {
        console.log(data); // Backend se data frontend pe aa raha hai
        document.getElementById("response").innerText = data.message;
    })
    .catch(error => console.error("Error:", error));
});
