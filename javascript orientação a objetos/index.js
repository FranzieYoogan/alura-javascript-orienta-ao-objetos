import  {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo",11122233309);







const cliente2 = new Cliente("Alice",88822233309); /*cliente1 e cliente 2 sao os objetos e a class o molde(instancia) */




const contaCorrenteRicardo = new ContaCorrente(1001,cliente1);



contaCorrenteRicardo.depositar(500);


const conta2 = new ContaCorrente(102,cliente2);




let valor = 200;
contaCorrenteRicardo.transferir(200,conta2);


console.log("valor: ",valor);
console.log(cliente2);
console.log(contaCorrenteRicardo)
console.log("acessando contador: ",ContaCorrente.numeroDeContas)