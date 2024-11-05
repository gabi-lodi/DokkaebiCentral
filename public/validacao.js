
function validacaoCadastro(){
    var Usuario = iptUsuario.value;
    var Email = iptEmail.value;
    var Senha = iptSenha.value;
    var dtNasc = iptDtNasc.value;
    var persoagemFav = selectPF.value;
    var arcoFav = selectAF.value;
}

const select = [
    {
        capitulo: 1,
        id: 1
    },
    {
        capitulo: 2,
        id: 2
    },{
        capitulo: 3,
        id: 3
    },{
        capitulo: 4,
        id: 4
    },{
        capitulo: 5,
        id: 5
    },{
        capitulo: 6,
        id: 6
    },

]

function fill(){
    let conteudo = '<select>';
    for(let index =0 ; index < select.length; index++){
        conteudo += `<option value="${select[0].capitulo}">${select[0].capitulo}</option>`
    }
    conteudo += '</select>'

}