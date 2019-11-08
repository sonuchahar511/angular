class CoordinateTypeC{
    constructor(private x?:number,private y?:number){}
    draw() {
        console.log("X: "+this.x+", Y: "+this.y);
    } 
}

let coordinateTypeC=new CoordinateTypeC();
coordinateTypeC.draw();