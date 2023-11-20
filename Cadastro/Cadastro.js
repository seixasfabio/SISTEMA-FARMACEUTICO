
class Medicamento{
    constructor(){
        this.nome  = document.querySelector("#NomeMedicamento").value
        this.principioAtivo = document.querySelector("#PrincipioAtivo").value
        this.lote = document.querySelector("#Lote").value
        this.vencimento = document.querySelector("#Vencimento").value
    }  
}
function LerDados(event) {
    event.preventDefault();
    let medicamento = new Medicamento();
    console.log(medicamento);
}
let botaoCadastro = document.querySelector("#Cadastrar");
botaoCadastro.onclick = LerDados;
