function calcular() {
    var valor = document.getElementById("valor").value;
    var porcentagem = document.getElementById("porcentagem").value;
    var gorjeta = valor * (porcentagem / 100);
    var total = parseFloat(valor) + gorjeta;
    document.getElementById("resultado").innerHTML = "Gorjeta: R$ " + gorjeta.toFixed(2) + "<br>Total: R$ " + total.toFixed(2);
  }
  