document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password === confirmPassword) {
        localStorage.setItem('username', name);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        alert('Cadastro realizado com sucesso! Agora você pode fazer login.');
        window.location.href = 'Pagina.html';
    } else {
        alert('As senhas não coincidem. Por favor, tente novamente.');
    }
});