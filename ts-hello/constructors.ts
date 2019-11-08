/*multiple constructor not allowed but you can make constructor parameters optional.
 if you have made one parameter optional 
then all afterward paramters must be optional*/
class CoordinateTypeA{
    x:number;
    y:number;

    constructor(x?:number,y?:number){
        this.x=x;
        this.y=y;
    }

    draw() {
        console.log("X: "+this.x+", Y: "+this.y);
    } 
}
let coordinateTypeA=new CoordinateTypeA();
coordinateTypeA.draw();
//modifiers public private protected. by default all are public.
class CoordinateTypeB{
    private x:number;
    private y:number;

    constructor(x?:number,y?:number){
        this.x=x;
        this.y=y;
    }

    draw() {
        console.log("X: "+this.x+", Y: "+this.y);
    } 
}

let coordinateTypeB=new CoordinateTypeB();
coordinateTypeB.draw();
