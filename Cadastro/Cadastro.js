const inputPrincipio = document.querySelector("#PrincipioAtivo");
const inputLote = document.querySelector("#Lote");
const inputVencimento = document.querySelector("#Vencimento");
const bottonSubmit = document.querySelector("#Cadastrar");

function verificar(event) {
    event.preventDefault();
    const cadastro = {
        PrincipioAtivo : inputPrincipio.value,
        Lote : inputLote.value,
        Vencimento : inputVencimento.value,
    }
    const Medicamento = Array();
    Medicamento[document.querySelector("#NomeMedicamento").value] = cadastro;
    Medicamento.push(cadastro);
    console.log(Medicamento);
}
bottonSubmit.onclick = verificar;