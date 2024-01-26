const cliente = {
    nome : "Jose",
    idade :'32',
    cpf :'53804222333',
    email:'jose@.com.br'
};


console.log(`O Nome do cliente é ${cliente["nome"]} e ele tem ${cliente["idade"]} anos.`);
console.log(`Os 3 Primeiros digitos do cpf são ${cliente.cpf.substring(0,3)}`);	

const chaves = ["nome", "idade", "cpf", "email", "altura"];
chaves.forEach( (chave) => {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
})