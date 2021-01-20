class Cliente {
  nome;
  cpf;
  agencia;
  saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Mauro";
cliente1.cpf = 13246204020;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = "Luana";
cliente2.cpf = 51382154250;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1,cliente2);
