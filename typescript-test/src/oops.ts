class Chai{
    flavour: string;
    price: number;

    constructor(flavour: string, price:number){
        this.flavour = flavour;
        this.price = price
    }
}

const masalaChai = new Chai("masala", 45);

masalaChai.flavour = "adrak";


//Access Modifiers in typescript

class Coffee{
    public flavour:string = "milk";
    private secretIngredients = "Cardamom";

    reveal(){
        return this.secretIngredients; //ok, cause u cant direct access the private
    }

}

const c = new Coffee();

//protected

class Shop{
    protected shopName = "Coffee Corner";
}

class Branch extends Shop{
    getName(){
        return this.shopName //ok
    }
}

//another way to define the private

class Wallet{
    #balance = 100 //private
    getBalance(){
        return this.#balance;
    }
}

const w = new Wallet();
w.getBalance();

//readonly properties in the typescript

class Cup{
    readonly capacity: number = 250;
    constructor(capacity:number){
        this.capacity=capacity;
    }
}

//another example with controls gets

class ModernChai{
    private _sugar = 3; //it is just the convention to use _ otheriwise its okay if not

    get sugar(){
        return this._sugar;
    }

    set sugar(value:number){
        if(value > 5) throw new Error("Too sweet");
        this._sugar = value;
    }
}

const cobj = new ModernChai();
cobj.sugar = 5;

//static

class EkChai{
    static shopName = "coder cafe"

    constructor(public flavour:string){

    }
}

console.log(EkChai.shopName);

//abstract

abstract class Drink{
    abstract make():void
}

class MyChai extends Drink{
    make(){
        console.log("Brewing chai");
    }
}


//compositions

class Heater{
    heat(){}
}

class ChaiMaker{
    constructor(private heater: Heater){

    }

    make(){
        this.heater.heat();
    }
}