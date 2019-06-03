//Object Inheritance using constructor function.
function Vehicle(type,noOfWheels) {
    this.type= type;    
    this.noOfWheels=noOfWheels;
    this.getVehicleInfo=function () {
        console.log("Vehicle type is " + this.type + " has "+this.noOfWheels+" wheels and manufacturer is "+this.manufacturer);
        return this;
    };
 };
 Vehicle.prototype.driveVehicle=function(){
    console.log("Driving vehicle of type "+this.type+" and manufacturer is "+this.manufacturer);
 };

function Car(manufacturer){
    Vehicle.call(this,"car",4);
    this.manufacturer= manufacturer;    
};
Car.prototype=new Object(Vehicle.prototype);
function Byke(manufacturer){
    Vehicle.call(this,"byke",2);
    this.manufacturer= manufacturer;    
};
Byke.prototype=new Object(Vehicle.prototype);
function BMW(){
    Car.call(this,"BMW");    
}
BMW.prototype=new Object(Car.prototype);
function Audi(){    
    Car.call(this,"Audi");
}
Audi.prototype=new Object(Car.prototype);
function Honda(){
    Byke.call(this,"Honda");    
}
Honda.prototype=new Object(Byke.prototype);

new Audi().getVehicleInfo().driveVehicle();
new BMW().getVehicleInfo().driveVehicle();
new Honda().getVehicleInfo().driveVehicle();
