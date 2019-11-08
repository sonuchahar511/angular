class CoordinateTypeD{
    constructor(private x?:number,private y?:number){}
    draw() {
        console.log("X: "+this.x+", Y: "+this.y);
    }
    getX(){
        return this.x;
    }
    setX(value){
        if(value<0)
            throw new Error("value can't be less than zero.");
        this.x=value;
    } 
}

let coordinateTypeD=new CoordinateTypeD();

let xValue_CoordinateTypeD=coordinateTypeD.getX();
coordinateTypeD.setX(10);

coordinateTypeD.draw();

class CoordinateTypeE{
    constructor(private _x?:number,private _y?:number){}
    draw() {
        console.log("X: "+this._x+", Y: "+this._y);
    }
    get x(){
        return this._x;
    }
    set x(value){
        if(value<0)
            throw new Error("value can't be less than zero.");
        this._x=value;
    } 
}

let coordinateTypeE=new CoordinateTypeE();
let xValue_CoordinateTypeE=coordinateTypeE.x;
coordinateTypeE.x=10;
coordinateTypeE.draw();