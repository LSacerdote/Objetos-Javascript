const cliente = {
    nome:"João",
    idade:32,
    email:"joao@.com.br",
    telefone:["1155555555", "1144444444"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
          console.log("Saldo insuficiente");
        } else {
          this.saldo -= valor;
          console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
      },
    };
    
    cliente.efetuaPagamento(25);