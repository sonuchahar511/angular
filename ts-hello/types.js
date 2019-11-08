//posible types in typescripts
var anyVar;
var a;
var b;
var c;
var d;
var e = [1, 2, 3.0];
var f = [a, 'a', true];
/* in javascript type of variable can be changed on the fly.
i.e. count can hold 5 as well as 'a' value.
let count =5;
count='a';*/
//in js we have const keyword similar to enum
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Blue;
//ALWAYS SET VALUES OF ENUM EXPLICITLY.

//typeassertions
let message="abc";
let isEndsWithC=message.endsWith('c');

let message1;
message1="abcc";
let endsWithC=(<string>message1).endsWith('c');