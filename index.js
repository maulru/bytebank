import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Mauro", 13246204020);

const contaCorrente1 = new ContaCorrente(cliente1, 1005);
const contaPoupanca = new ContaPoupanca(500, cliente1, 1005);

contaCorrente1.depositar(500);
contaCorrente1.sacar(100);
contaPoupanca.sacar(10);

//console.log(contaPoupanca);
//console.log(contaCorrente1);
