// Configuração do Firebase
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_AUTH_DOMAIN",
    projectId: "SEU_PROJECT_ID",
    storageBucket: "SEU_STORAGE_BUCKET",
    messagingSenderId: "SEU_MESSAGING_SENDER_ID",
    appId: "SEU_APP_ID"
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
