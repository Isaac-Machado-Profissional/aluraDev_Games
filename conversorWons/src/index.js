function conversor() {
    let valorwons = prompt("Digite um valor em wons que deseja converter para o R$."); 
    const umWon = 0.0040; 

    valorwons = valorwons.replace(/[.,]/g, ''); // Remove vírgulas e pontos
    valorwons = parseFloat(valorwons);
  
    if (isNaN(valorwons) || valorwons <= 0) {
      alert("Por favor, insira um número válido."); 
    } else {
      alert("O valor convertido em R$: " + (valorwons * umWon).toFixed(2)); 
    }
  }
  