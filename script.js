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

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const rg = document.getElementById('rg').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const email = document.getElementById('email').value;
    const endereco = document.getElementById('endereco').value;

    db.collection('users').add({
        nome,
        cpf,
        rg,
        dataNascimento,
        email,
        endereco
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
