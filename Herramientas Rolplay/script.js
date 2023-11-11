function rollDice() {
    var faces = document.getElementById('faces').value;
    var dice = document.getElementById('dice');
    var result = Math.floor(Math.random() * faces) + 1;
    dice.textContent = result;
    document.getElementById("caras").innerHTML = "Caras " + faces;
}
function rollDice2() {
    var faces = document.getElementById('faces').value;
    var dice = document.getElementById('dice2');
    var result = Math.floor(Math.random() * faces) + 1;
    dice.textContent = result;
    document.getElementById("caras2").innerHTML = "Caras " + faces;
}

function rollDice3() {
    var faces = document.getElementById('faces3').value;
    var dice = document.getElementById('dice3');
    var result = Math.floor(Math.random() * faces) + 1;
    dice.textContent = result;
    document.getElementById("caras3").innerHTML = "Caras " + faces;
    var num1 = document.getElementById('num1').value;
    var num2 = result;
    var suma = Number(num1) + Number(result);
    document.getElementById('resultado').innerHTML = 'El daño es: ' + suma;
}
function rollDice4() {
    var faces = document.getElementById('faces4').value;
    var dice = document.getElementById('dice4');
    var result = Math.floor(Math.random() * faces) + 1;
    dice.textContent = result;
    document.getElementById("caras4").innerHTML = "Caras " + faces;
    var num1 = document.getElementById('num2').value;
    var num2 = result;
    var suma = Number(num1) + Number(result);
    document.getElementById('resultado2').innerHTML = 'El daño es: ' + suma;
}
var count = 0;
function clic() {
  count += 1;
  document.getElementById("contador").innerHTML = "Clic numero " + count;
}
var count2 = 0;
function clic2() {
    count2 += 1;
    document.getElementById("contador2").innerHTML = "Clic numero " + count2;
}
  var count3 = 0;
function clic3() {
  count += 1;
  document.getElementById("contador3").innerHTML = "Clic numero " + count;
}
var count4 = 0;
function clic4() {
    count2 += 1;
    document.getElementById("contador4").innerHTML = "Clic numero " + count2;
}

function restar() {
    var num1 = document.getElementById('resultado').innerHTML.split(' ').pop();
    var num2 = document.getElementById('resultado2').innerHTML.split(' ').pop();
    var restar = Number(num1) - Number(num2);
    if (restar < 0) {
        document.getElementById('resultado3').innerHTML = 'Perdiste';
    }
    else if (restar == 0) {
        document.getElementById('resultado3').innerHTML = 'Empataste';
    }
    else {
        document.getElementById('resultado3').innerHTML = 'Ganaste';
    }
}

const form = document.querySelector('.chat-form');
const input = document.querySelector('.chat-form input[type="text"]');
const messages = document.querySelector('.chat-messages');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = input.value.trim();
  
  if (message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `
      <span class="username">Tú:</span>
      <span class="text">${message}</span>
    `;
    
    messages.appendChild(messageElement);
    input.value = '';
    messages.scrollTop = messages.scrollHeight;
  }
});
