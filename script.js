function validate() {
    var flag = 1;
    if(document.forms["myform"]["firstname"].value == "" || document.forms["myform"]["lastname"].value == "" || document.forms["myform"]["email"].value == "" || document.forms["myform"]["phone"].value == "" || document.forms["myform"]["dob"].value == "" || document.forms["myform"]["address"].value == "") {
        flag = 0;
    }flag

    if(flag == 0) {
        alert("Fill all the details");
    }
    
    if (document.form-validate.firstname.value == "") {
        alert('Enter your firstname');
        flag = 0;
    }
    if (document.form-validate.lastname.value == "") {
        alert('Enter your lastname');
        flag = 0;
    }
    if (document.form-validate.email.value == "") {
        alert('Invalid email');
        flag = 0;
    }

    if (document.form-validate.phone.value == "") {
        alert('Enter your Phone number');
        flag = 0;
    }

    if (document.form-validate.dob.value == "") {
        alert('Enter date of birth');
        flag = 0;
    }
    if (document.form-validate.address.value == "") {
        alert('Enter your address');
        flag = 0;
    }

    if(flag == 1) {
        window.open("message.html");
    }
    
}