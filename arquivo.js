const cliente = {
    nome : "Jose",
    idade :'32',
    cpf :'53804222333',
    email:'jose@.com.br'
};

console.log(cliente.nome);
console.log(cliente.idade);
console.log(cliente.cpf);   
console.log(cliente.email);
console.log(`O Nome do cliente é ${cliente.nome} e ele tem ${cliente.idade} anos.`);
console.log(`Os 3 Primeiros digitos do cpf são ${cliente.cpf.substring(0,3)}`);	