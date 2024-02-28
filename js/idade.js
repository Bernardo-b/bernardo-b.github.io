// Função para calcular a idade com base na data de nascimento
function calcularIdade(dataNascimento) {
    var hoje = new Date();
    var nascimento = new Date(dataNascimento);
    var idade = hoje.getFullYear() - nascimento.getFullYear();
    var mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    return idade;
}

// Data de nascimento
var dataNascimento = "1999-04-10"; // Formato: YYYY-MM-DD

// Calcula a idade e exibe no elemento HTML com o id 'idade'
document.getElementById("idade").innerText = calcularIdade(dataNascimento);
