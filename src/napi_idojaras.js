export default class NapiIdojaras {
    constructor(nap, maxHomerseklet, minHomerseklet, idojaras) {
        if (arguments.length !== 4) {
            throw new Error("Nem megfelelő számú paraméter!");
        }

        if(this.validate(maxHomerseklet) < this.validate(minHomerseklet)){
            throw new Error("A max. hőmérséklet nem lehet kisebb a min. hőmérsékletnél!");
        }

        this.nap = this.validate(nap);
        this.maxHomerseklet = this.validate(maxHomerseklet);
        this.minHomerseklet = this.validate(minHomerseklet);
        this.idojaras = this.validateIdojaras(idojaras);
    }

    validateIdojaras(idojaras) {
        const list = ["napos", "felhős", "esős", "ködös"];
        if (list.includes(idojaras)) {
            return idojaras;
        } else {
            throw new Error("A megadott időjárás nem megfelelő!");
        }

    }

    validate(a) {
        if (!isNaN(a)) {
            return parseInt(a);
        } else {
            throw new Error("A megadott érték nem szám!");
        }
    }

    toString() {
        return `Nap: ${this.nap}, Max. hőmérséklet: ${this.maxHomerseklet}, Min. hőmérséklet: ${this.minHomerseklet}, Időjárás: ${this.idojaras}`;
    }
}