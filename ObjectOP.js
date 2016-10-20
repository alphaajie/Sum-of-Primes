function Car(name, model, type){
 if (name !== undefined) this.name = name
 else this.name = "General"
 if(model !== undefined) this.model = model
 else this.model = "GM"
 this.type = type
 this.speed = 0 + ' km/h'
 
 
 if(this.name === "Porshe" || this.name === "Koenigsegg") this.numOfDoors = 2;
 else this.numOfDoors = 4;
 
 
 if(this.type === "trailer") this.numOfWheels = 8;
 else this.numOfWheels = 4;
 
 
 if(this.type !== "trailer") this.isSaloon = true;
 else this.isSaloon = false;

}
Car.prototype.drive = function(value){
 if(this.type === "trailer"){
     this.speed = (value * 11) + " km/h"
   }
   