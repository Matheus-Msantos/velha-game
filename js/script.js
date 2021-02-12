const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');
const btn9 = document.querySelector('#btn9');

const playerX = {
  escolha: 'X'
}

const playerO = {
  escolha: 'O'
}

const escolhaPlayerX = playerX.escolha;
const escolhaPlayerO = playerO.escolha;

let vezJogador = escolhaPlayerX;

function formaDeGanhar() {
  const btnXHorizontal1 = btn1.textContent == 'X' && btn2.textContent == 'X' && btn3.textContent == 'X';
  const btnXHorizontal2 = btn4.textContent == 'X' && btn5.textContent == 'X' && btn6.textContent == 'X';
  const btnXHorizontal3 = btn7.textContent == 'X' && btn8.textContent == 'X' && btn9.textContent == 'X';

  const btnXVertical1 = btn1.textContent == 'X' && btn4.textContent == 'X' && btn7.textContent == 'X';
  const btnXVertical2 = btn2.textContent == 'X' && btn5.textContent == 'X' && btn8.textContent == 'X';
  const btnXVertical3 = btn3.textContent == 'X' && btn6.textContent == 'X' && btn9.textContent == 'X';

  const btnXDiagonal1 = btn1.textContent == 'X' && btn5.textContent == 'X' && btn9.textContent == 'X';
  const btnXDiagonal2 = btn3.textContent == 'X' && btn5.textContent == 'X' && btn7.textContent == 'X';

  const btnOHorizontal1 = btn1.textContent == 'O' && btn2.textContent == 'O' && btn3.textContent == 'O';
  const btnOHorizontal2 = btn4.textContent == 'O' && btn5.textContent == 'O' && btn6.textContent == 'O';
  const btnOHorizontal3 = btn7.textContent == 'O' && btn8.textContent == 'O' && btn9.textContent == 'O';

  const btnOVertical1 = btn1.textContent == 'O' && btn4.textContent == 'O' && btn7.textContent == 'O';
  const btnOVertical2 = btn2.textContent == 'O' && btn5.textContent == 'O' && btn8.textContent == 'O';
  const btnOVertical3 = btn3.textContent == 'O' && btn6.textContent == 'O' && btn9.textContent == 'O';

  const btnODiagonal1 = btn1.textContent == 'O' && btn5.textContent == 'O' && btn9.textContent == 'O';
  const btnODiagonal2 = btn3.textContent == 'O' && btn5.textContent == 'O' && btn7.textContent == 'O';

  if (btnXHorizontal1 || btnXHorizontal2 || btnXHorizontal3 || btnXVertical1 || btnXVertical2 || btnXVertical3 || btnXDiagonal1 || btnXDiagonal2) {
    alert('X ganhou');
  } else if (btnOHorizontal1 || btnOHorizontal2 || btnOHorizontal3 || btnOVertical1 || btnOVertical2 || btnOVertical3 || btnODiagonal1 || btnODiagonal2) {
    alert('O ganhou');
  }

}


document.querySelectorAll('button').forEach((button) => {

  button.addEventListener('click', event => {

    switch (button.textContent) {
      case '':
        button.textContent = vezJogador
        vezJogador = vezJogador === escolhaPlayerX ? escolhaPlayerO : escolhaPlayerX
        break;
      case button.textContent == 'X':
        button.textContent = 'X';
        vezJogador = escolhaPlayerX;

        break;
      case button.textContent == 'O':
        button.textContent = 'O';
        vezJogador = escolhaPlayerO;
        break;
    }
    console.log('Vez do jogador:', vezJogador);

    formaDeGanhar();

  })

})








