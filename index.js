import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 10123150512);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Luan", 5000, 50513590540);
gerente.cadastrarSenha("123456");

const cliente = new Cliente("Lais", 10123152560,"123")
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "12346");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123456");

console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);
console.log(clienteEstaLogado);
