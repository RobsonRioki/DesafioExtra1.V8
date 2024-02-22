function registrar(){
    var nomeAtividade = inputAtividade.value.trim();
    var prazoAtividade = inputPrazo.value;
    let atividadesNew = JSON.parse(localStorage.getItem('atividades'));
    if (!atividadesNew){
    atividadesNew =[];
    } 

    if (nomeAtividade != "" && prazoAtividade != ""){
        const novaAtividade = {nome: nomeAtividade.toString(), prazo: prazoAtividade.toString()};
        atividadesNew.push(novaAtividade);
        localStorage.setItem('atividades' , JSON.stringify(atividadesNew));

        location.reload() 
        alert("Atividade registrada!");
    }else{
        alert("Preencha todos os campos!")
    }
}

function carregarMural(){
    if (JSON.parse(localStorage.getItem('atividades')) == null){
        console.log('nada adicionado');
    }else{
    // alert('mural carregado');
    muralAtividades.innerHTML = JSON.stringify(localStorage.getItem('atividades'));
    console.log(JSON.stringify(localStorage.getItem('atividades')));
    }
}
