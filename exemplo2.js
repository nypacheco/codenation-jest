const filtrarArray = (array, termo) => {
  if (!array) return 'array não existe';
  if (!array.length) return 'array não pode ser vazio';
  if (!termo) throw Error('termo não existe');

  const regex = new RegExp(termo, 'i'); // ignora o case para o termo

  return array.filter(elemento => {
    return elemento.url.match(regex);
  })
}

export default filtrarArray;
