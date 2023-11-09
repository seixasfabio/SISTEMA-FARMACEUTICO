const inputNomeMedicamento = document.querySelector("#NomeMedicamento");
const inputLote = document.querySelector("#Lote");
const inputVencimento = document.querySelector("#Vencimento");
const bottonSubmit = document.querySelector("#Cadastrar");

function verificar(event) {
    event.preventDefault();
    const cadastro = {
        Nome : inputNomeMedicamento.value,
        Lote : inputLote.value,
        Vencimento : inputVencimento.value,
    }
    const Medicamento = Array();
    Medicamento[document.querySelector("#PrincipioAtivo").value] = cadastro;
    
    console.log(Medicamento);
}
bottonSubmit.onclick = verificar;