
function checkAge() {
    var age = document.getElementById("ageInput").value;
    var ageCard = document.getElementById("ageCard");

    if (age >= 18) {
        ageCard.innerHTML = "<h2>You are an adult</h2>";
    } else {
        ageCard.innerHTML = "<h2>You are a child</h2>";
    }
}

document.getElementById("ageInput").addEventListener("input", checkAge);
