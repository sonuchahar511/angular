class Point{
    x:number;
    y:number;
    draw() {
        console.log("X: "+this.x+", Y: "+this.y);
    } 
    getDistance(anotherPoint: Point){
        //...
    }
}
let point1:Point;
/** get runtime error can not read property draw of undefined.as point1 object
 *  not initalized.  */
point1.draw();

let point2=new Point();
/** output: X: undefined, Y: undefined. 
 * NO DEFAULT VALUE GET ASSIGNED AT OBJECT INITILIZATION
 */
point2.draw();