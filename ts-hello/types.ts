//posible types in typescripts
let anyVar;
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3.0];
let f: any[] =[a,'a', true];
/* in javascript type of variable can be changed on the fly.
i.e. count can hold 5 as well as 'a' value. 
let count =5;
count='a';*/
 //in js we have const keyword similar to enum
const ColorRed=0;
const ColorGreen=1;
const ColorBlue=2;

enum Color { Red = 0, Green = 1, Blue = 2 };
let backgroundColor=Color.Blue; 
 
//ALWAYS SET VALUES OF ENUM EXPLICITLY.

//typeassertions
let message="abc";
let isEndsWithC=message.endsWith('c');

let message1;
message1="abcc";
let endsWithC=(<string>message1).endsWith("c");
let alternativeWayEndsWith=(message1 as string).endsWith("c");