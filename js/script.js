const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');
const btn9 = document.querySelector('#btn9');

const player1 = {
  escolha: 'X'
}

const player2 = {
  escolha: 'O'
}

const escolhaPlayer1 = player1.escolha;
const escolhaPlayer2 = player2.escolha;

let vezJogador = escolhaPlayer1;

function espacoEscolhido() {
  const btnXHorizontal1 = btn1.textContent == 'X' && btn2.textContent == 'X' && btn3.textContent == 'X';
  const btnXHorizontal2 = btn4.textContent == 'X' && btn5.textContent == 'X' && btn6.textContent == 'X';
  const btnXHorizontal3 = btn7.textContent == 'X' && btn8.textContent == 'X' && btn9.textContent == 'X';


}

function formaDeGanhar() {
  const horizontal1 = 
    || btn1.textContent == 'O' && btn2.textContent == 'O' && btn3.textContent == 'O';
  const horizontal2 = btn4.textContent == 'X' && btn5.textContent == 'X' && btn6.textContent == 'X'
    || btn1.textContent == 'O' && btn2.textContent == 'O' && btn3.textContent == 'O';
  const horizontal3 = btn7.textContent == 'X' && btn8.textContent == 'X' && btn9.textContent == 'X'
    || btn1.textContent == 'O' && btn2.textContent == 'O' && btn3.textContent == 'O';

  if (horizontal1 || horizontal2 || horizontal3) {
    console.log('Vencedor é: ', vezJogador);
  }

}


document.querySelectorAll('button').forEach((button) => {

  button.addEventListener('click', event => {

    switch (button.textContent) {
      case 'A':
        button.textContent = vezJogador
        vezJogador = vezJogador === escolhaPlayer1 ? escolhaPlayer2 : escolhaPlayer1
        break;
      case button.textContent == 'X':
        button.textContent = 'X';
        vezJogador = escolhaPlayer1;

        break;
      case button.textContent == 'O':
        button.textContent = 'O';
        vezJogador = escolhaPlayer2;
        break;
    }
    console.log('Vez do jogador:', vezJogador);

    formaDeGanhar();

  })

})








