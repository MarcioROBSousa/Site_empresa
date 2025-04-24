// Pega o formulário pelo ID
const dataForm = document.getElementById('dataForm');

dataForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede recarregar a página

  const user = document.getElementById('userName').value.trim();
  const pass = document.getElementById('senhaPass').value.trim();
  const cpf = document.getElementById('cpfPass').value.trim();
  const date = document.getElementById('datePass').value.trim(); 

  // Lê os usuários cadastrados do Local Storage
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // Tenta encontrar o usuário
  const foundUser = users.find(u => u.username === user);

  if (!foundUser) {
    alert("Usuário não encontrado! Cadastre-se ou tente outro nome.");
    return;
  }

  // Verifica a senha
  if (foundUser.password !== pass || foundUser.cpf !== cpf || foundUser.dateUser !== date) {
    alert("Senha incorreta! Tente novamente.");
    return;
  }

  // Se chegou aqui, login foi bem-sucedido
  alert("Login realizado com sucesso! Bem-vindo(a), " + user + ".");
  window.location.href = "index.html"; // Redireciona
});


