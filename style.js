const tempCalculate = () => {
    const userVal = document.getElementById("temp").value;
    const diffTemp = document.getElementById("temp_diff");
    const valueTemp = temp_diff.options[diffTemp.selectedIndex].value;

    const celToFah = (cel) => {
        let fahrenheit = Math.round((cel * 9 / 5) + 32);
        return fahrenheit;
    }

    const fehToCel = (fehr) => {
        let celsius = Math.round((fehr - 32) * 5 / 9);
        return celsius;
    }

    let result;

    if (valueTemp == 'cal') {
        result = celToFah(userVal);
        document.getElementById('resulttemp').innerHTML = `= ${result} °Fahrenheit`;
    } else {
        result = fehToCel(userVal);
        document.getElementById('resulttemp').innerHTML = `= ${result} °Celsius`;
    }

}