function registrar(){
    var nomeAtividade = inputAtividade.value.trim();
    var prazoAtividade = inputPrazo.value;

    const [ano, mes, dia] = prazoAtividade.split('-');
    const prazoAtv = `${dia}/${mes}/${ano}`;
    const hoje = new Date().setHours(0, 0, 0, 0);

    let atividadesNew = JSON.parse(localStorage.getItem('atividades')) || [];

    if (nomeAtividade !== "" && prazoAtv !== "" && new Date(ano, mes -1, dia) >= hoje) {
        const novaAtividade = { nome: nomeAtividade.toString(), prazo: prazoAtv.toString(), concluida: false };

        let atividadesExistentes = JSON.parse(localStorage.getItem('atividades')) || [];
        let atividadeExistente = false;

        for (let ind = 0; ind < atividadesExistentes.length; ind++) {
            if ((novaAtividade.nome === atividadesExistentes[ind].nome) && (novaAtividade.prazo === atividadesExistentes[ind].prazo)) {
                atividadeExistente = true;
                break;
            }
        }

        if (atividadeExistente) {
            alert("Atividade já registrada!");
        } else {
            atividadesNew.push(novaAtividade);
            localStorage.setItem('atividades', JSON.stringify(atividadesNew));

            alert("Atividade registrada!");
            location.reload();
        }
    } else {
        alert("Preencha todos os campos corretamente!");
    }
}

function carregarMural() {
    const atividades = JSON.parse(localStorage.getItem('atividades')) || [];
    const datasUnicas = new Set(); 

    if (atividades.length === 0) {
        console.log('Nada adicionado');
    } else {
        for (let i = 0; i < atividades.length; i++) {
            const atividade = atividades[i];
            const atividadePrazo = atividade.prazo;

            
            if (!datasUnicas.has(atividadePrazo)) {
                datasUnicas.add(atividadePrazo);

             
                var selectAtividades = document.getElementById('selectAtv');
                var opcoesAtv = document.createElement('option');
                opcoesAtv.innerHTML = `${atividadePrazo}`;
                selectAtividades.appendChild(opcoesAtv);
            }

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

function procurar(){
    var selectAtividades = document.getElementById('selectAtv');
    var opcaoAtv1 = selectAtividades.value;
    muralAtividades.innerHTML = '';
    const atividades = JSON.parse(localStorage.getItem('atividades')) || [];
             for (let i = 0; i < atividades.length; i++){
                const atividade = atividades[i];
                const statusConcluida = atividade.concluida ? "concluida" : "";
                if (atividade.prazo == opcaoAtv1){
            muralAtividades.innerHTML += `<div class="atividadeNoMural ${statusConcluida}">
                ${atividade.nome} ${atividade.prazo}
                <button id="botaoRemover${i}" onclick="remover(${i})" class="botaoRemover">Remover</button>
                <button onclick="concluir(${i})" class="botaoAlterar" id="botaoAlterar${i}">Concluir</button>
                <br>
            </div>`;
                }

}
}


carregarMural();