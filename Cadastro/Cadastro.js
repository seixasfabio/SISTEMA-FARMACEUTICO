const inputNome = document.querySelector("#NomeMedicamento");
const inputPrincipio = document.querySelector("#PrincipioAtivo");
const inputLote = document.querySelector("#Lote");
const inputVencimento = document.querySelector("#Vencimento");
const bottonSubmit = document.querySelector("#Cadastrar");

function verificar(event) {
    event.preventDefault();
    const cadastro = {
        NomeMedicamento : inputNome.value,
        PrincipioAtivo : inputPrincipio.value,
        Lote : inputLote.value,
        Vencimento : inputVencimento.value,
    }
    const Medicamento = [cadastro];
    console.log(Medicamento);
}
bottonSubmit.onclick = verificar;