function doSomethingWithVar() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally: " + i);
}
doSomethingWithVar();
function doSomethingWithLet() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("hello");
    console.log("Finally: " + i);
}
doSomethingWithLet();
