document.getElementById("email").addEventListener('keypresss', checkemail, false);

function checkemail() {
    var pat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var exp = document.getElementById("email").value;
    var az = pat.test(exp.toLowerCase());

    if (!az) {
        document.getElementById("reply").innerHTML = "Invalid email address";
        az = true;
    } else {
        document.getElementById("reply").innerHTML = "";
    }
}


document.getElementById("pass").addEventListener('keypress', checkpass, false);

function checkpass() {
    var pattern = /^(?=.*[!@#$%^&*])/;
    var expression = document.getElementById("pass").value;
    var a = pattern.test(expression.toLowerCase());

    if (!a) {
        document.getElementById("reply2").innerHTML = "Invalid password";
        a = true;
    } else {
        document.getElementById("reply2").innerHTML = "";
    }
}


function myFunction() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


/* New Account */
document.getElementById("nemail").addEventListener('keypress', checkNemail, false);

function checkNemail() {
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var expre = document.getElementById("nemail").value;
    var test = pattern.test(expre.toLowerCase());

    if (!test) {
        document.getElementById("ans3").innerHTML = "Invalid email address";
        test = true;
    } else {
        document.getElementById("ans3").innerHTML = "";
    }
}


document.getElementById("conemail").addEventListener('keyup', conformemail, false);

function conformemail() {
    //Store the password field objects into variables ...
    var pass1 = document.getElementById('nemail');
    var pass2 = document.getElementById('conemail');
    //Store the Confimation Message Object ...
    var message = document.getElementById('ans4');
    //Set the colors we will be using ...
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    //Compare the values in the password field 
    //and the confirmation field
    if (nemail.value == this.value) {
        //The passwords match. 
        //Set the color to the good color and inform
        //the user that they have entered the correct password 
        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Email Match!"
    } else {
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Email Do Not Match!"
    }
}

document.getElementById("psw").addEventListener('keypress', checkpsw, false);

function checkpsw() {
    var pattern = /^(?=.*[!@#$%^&*])/;
    var express = document.getElementById("psw").value;
    var s = pattern.test(express.toLowerCase());

    if (!s) {
        document.getElementById("ans5").innerHTML = "Password Must Contain Special Characters!";
        s = true;
    } else {
        document.getElementById("ans5").innerHTML = "";
    }
}

document.getElementById("conpsw").addEventListener('keyup', conpss, false);

function conpss() {

    var pas1 = document.getElementById('psw');
    var pas2 = document.getElementById('conpsw');

    var msg = document.getElementById('ans6');

    var gColor = "#66cc66";
    var bColor = "#ff6666";

    if (psw.value == this.value) {
        pas2.style.backgroundColor = gColor;
        msg.style.color = gColor;
        msg.innerHTML = "Passwords Match!"

    } else {
        pas2.style.backgroundColor = bColor;
        msg.style.color = bColor;
        msg.innerHTML = "Passwords Do Not Match!"
    }
}
var a = 0;
document.getElementById('phone').addEventListener('blur', checkphone, false);

function checkphone() {
    var ph = document.getElementById('phone').value;
    var pattern1 = /^\d{10}$/;
    var express1 = document.getElementById("phone").value;
    var s1 = pattern1.test(express1);
    if (s1) {
        var ele = document.getElementById("PhoneError")
        ele.parentNode.removeChild(ele);
    }
    if (!s1) {
        if (a != 1) {
            var btn = document.createElement("Label");
            btn.setAttribute("id", "PhoneError");
            btn.setAttribute('style', 'position:relative;left:800px;bottom:115px;color:red;');
            var t = document.createTextNode("Phone number is not valid");
            btn.appendChild(t);
            document.body.appendChild(btn);
            a = 1;
        }
        s1 = true;
    } else {
        document.getElementById('ans7').innerHTML = "";

    }

}


document.getElementById('ca').addEventListener('click', fill, false);

function fill() {

    var q = document.getElementById('phone').value;

    if (q === '') {

        alert('Please fill up the form!');

    } else {
        console.log('');
    }
}





/* Events*/

function dis() {
    alert("Welcome to Cineplex website!");

}


//clock

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var sl = today.getSeconds();
    m = checkTime(m);
    sl = checkTime(sl);
    document.getElementById('txte').innerHTML =
        h + ":" + m + ":" + sl;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}


//gallary

function getImage1(){
var img = document.getElementById("subPic1").src;
document.getElementById("defaultPic").src = img;
}

function getImage2(){
var img = document.getElementById("subPic2").src;
document.getElementById("defaultPic").src = img;
 }

function getImage3(){
var img = document.getElementById("subPic3").src;
document.getElementById("defaultPic").src = img;
 }

function getImage4(){
var img = document.getElementById("subPic4").src;
document.getElementById("defaultPic").src = img;
 }

function getImage5(){
var img = document.getElementById("subPic5").src;
document.getElementById("defaultPic").src = img;
 }

function getImage6(){
var img = document.getElementById("subPic6").src;
document.getElementById("defaultPic").src = img;
 }

var d = new Date();
document.getElementById("demo").innerHTML = d;



//hhh

function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}