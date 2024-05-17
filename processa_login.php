<?php
// Inicia a sessão
session_start();

// Verifica se os campos de usuário e senha foram enviados via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Simula uma autenticação (substitua por sua lógica real de autenticação)
    $usuario_correto = "usuario_teste"; // usuário correto
    $senha_correta = "senha123"; // senha correta

    $usuario = $_POST['username'];
    $senha = $_POST['password'];

    // Verifica se o usuário e a senha estão corretos
    if ($usuario == $usuario_correto && $senha == $senha_correta) {
        // Inicia a sessão e armazena o nome de usuário na variável de sessão
        $_SESSION['username'] = $usuario;
        // Redireciona para a página de área do aluno logado
        header("Location: area-aluno-logado.php");
        exit();
    } else {
        // Caso contrário, exibe uma mensagem de erro e redireciona para a página de login
        $_SESSION['login_error'] = "Usuário ou senha incorretos.";
        header("Location: area-aluno.html");
        exit();
    }
} else {
    // Se os dados não foram enviados via POST, redireciona para a página de login
    header("Location: area-aluno.html");
    exit();
}
?>
