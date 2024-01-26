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

function LigarParaCliente(telefoneComercial, TelefoneResidencial){
  console.log(`Ligando para ${telefoneComercial}`);
  console.log(`Ligando para ${TelefoneResidencial}`);
}
LigarParaCliente(cliente.telefone[0], cliente.telefone[1]);

const encomenda = {
    destinatario: cliente.nome,
  ...cliente.endereco[0]
};
console.log(encomenda)