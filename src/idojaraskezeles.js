import * as readline from 'node:readline/promises';
import fs from 'node:fs';
import NapiIdojaras from "./napi_idojaras.js";

async function maiidojaras() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    const nap = new Date().getDay();
    const maxHomerseklet = await rl.question("\tAdd meg a mai napi max. hőmérsékletet: ");
    const minHomerseklet = await rl.question("\tAdd meg a mai napi min. hőmérsékletet: ");
    const idojaras = await rl.question("\tAdd meg a mai napi időjárást: ");
    rl.close();
    return new NapiIdojaras(nap, maxHomerseklet, minHomerseklet, idojaras);
}

async function beolvas() {
    const fileContent = await fs.promises.readFile("./idojaras.csv", "utf-8");
    const lines = fileContent.split("\n");
    const idojarasok = [];
    for (let i = 1; i < lines.length; i++) {     
        if (lines[i] === "") {
            continue;
        }   
        const [nap, minHomerseklet, maxHomerseklet, idojaras] = lines[i].trim().split(";");
        idojarasok.push(new NapiIdojaras(nap, maxHomerseklet, minHomerseklet, idojaras));
    }
    return idojarasok;
}

export { maiidojaras, beolvas };