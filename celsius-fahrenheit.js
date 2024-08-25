//Este programa solicita ao usuário que insira a temperatura em graus Celsius,
//converte para Fahrenheit e exibe o resultado em uma mensagem de alerta.
const celsius = prompt("Digite a temperatura em Celsius:");
const fahrenheit = (celsius * 9/5) + 32;
alert(`${celsius}°C é igual a ${fahrenheit}°F`);