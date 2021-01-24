import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Mauro", 13246204020);
const cliente2 = new Cliente("Luana", 51382154250);

const contaCorrente1 = new ContaCorrente("1005", cliente1);
contaCorrente1.depositar(500);

const contaCorrente2 = new ContaCorrente("1001", cliente2);

contaCorrente1.transferir(200, contaCorrente2);

console.log(cliente1);
console.log(contaCorrente1);

console.log(ContaCorrente.numeroDeContas);
