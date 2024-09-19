class Calculadora {
    #resultado;
  
    constructor() {
      this.#resultado = 0;
    }
  
    get resultado() {
      return this.#resultado;
    }
  
    set resultado(numero) {
      if (typeof numero === 'string') {
        numero = Number(numero); // Converte string para número
      }
      if (isNaN(numero) || typeof numero !== 'number') {
        throw new TypeError("O argumento deve ser um número válido");
      }
      this.#resultado = numero;
    }
  
    soma(numero) {
      if (typeof numero !== 'number') {
        throw new TypeError("O argumento deve ser um número válido");
      }
      this.#resultado += numero; // Soma o número ao resultado
      return this.#resultado; // Retorna o resultado após a soma
    }
  
    divisao(numero) {
      if (typeof numero === 'string') {
        numero = Number(numero); // Converte string para número
      }
      if (isNaN(numero) || typeof numero !== 'number') {
        throw new TypeError("O argumento deve ser um número válido");
      }
      if (numero === 0) throw new Error("Divisão ilegal por zero");
  
      this.#resultado /= numero; // Realiza a divisão
      return this.#resultado; // Retorna o resultado após a divisão
    }
  }
  
  module.exports = Calculadora;
  