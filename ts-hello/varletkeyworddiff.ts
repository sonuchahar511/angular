function doSomethingWithVar(){
    for(var i=0;i<5;i++){
        console.log(i);
    }
    console.log("Finally: "+i);
}

doSomethingWithVar();


/* tsc compiler convert ts code to js code es5(ECMASCRIPT 5) version i.e. let keyword will be 
converted into var keyword.
tsc compiler reports let keyword errors but still generates valid js code.

function doSomethingWithLet(){
    for(let i=0;i<5;i++){
        console.log(i);
    }
    console.log("hello");
    console.log("Finally: "+i);
}
doSomethingWithLet();

in es6 2015 onwards let keyword is available in javascript.

NOTE: USE LET KEYWORD TO DEFINE VARIALBES. 
*/