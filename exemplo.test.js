import aplicarDesconto from './exemplo';

describe('aplicarDesconto', () => {
  it('should return 8 when when total is 10 and desconto is 2', () => {
    const resultado = aplicarDesconto(10, 2);
    expect(resultado).toEqual(8);
  });

  it('should return desconto correctly when total and desconto is passed as params', () => {
    const resultado = aplicarDesconto(10, 3);
    expect(resultado).toEqual(7);
  });

  it('should return "desconto não pode ser mais que valor total" when desconto is greater than total', () => {
    const resultado = aplicarDesconto(10, 11);
    expect(resultado).toEqual('desconto não pode ser mais que valor total');
  });

  it('should return "desconto não pode ser igual ao total" when desconto is equal to total', () => {
    const resultado = aplicarDesconto(10, 10);
    expect(resultado).toEqual('desconto não pode ser igual ao total');
  });

  it('should return "desconto não pode negativo" when desconto is negative', () => {
    // const resultado = aplicarDesconto(10, -2);
    // expect(resultado).toEqual('desconto não pode negativo');

    expect(() => {
      aplicarDesconto(10, -2)
    }).toThrow('desconto não pode negativo');
  });
})
