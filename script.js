// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAaEbYmkP-Tek2JSoZZuDLdgCKJskQg450",
    authDomain: instituto-educare.firebaseapp.com",
    projectId: "instituto-educare",
    storageBucket: "instituto-educare.appspot.com",
    messagingSenderId: "879909414129",
    appId: "1:879909414129:web:b884560c022904e56c7550",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.getElementById('solicitarAgora').addEventListener('click', function() {
    document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
});

let currentStep = 0;
const formSteps = document.querySelectorAll('.form-step');

function nextStep() {
    formSteps[currentStep].style.display = 'none';
    currentStep = (currentStep + 1) % formSteps.length;
    formSteps[currentStep].style.display = 'block';
}

function prevStep() {
    formSteps[currentStep].style.display = 'none';
    currentStep = (currentStep - 1 + formSteps.length) % formSteps.length;
    formSteps[currentStep].style.display = 'block';
}

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const cpf = document.getElementById('cpf').value;
    const genero = document.getElementById('genero').value;
    const celular = document.getElementById('celular').value;
    const escolaridade = document.getElementById('escolaridade').value;
    const endereco = document.getElementById('endereco').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const cep = document.getElementById('cep').value;
    const cartaoNumero = document.getElementById('cartaoNumero').value;
    const cartaoValidade = document.getElementById('cartaoValidade').value;
    const cartaoCVV = document.getElementById('cartaoCVV').value;

    db.collection('users').add({
        nome,
        email,
        dataNascimento,
        cpf,
        genero,
        celular,
        escolaridade,
        endereco,
        cidade,
        estado,
        cep,
        cartaoNumero,
        cartaoValidade,
        cartaoCVV
    })
    .then(() => {
        alert('Usuário registrado com sucesso!');
        document.getElementById('register-form').reset();
    })
    .catch(error => {
        console.error('Erro ao registrar usuário: ', error);
        alert('Ocorreu um erro ao registrar o usuário. Tente novamente.');
    });
});
