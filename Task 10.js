var a = prompt("Enter a Number");
var b = parceInt(prompt("how many decimal places you want to round"));
var res = a.toFixed(b);
document.write("number before round off: "+a+"<br>");

document.write("number after round off: "+ res);