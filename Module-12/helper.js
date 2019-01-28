function validateForm() {
	var name=document.forms["myform"]["Name"].value;
	var comment=document.forms["myform"]["comm"].value;
	if(document.forms["myform"]["Name"].value == "") {
		alert("Please provide your name!");
        return false;
	}
	if(document.forms["myform"]["comm"].value == "") {
		alert("Enter a comment");
        return false;
	}	
	if(document.forms["myform"]["pwd"].value != "red") {
		alert("Enter correct password");
        return false;
	}
}

