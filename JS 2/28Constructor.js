class ToyotaCar{
    constructor(milage){
        console.log("Its a constructor"); //it will be run always
        this.milage = milage;
    }

    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

    saveBrand(brand){
        this.brandName = brand;
    }
}

console.log(ToyotaCar);

let Fortuner = new ToyotaCar("10"); // here it will go as a input to constructor only when we are defining it
//we can also put multiple inputs for constructor
console.log(Fortuner.start);

let Lexus = new ToyotaCar();
console.log(Lexus);

Fortuner.saveBrand("Fortuner");
console.log(Fortuner);
