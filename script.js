//função com demais dados
function calcularSalarioLiquido() {
    let salarioBruto = parseFloat(document.getElementById('salarioBruto').value);
    let inss = parseFloat(document.getElementById('inss').value);
    let irrf = parseFloat(document.getElementById('irrf').value);
    let valeTransporte = parseFloat(document.getElementById('valeTransporte').value);
    let valeRefeicao = parseFloat(document.getElementById('valeRefeicao').value);

    let salarioLiquido = salarioBruto - inss - irrf - valeTransporte - valeRefeicao;
    document.getElementById('salarioLiquido').value = salarioLiquido.toFixed(2);
}