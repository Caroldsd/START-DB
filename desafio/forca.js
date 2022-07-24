class Forca {
  
  constructor(palavraSecreta) {
    this.caracteres = palavraSecreta.split('');
    this.palavra = this.caracteres.map(char => {return "_"});
    this.acertos = 0;
    this.vidas = 6;
    this.letrasChutadas = [];
  }

  chutar(letra) {
    let perdeUmaVida = true;
    let letraEncontrada = false;

    if (letra.length > 1) {
      return null;
    }
    
    if (this.letrasChutadas == null) {
      this.letrasChutadas.push(letra);
    } else {
      for (let i=0; i<this.letrasChutadas.length; i++) {
        if (letra == this.letrasChutadas[i]) {
          letraEncontrada = true;
          return null;
        }
      }
      if (letraEncontrada == false) {
        this.letrasChutadas.push(letra);
      }
    }
    
    for (let i=0; i<this.caracteres.length; i++) {
      if (letra == this.caracteres[i]) {
        this.palavra[i] = letra;
        perdeUmaVida = false;
        this.acertos++;
      }
    }
    if (perdeUmaVida == true) {
      this.vidas--;
    }
  }

  buscarEstado() {
    if (this.vidas > 0 && this.acertos == this.palavra.length) {
      return "ganhou";
    }
    if (this.vidas == 0) {
      return "perdeu";
    } else {
      return "aguardando chute";
    } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"
  }

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
