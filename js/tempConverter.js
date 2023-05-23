function showTempDegree(event) {
     event.preventDefault();
     let insertDegree = document.getElementById("insert-degree").valueAsNumber;
     let selectedDegree = document.getElementById("temp-units").value;
     let convertUnits = document.getElementById("convert-units").value;
     let result = document.getElementById("result")
     let kalvinDeg;
     let FahrenheitDegree;
     let Celsius;

     if (selectedDegree === "degree-c" && convertUnits === "kelvin") {
          kalvinDeg = insertDegree + 273;
          result.textContent = kalvinDeg + " °k"
     } else if (selectedDegree === "degree-c" && convertUnits === "Fahrenheit") {
          FahrenheitDegree = (insertDegree * 9 / 5) + 32
          result.textContent = FahrenheitDegree + " °f"
     } else if (selectedDegree === "degree-f" && convertUnits === "Celsius") {
          Celsius = (insertDegree - 32) * 5 / 9;
          result.textContent = Celsius.toFixed(2) + " °c"
     } else if (selectedDegree === "degree-f" && convertUnits === "kelvin") {
          kalvinDeg = (insertDegree - 32) * 5 / 9 + 273.15;
          result.textContent = kalvinDeg.toFixed(2) + " °k"
     } else if (selectedDegree === "degree-k" && convertUnits === "Celsius") {
          Celsius = (insertDegree - 273.15);
          // <td>℉=((K-273.15)*1.8)+32</td>
          result.textContent = Celsius.toFixed(2) + " °c"
     } else {
          FahrenheitDegree = (insertDegree - 273.15) * 9 / 5 + 32;
          result.textContent = FahrenheitDegree.toFixed(2) + " °f"
     }
}
