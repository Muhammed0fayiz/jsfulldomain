//var is funtional scopping
// function ex(){
// var a=78
// }


// console.log(a)
var a=101
///CANNOT GET
function example() {
    var x = 1;
    if (true) {
        var y = 2;
    }
    console.log(x); // 1
    console.log(y); // 2 (accessible because 'var' is function scoped)
    console.log(a);
}
example();
// console.log(x); // Error: x is not defined
