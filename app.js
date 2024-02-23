function registrar(){
    var nomeAtividade = inputAtividade.value.trim();
    var prazoAtividade = inputPrazo.value;
    let atividadesNew = JSON.parse(localStorage.getItem('atividades'));
    if (!atividadesNew){
    atividadesNew =[];
    } 

    if (nomeAtividade != "" && prazoAtividade != ""){
        const novaAtividade = {nome: nomeAtividade.toString(), prazo: prazoAtividade.toString(), concluida: false};
        atividadesNew.push(novaAtividade);
        localStorage.setItem('atividades' , JSON.stringify(atividadesNew));

        location.reload() 
        alert("Atividade registrada!");
    }else{
        alert("Preencha todos os campos!")
    }
}

function carregarMural() {
    const atividades = JSON.parse(localStorage.getItem('atividades')) || [];

    if (atividades.length === 0) {
        console.log('Nada adicionado');
    } else {
        for (let i = 0; i < atividades.length; i++) {
            const atividade = atividades[i];
            const statusConcluida = atividade.concluida ? "concluida" : "";

            muralAtividades.innerHTML += `<div class="atividadeNoMural ${statusConcluida}">
                ${atividade.nome} ${atividade.prazo}
                <button id="botaoRemover${i}" onclick="remover(${i})" class="botaoRemover">Remover</button>
                <button onclick="concluir(${i})" class="botaoAlterar" id="botaoAlterar${i}">Concluir</button>
                <br>
            </div>`;
        }
    }
}
function remover(index) {
    let atividades = JSON.parse(localStorage.getItem('atividades')) || [];
        atividades.splice(index, 1);
        localStorage.setItem('atividades', JSON.stringify(atividades));
        location.reload();

}

function concluir(index) {
    let atividades = JSON.parse(localStorage.getItem('atividades')) || [];
    atividades[index].concluida = true;
    localStorage.setItem('atividades', JSON.stringify(atividades));
    location.reload();
}
