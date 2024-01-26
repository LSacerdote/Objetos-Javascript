const dados = require("../json/cliente.json");
console.log(dados);
console.log(typeof dados);


const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString)
console.log(typeof clienteEmString)


console.log(dados.nome);

JSON.parse(clienteEmString);
const obejeto = JSON.parse(clienteEmString);
console.log(obejeto)