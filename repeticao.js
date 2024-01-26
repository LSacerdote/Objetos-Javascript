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

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function") {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    
    }
}