
var password = prompt("Please enter your password \n" = "a. it should contain alphabatic and numbers\n" + "b.It should not start with a number");
var alphabets = /[A-Za-z]/g
var numbers = /[0-9]/g
var alp_numb = /[A-Za-z](?=,"[0-9]/g

if(password === ""){
    alert("Password should not be empty empty")
}
else if(password.lenght<8){
    alert("Password must be of lenght 8");
}
else if(!Password.match(alp_numb)){
    alert("Password must contain alphabets and number");

}
else{
    alert("Correct Password!")
}