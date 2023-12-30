function solve() {
    var A = parseFloat(document.getElementById("A").value);
    var B = parseFloat(document.getElementById("B").value);
    var C = parseFloat(document.getElementById("C").value);

    var x1, x2;
    x1 = (-B + Math.sqrt(B * B - 4 * A * C)) / (2 * A);
    x2 = (-B - Math.sqrt(B * B - 4 * A * C)) / (2 * A);

    if (isNaN(x1) || isNaN(x2)) {
        document.getElementById("sol1").value = "No real roots";
        document.getElementById("sol2").value = "No real roots";
    } else {
        document.getElementById("sol1").value = x1;
        document.getElementById("sol2").value = x2;
    }
}

function clearFields() {
    document.getElementById('A').value = '';
    document.getElementById('B').value = '';
    document.getElementById('C').value = '';
    document.getElementById('sol1').value = '';
    document.getElementById('sol2').value = '';
}