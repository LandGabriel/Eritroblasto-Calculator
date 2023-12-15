function calculate() {
    const leucocitosTotal = parseFloat(document.getElementById('leucocitos').value);
    const eritroblastosTotal = parseFloat(document.getElementById('eritroblastos').value);

    const result = (leucocitosTotal * 100) / (eritroblastosTotal + 100);

    document.getElementById('total').innerHTML = "Contagem Total de Leucócitos Corrigida: " + result.toFixed(2);
}
