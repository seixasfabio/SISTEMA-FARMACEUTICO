
var inputLote = document.querySelector("#Lote");
var inputVencimento = document.querySelector("#Vencimento");
var bottonSubmit = document.querySelector("#Cadastrar");

function verificar(event) {
    var inputNomeMedicamento = document.querySelector("#NomeMedicamento").value;
    event.preventDefault();
    const cadastro = {
        
        Lote : inputLote.value,
        Vencimento : inputVencimento.value,
    }
    const Medicamento = Array();
    Medicamento[document.querySelector("#PrincipioAtivo").value] = inputNomeMedicamento;
    inputNomeMedicamento = cadastro;
    
    console.log(Medicamento);
    console.log(inputNomeMedicamento);
}
bottonSubmit.onclick = verificar;