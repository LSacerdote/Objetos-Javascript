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

cliente.endereco.push({
    rua:"Av. Domingos",
     numero: 255 ,
      apartamento: false, 
    }); 

    cliente.endereco.push({
        rua:"Av. jacin",
         numero: 333 ,
          apartamento: true,
          complemento: "ap 111", 
        }); 

const listaApartamentos = cliente.endereco.filter((endereco) => endereco.apartamento === true);

console.log(listaApartamentos);