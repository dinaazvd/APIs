//Validador de Dados de Cadastro de Usuário
function validarUsuario(usuario) {
    const {nome, email, senha} = usuario || {};
    const erros = [];
    
    // Regra 1
    if (!nome || typeof nome !== 'string' || nome.trim().length < 3) {
        erros.push('O nome deve ter pelo menos 3 caracteres.');
    }
    // Regra 2
    if (!email || typeof email !== 'string') {
        erros.push('O email é inválido.');
    } else {
        const arrobaindex = email.indexOf('@');
        const pontoindex = email.indexOf('.', arrobaindex);
        if (arrobaindex === -1 || pontoindex === -1 || pontoindex <= arrobaindex + 1) {
            erros.push('O email é inválido.');
        }
    }
    // Regra 3
    if (!senha || typeof senha !== 'string' || senha.length < 6) {
        erros.push('A senha deve ter pelo menos 6 caracteres.');
    } else if (! /\d/.test(senha) ) {
        erros.push('A senha deve conter pelo menos um número.');
    }
    if (erros.length > 0) {
        return { valido: false, erros };
    }
    return { valido: true };
}
console.log(validarUsuario({ nome: "Al", email: "teste", senha: "123" }));
console.log(validarUsuario({ nome: "Carlos Silva", email: "carlos@provedor.com", senha: "senha123" }));


