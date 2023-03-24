// user id

// function allNumeric(inputtext){
//     var number = /^[0-9]+$/;
//     if(inputtext.value.match(number)){
//         alert("your registration number has accepted...");
//         return true;
//     }
//     else{
//         alert("you can input only numeric characters...");
//         return false;
//     }
// }


// user id has spesific range

// function userid_validation(){
//     var userid = form.text;
//     var userid_len = userid.value.length;

//     if(userid_len == 0 || userid_len < 6 || userid_len > 10){
//         alert("It should not empty / length should be between 6 and 10...");
//         return false;
//     }
//     else{
//         alert("your registration number is valid...");
//         return true;
//     }
// }


// phone number is valid or not,

// function is_phoneNumber(){
//     var pNumber = form.text;
//     var no_of_digit = /^\d{10}$/;
//     if(pNumber.value.match(no_of_digit)){
//         alert("this phone number is valid...");
//         return true;
//     }
//     else{
//         alert("this phone number is not valid...");
//         return false;
//     }
// }



// check string length

// function stringLength(inputText,min_len,max_len){
//     if(inputText.value.length < min_len || inputText.value.length > max_len){
//         alert("this string is not valid, because it has "+inputText.value.length+" characters.");
//         return false;
//     }
//     else{
//         alert("this string is valid...");
//         return true;
//     }
// }





// Registration Form


// check valid email

function validEmail(textEmail){
    var valid_email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var reg_Email = textEmail;
    if(valid_email.test(reg_Email) == false){
        return false;
    }
    else{
        return true;
    }
}    

// check confirm password

function confirmPassword(p1,p2){
    if(p1 == p2) return true;
    else return false;
}

// check country selector

function countrySelect(country){
    if(country == "Default") return false;
    else return true;
}

// check gender

function validSex(umsex){
    x = 0;
    if(umsex[0].checked){
        x++;
    }
    if(umsex[1].checked){
        x++;
    }
    if(x == 0) return false;
    else return true;
}

// validaton form

function validForm(form){
    var user = form.username.value;
    var p_word = form.password.value;
    var c_pword = form.confirm_password.value;
    var address = form.address.value;
    var email = form.email.value;
    var country = form.select.value;
    var sex = form.sex;
    var returnvalue = false;
    var a = true;
    var b = true;
    var c = true;
    var d = true;
    var e = true;

    if(user == "" || p_word == "" || c_pword == "" || address == "" || email == ""){
        alert("there are empty field,please fill them");
        a = false;
    }
    if(confirmPassword(p_word,c_pword) == false){
        alert("password do not match");
        b = false;
    }
    if(validEmail(email) == false){
        alert("invalid email address");
        c = false;
    }
    if(countrySelect(country) == false){
        alert("please select the country");
        d = false;
    }
    if(validSex(sex) == false){
        alert("please select the gender");
        e = false;
    }
    if(a == true && b == true && c == true && d == true && e == true){
        returnvalue = true;
    }

    return returnvalue;
}


