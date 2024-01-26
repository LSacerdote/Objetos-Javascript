const cliente = {
    nome:"João",
    idade:32,
    email:"joao@.com.br",
    telefone:["1155555555", "1144444444"]
};

cliente.endereco = [{
    rua:"Av. Principal",
    numero: 123,
    apartamento: true,
    complemento: "ap 934",
}
];

const chavesObjetos = Object.keys(cliente);

console.log(chavesObjetos);

if (!chavesObjetos.includes("endereco")) {
    console.error("Erro, é necessario ter um endereço cadastrado");
} 