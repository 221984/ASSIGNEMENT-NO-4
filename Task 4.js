var id = promp("enter your email address");
var a;
if (id.indexof("@") !== -1) {
    for (var k = 0; k < id.length-1; k++) {
        if (id.charAt(k) === (fromCharCode(65-90) ||fromCharCode(97-122))) {
            if (id.slice(indexOf("@")+1, (id.length()-indexOf("@"))) === (fromCharcode(65-90) ||fromCharcode(97-122)) {
                a = true;
                break;     

            }           
            

        }

    }        
    document.write("valid email id");
    
}
else{
    a=false;
    document.write("invalid email id");
}