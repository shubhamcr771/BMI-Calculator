document.addEventListener("DOMContentLoaded", function () {
  var calculate = document.getElementById("Calculate");
  calculate.addEventListener("click", calculateBMI);
});
function calculateBMI() {
  var weightInput = document.getElementById("weight").value;
  var heightInput = document.getElementById("height").value;

  if (weightInput !== "" && heightInput !== "") {
    var weight = parseFloat(weightInput);
    var height = parseFloat(heightInput);
    if (!isNaN(weight) && !isNaN(height)) {
      var bmi = weight / (height ** 2).toFixed(2);
      if (bmi < 18.5) {
        document.getElementById("result").innerHTML =
          "You are Under Weight<br> " + " Your BMI: " + bmi.toFixed(2);
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById("result").innerHTML =
          "Perfect Weight<br>" + "Your BMI: " + bmi.toFixed(2);
      } else if (bmi > 25 && bmi <= 29.9) {
        document.getElementById("result").innerHTML =
          "Noooo, You are overweight<br>" + "Your BMI: " + bmi.toFixed(2);
      } else if (bmi > 30) {
        document.getElementById("result").innerHTML =
          "It's time to workout hard like 'David Goggins' man<br>" +
          "Your BMI: " +
          bmi.toFixed(2);
      } else {
      }

      // document.getElementById("result").innerHTML = "BMI: " + bmi.toFixed(2);
    } else {
      document.getElementById("result").innerHTML =
        "Please enter valid value for weight and height";
    }
  } else {
    document.getElementById("result").innerHTML =
      "Please enter both height and weight";
  }
}
