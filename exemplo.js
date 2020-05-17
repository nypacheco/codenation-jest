const aplicarDesconto = (total, desconto) => {
  // if (desconto < 0) return 'desconto não pode negativo';
  if (desconto < 0) throw Error('desconto não pode negativo');
  if (desconto === total) return 'desconto não pode ser igual ao total';
  if (desconto > total) return 'desconto não pode ser mais que valor total';

  return total - desconto;
}

export default aplicarDesconto;

const minhaFunc = (a, b) => {
  try {
    aplicarDesconto(a, b)
  }
  catch(error) {
    alert(error);
  }
}

minhaFunc(10, -2); // throw error
minhaFunc(10, 10); // desconto não pode ser igual ao total

console.log(minhaFunc(10, 10)); // desconto não pode ser igual ao total
console.log(minhaFunc(10, -2)); // alerta com erro
