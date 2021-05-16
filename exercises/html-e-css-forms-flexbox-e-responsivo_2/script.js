let states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás',  'Maranhão', 'Mato Grosso','Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

const statesBox = document.querySelector('#states');

for (let index = 0; index < states.length; index += 1) {
    let options = document.createElement("option");
    options.innerText = states[index];
    options.value = options.innerText;
    statesBox.appendChild(options);
}

const record = document.querySelector('#record');
let nome = document.querySelector('#completeName');
let email = document.querySelector('#email');
let cpf = document.querySelector('#cpf');
let endereco = document.querySelector('#adress');
let cidade = document.querySelector('#city');
let estados = document.querySelector('#states');
let complemento = document.querySelector('#plus1');
let resumo = document.querySelector('#resume');
let cargo = document.querySelector('#function');
let descricao = document.querySelector('#jobdescription');
let datainicio = document.querySelector('#init');
let form = document.getElementsByTagName('input');
let label = document.getElementsByTagName('label');
let pai = document.getElementsByClassName('pai');
let reset = document.querySelector('.reset');

function stop(event) {
    event.preventDefault();

// Vi o uso do Focus e do return, nesse caso, no Stack Overflow.
    if (nome.value === '') {
        alert('Insira seu nome completo.');
        nome.focus();
        return;
    }
    if (email.value !== '' && email.value.includes('@')) {
    } else {
        alert('Insira um e-mail válido');
        email.focus();
        return
    }
    if (cpf.value === '' || cpf.value.length > 11) {
        alert('Insira seu CPF.');
        cpf.focus();
        return;
    }
    if (endereco.value === '') {
        alert('Insira seu endereço.');
        endereco.focus();
        return;
    }
    if (cidade.value === '') {
        alert('Insira sua cidade.');
        cidade.focus();
        return;
    }
    if (complemento.value === '') {
        alert('Escolha um complemento.');
        complemento.focus();
        return;
    }
    if (resumo.value === '' || resumo.value.length > 1000) {
        alert('Escreva um resumo do seu currículo com até 1000 caracteres.');
        resumo.focus();
        return;
    }
    if (cargo.value === '') {
        alert('Escreva seu último cargo.');
        cargo.focus();
        return;
    }
    if (descricao.value === '') {
        alert('Escreva uma descrição do seu cargo.');
        descricao.focus();
        return;
    }
    if (datainicio.value === '') {
        alert('Insira a data de início.');
        datainicio.focus();
        return;
    }
    
    for (let index = 0; index < form.length; index += 1) {
        let div = document.createElement('div');
        div.textContent = form[index].value;
        pai[0].appendChild(div);

        if (index === 4) {
            let divEstado = document.createElement('div');
            let statesS = document.getElementById('states');
            let valor = statesS.options[statesS.selectedIndex].value;
            divEstado.textContent = valor;
            pai[0].appendChild(divEstado);
        } else if (index === 7){
            let divResumo = document.createElement('div');
            divResumo.textContent = resumo.value;
            pai[0].appendChild(divResumo);
        }
    }
}

record.addEventListener('click', stop);

function resetPage() {
    for (let indexRemove = 0; indexRemove < pai.length; indexRemove += 1) {
        pai[indexRemove].remove();
    }
}

reset.addEventListener('click', resetPage);