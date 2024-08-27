const PI=3.14;
function CiricleArea(Yarıçap){
 return console.log("Dairenin alanı="+PI*Yarıçap*Yarıçap);
};
function circleCircumference(Yarıçap){
   return console.log("Dairenin çevresi="+2*PI*Yarıçap);
};
module.exports={
  CiricleArea,
  circleCircumference
};