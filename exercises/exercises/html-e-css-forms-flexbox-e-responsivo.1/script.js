let states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás',  'Maranhão', 'Mato Grosso',' Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

const statesBox = document.querySelector('#states');

for (let index = 0; index < states.length; index += 1) {
    let options = document.createElement("option");
    options.innerText = states[index];
    statesBox.appendChild(options);
}

const submit = document.querySelector('#submit');
