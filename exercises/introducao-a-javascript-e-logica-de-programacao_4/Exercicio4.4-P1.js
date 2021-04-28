let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log('Bem-vinda, ' + info.personagem + '!');

  console.log('       ');

  info.recorrente = 'Sim';
  
  console.log(info);

  console.log('       ');

  for (let index in info) {
      console.log(index);
  };

  console.log('       ');