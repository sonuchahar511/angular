//function having so many parameters not desirable.. use object intstead..
let drawPoint = (a,b,c,x,y,z)=>{
    //...
}

drawPoint(1,1,1,1,1,1);

let anotherDrawPoint= (point)=>{
    //......
}
anotherDrawPoint({x:1})
anotherDrawPoint({x:1,y:2})
/*for avoiding ambiguity what kind of point object is we can use in-line annotations.
or which property point object has.*/
let anotherDrawPoint2= (point: {x:number,y:number})=>{
    //......
} 
// anotherDrawPoint2({x:1}) error.
anotherDrawPoint2({x:1,y:2})

//using interface
interface PointA{
    x:number,
    y:number;
}
let anotherDrawPoint3= (point: PointA)=>{
    //......
} 
anotherDrawPoint3({x:1,y:2})

let getDistance=(pointA:Point,pointB: Point)=>{
    //... 
}

interface Coordinates{
    x:number,
    y:number,
    draw: () => void;
}
