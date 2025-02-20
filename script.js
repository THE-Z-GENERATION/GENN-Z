fetch("https://GENN-Z.infinityfreeapp.com/backend.php")
  .then(response => response.json())
  .then(data => {
    console.log(data); // Backend se data frontend pe aa raha hai
  })
  .catch(error => console.error("Error:", error));
