const arguments=process.argv.slice(2);

function FlatArea(radius){
    let pi=3.14;
    return pi*radius*radius;
}
console.log("Dairenin Yarıçapı="+arguments[0]);
console.log("Dairenin Alanı="+FlatArea(Number(arguments[0])));
