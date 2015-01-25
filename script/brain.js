function square(x) {
  return x * x;
}
function c2p() {
  var x = Number(document.getElementById('x').value);
  var y = Number(document.getElementById('y').value);
  var z = square(x) + square(y);
  var rad = Math.sqrt(z).toPrecision(3);
  //now start working on the Angel!
  var theta = Math.atan(y / x) * (180 / Math.PI);
  var angel; //This will hold the actula angel in Degrees 
  if (x > 0 && y > 0) {
    angel = theta;
  } else if (x < 0 && y > 0) {
    angel = 180 + theta;
  } else if (x < 0 && y < 0) {
    angel = 180 + theta;
  } else if (x > 0 && y < 0) {
    angel = 360 + theta;
  }
  var a = 'r:' + rad + ' Θ:' + angel.toPrecision(3); //rad is radius
  result = document.getElementById('result');
  result.innerHTML = a;
}
function p2c() {
 var r = Number(document.getElementById('r').value);
 var fie = Number(document.getElementById('fie').value) * (Math.PI / 180);
 var x = r * Math.cos(fie);
 var y = r * Math.sin(fie);
 var a = 'X:' + x.toPrecision(3) + ' Y:' + y.toPrecision(3);
  // result(a);
  result = document.getElementById('result');
  result.innerHTML = a;
}
