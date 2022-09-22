function temperature(x) {
    this.degree = x;
    this.CtoF = function () {
        return (this.degree * 9 / 5) + 32;
    };
    this.CtoKel = function () {
        return this.degree + 273.15;
    };
}

function convertDegree() {
    let c = +(prompt("Enter C degree"));
    let temp = new temperature(c);
    document.getElementById("result").innerHTML = "C degree: " + c + "<br>Fahrenheit degree: " + temp.CtoF() + "<br>Kelvin degree: " + temp.CtoKel();
}

convertDegree();