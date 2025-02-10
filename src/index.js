import { beolvas, maiidojaras } from "./idojaraskezeles.js";
import NapiIdojaras from "./napi_idojaras.js";

//ToString Test
console.log("ToString Test: ");
const idoJaras = new NapiIdojaras(1, 25, 15, "napos");
console.log("\tExpected: Nap: 1, Max. hőmérséklet: 25, Min. hőmérséklet: 15, Időjárás: napos");
console.log(`\tResult:   ${idoJaras.toString()} \n \n`);


console.log("Mai Időjárás Test (adja meg a mai adatokat): ");

const idoJarasok = await beolvas();
const maiIdoJaras = await maiidojaras();
const nap = new Date().getDay();


console.log(`\n\tResult:   ${maiIdoJaras.toString()}\n`);

console.log("\nMai Date().getDay Test: ");
console.log(`\tExpected: ${nap}`);
console.log(`\tResult:   ${maiIdoJaras.nap} \n \n`);

idoJarasok.push(maiIdoJaras);

let maxHomerseklet = 0;
let index = 0;
idoJarasok.forEach((idojaras, i) => {
    if (idojaras.maxHomerseklet > maxHomerseklet) {
        maxHomerseklet = idojaras.maxHomerseklet;
        index = i;
    }
});


console.log(` A legmagasabb hőmérsékletű nap: ${index}-elem a listaba (nap: ${idoJarasok[index].toString()})`);
console.log('\n Az egész lista:');
idoJarasok.forEach((idojaras, i) => {
    console.log(`\t${i}-elem: ${idojaras.toString()}`);
});