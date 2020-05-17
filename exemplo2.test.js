import filtrarArray from './exemplo2';

const array = [
  { id: 1, url: 'http://url1.com' },
  { id: 2, url: 'http://url2.com' },
  { id: 3, url: 'http://link3.com' },
]

describe('filtrarArray', () => {
  it('should return url with "link" string when termo is "link"', () => {
    const resultado = filtrarArray(array, 'link');
    expect(resultado).toEqual([{ id: 3, url: 'http://link3.com' }]);
  });

  it('should return object correctly when specific termo is passed', () => {
    const resultado = filtrarArray(array, 'url1');
    expect(resultado).toEqual([{ id: 1, url: 'http://url1.com' }]);
  });

  it('should return empty array when termo is not found', () => {
    const resultado = filtrarArray(array, 'link9');
    expect(resultado).toEqual([]);
  });

  it('should return error when termo does not exist', () => {
    // const resultado = filtrarArray(array);
    // expect(resultado).toEqual('termo não existe');

    expect(() => {
      filtrarArray(array)
    }).toThrow('termo não existe');
  });

  it('should return error when array does not exist', () => {
    const resultado = filtrarArray();
    expect(resultado).toEqual('array não existe');
  });

  it('should return error when array is empty', () => {
    const resultado = filtrarArray([]);
    expect(resultado).toEqual('array não pode ser vazio');
  });

  it('should return object correctly when termo is uppercase', () => {
    const resultado = filtrarArray(array, 'LINK');
    expect(resultado).toEqual([{ id: 3, url: 'http://link3.com' }]);
  });
});

//['a', 'b', 'c'].includes('c');
