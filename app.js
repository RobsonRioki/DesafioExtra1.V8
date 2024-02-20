var nome = [];
var prazo = [];
var descricao = [];

var contador = 0;

function registrar(){
    var nomeAtividade = inputAtividade.value.trim();
    var prazoAtividade = inputPrazo.value;
    var descricaoAtividade = inputDescricao.value.trim();


    if (inputAtividade.value != "" && prazoAtividade.value != null && inputDescricao.value != ""){
        contador++
        nome.push(nomeAtividade);
        prazo.push(prazoAtividade);
        descricao.push(descricaoAtividade);
        
        localStorage.setItem(nome, `Item ${contador}`);
        localStorage.setItem(prazo, `Item ${contador}`);
        localStorage.setItem(descricao, `Item ${contador}`);
        
    }else{
        alert("Preencha todos os campos!")
    }

console.log(nome);
console.log(prazo);
console.log(descricao);
}
