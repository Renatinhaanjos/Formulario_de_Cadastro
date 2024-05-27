document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cep = document.getElementById('cep').value;
    const uf = document.getElementById('uf').value;
    
    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Telefone:', telefone);
    console.log('CEP:', cep);
    console.log('UF:', uf);

    alert('Cadastro realizado com sucesso!');
});