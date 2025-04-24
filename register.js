const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function(event) {
    event.preventDefault(); //impede recarregar a página

    const user = document.getElementById('nameUser').value.trim();
    const pass = document.getElementById('senhaPass').value.trim();
    const cpf = document.getElementById('cpfUser').value.trim();
    const date = document.getElementById('dateUser').value.trim(); 

    if (!user || !pass || !cpf || !date) {
        alert("Preenhca todos os campos");
        return;
    }

    //Pega o array de usuários cadastrados o localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    //Tenta encontrar o usuário
    const userExists = users.some(u => u.username === user);
    if (userExists) {
        alert("Usuário já existe. tente outro nome ou faça login");
        return;
    }

    // Caso não exista, adiciona ao array e salva no localStorage
    users.push({ username: user, password: pass, cpf: cpf, dateUser: date });
    localStorage.setItem('users', JSON.stringify(users));
    
    // Se chegou aqui, login foi bem suscedido
    alert("registrado com sucesso! Agora você pode fazer login.");
    window.location.href = "login.html"; // Redireciona

    registerForm.reset();
});