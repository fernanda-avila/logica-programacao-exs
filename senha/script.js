// Seleciona os elementos HTML que serão manipulados pelo JavaScript
const textElement = document.getElementById('text'); // Elemento onde o efeito de digitação será exibido
const cursorElement = document.getElementById('cursor'); // Elemento que pode ser usado para mostrar o cursor (não está sendo utilizado aqui)
const passwordInput = document.getElementById('passwordInput'); // Campo de entrada onde o usuário digita a senha
const togglePassword = document.getElementById('togglePassword'); // Botão para mostrar/ocultar a senha (não está implementado aqui)
const verifyButton = document.getElementById('verifyButton'); // Botão para verificar a senha (não está implementado aqui)
const successMessage = document.getElementById('successMessage'); // Elemento para exibir mensagens sobre a segurança da senha

// Mensagens que serão exibidas no efeito de digitação
const textMessages = ["mantenha-se seguro", "crie uma boa senha"];
let messageIndex = 0; // Índice da mensagem atual que está sendo exibida
let charIndex = 0; // Índice do caractere atual da mensagem
let isDeleting = false; // Flag para saber se estamos apagando o texto
let typingSpeed = 100; // Velocidade da digitação

// Função para criar o efeito de digitação e apagamento
function typeEffect() {
    const currentMessage = textMessages[messageIndex]; // Mensagem atual
    const displayedText = currentMessage.slice(0, charIndex); // Texto a ser exibido

    textElement.textContent = displayedText; // Atualiza o texto exibido no elemento

    if (!isDeleting) { // Se não estamos apagando o texto
        if (charIndex < currentMessage.length) { // Se ainda há caracteres para digitar
            charIndex++; // Avança para o próximo caractere
            typingSpeed = 100; // Velocidade de digitação
        } else { // Se o texto foi completamente digitado
            isDeleting = true; // Começa a apagar
            typingSpeed = 1000; // Aumenta o delay antes de apagar
        }
    } else { // Se estamos apagando o texto
        if (charIndex > 0) { // Se ainda há caracteres para apagar
            charIndex--; // Volta para o caractere anterior
            typingSpeed = 50; // Velocidade de apagamento
        } else { // Se o texto foi completamente apagado
            isDeleting = false; // Começa a digitar novamente
            messageIndex = (messageIndex + 1) % textMessages.length; // Avança para a próxima mensagem
            typingSpeed = 500; // Delay antes de começar a digitar a próxima mensagem
        }
    }

    setTimeout(typeEffect, typingSpeed); // Chama a função novamente após o delay definido
}

// Inicia o efeito de digitação
typeEffect();

// Adiciona um evento que é acionado sempre que o valor do campo de senha muda
passwordInput.addEventListener('input', () => {
    const password = passwordInput.value; // Obtém o valor atual da senha
    const lengthCheck = document.getElementById('lengthCheck'); // Elemento para checar o comprimento da senha
    const uppercaseCheck = document.getElementById('uppercaseCheck'); // Elemento para checar letras maiúsculas
    const lowercaseCheck = document.getElementById('lowercaseCheck'); // Elemento para checar letras minúsculas
    const digitCheck = document.getElementById('digitCheck'); // Elemento para checar dígitos
    const specialCharCheck = document.getElementById('specialCharCheck'); // Elemento para checar caracteres especiais
    const criteriaNotMet = []; // Array para armazenar critérios não atendidos

    let isValid = true; // Flag para verificar se a senha atende a todos os critérios

    // Checa se a senha tem pelo menos 8 caracteres
    if (password.length >= 8) {
        lengthCheck.innerHTML = "✅ Pelo menos 8 caracteres"; // Marca como válido
        lengthCheck.classList.add('valid');
    } else {
        lengthCheck.innerHTML = "❌ Pelo menos 8 caracteres"; // Marca como inválido
        lengthCheck.classList.remove('valid');
        isValid = false; // Marca a senha como inválida
        criteriaNotMet.push('8 caracteres'); // Adiciona o critério não atendido à lista
    }

    // Checa se a senha contém pelo menos uma letra maiúscula
    if (/[A-Z]/.test(password)) {
        uppercaseCheck.innerHTML = "✅ Pelo menos uma letra maiúscula"; // Marca como válido
        uppercaseCheck.classList.add('valid');
    } else {
        uppercaseCheck.innerHTML = "❌ Pelo menos uma letra maiúscula"; // Marca como inválido
        uppercaseCheck.classList.remove('valid');
        isValid = false; // Marca a senha como inválida
        criteriaNotMet.push('uma letra maiúscula'); // Adiciona o critério não atendido à lista
    }

    // Checa se a senha contém pelo menos uma letra minúscula
    if (/[a-z]/.test(password)) {
        lowercaseCheck.innerHTML = "✅ Pelo menos uma letra minúscula"; // Marca como válido
        lowercaseCheck.classList.add('valid');
    } else {
        lowercaseCheck.innerHTML = "❌ Pelo menos uma letra minúscula"; // Marca como inválido
        lowercaseCheck.classList.remove('valid');
        isValid = false; // Marca a senha como inválida
        criteriaNotMet.push('uma letra minúscula'); // Adiciona o critério não atendido à lista
    }

    // Checa se a senha contém pelo menos um dígito
    if (/\d/.test(password)) {
        digitCheck.innerHTML = "✅ Pelo menos um dígito"; // Marca como válido
        digitCheck.classList.add('valid');
    } else {
        digitCheck.innerHTML = "❌ Pelo menos um dígito"; // Marca como inválido
        digitCheck.classList.remove('valid');
        isValid = false; // Marca a senha como inválida
        criteriaNotMet.push('um dígito'); // Adiciona o critério não atendido à lista
    }

    // Checa se a senha contém pelo menos um caractere especial
    if (/[@#$%^&*]/.test(password)) {
        specialCharCheck.innerHTML = "✅ Pelo menos um caractere especial (@, #, $, %, etc.)"; // Marca como válido
        specialCharCheck.classList.add('valid');
    } else {
        specialCharCheck.innerHTML = "❌ Pelo menos um caractere especial (@, #, $, %, etc.)"; // Marca como inválido
        specialCharCheck.classList.remove('valid');
        isValid = false; // Marca a senha como inválida
        criteriaNotMet.push('um caractere especial'); // Adiciona o critério não atendido à lista
    }

    // Exibe uma mensagem de sucesso ou erro com base na validade da senha
    if (isValid) {
        successMessage.textContent = "Esta é uma senha segura!"; // Mensagem de sucesso
    } else {
        successMessage.textContent = `Senha fraca :( Tente adicionar ${criteriaNotMet.join(', ')}.`; // Mensagem de erro com critérios não atendidos
    }
});
