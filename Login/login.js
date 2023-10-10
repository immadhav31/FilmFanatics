let ph_em=0;

function Change_ph(){

    document.getElementById("user_name").value = '';
    document.getElementById("login-pass").value = '';

    if (ph_em == 0) {
        document.getElementById("ph_text").innerHTML = 'Use email instead';
        document.getElementById("user_name").placeholder = "Phone number";
        document.getElementById("ep_icon").setAttribute("class","uil uil-Phone");
        document.getElementById("user_name").setAttribute("type","number");
        ph_em=1;
    } else { 
        document.getElementById("ph_text").innerHTML = 'Use phone number instead';
        document.getElementById("user_name").placeholder = "Email ID";
        document.getElementById("ep_icon").setAttribute("class","uil uil-at");
        document.getElementById("user_name").setAttribute("type","email");
        ph_em=0;
    }
}

let rev = 0;

function reveal(){

    if(rev==0){
        document.getElementById("login-pass").setAttribute("type","text");
        document.getElementById("eyeb").setAttribute("class","uil uil-eye");
        rev = 1;
    } else {
        document.getElementById("login-pass").setAttribute("type","password");
        document.getElementById("eyeb").setAttribute("class","uil uil-eye-slash");
        rev = 0;
    }
}

let check_ph=0;

function Change_phone(){

    document.getElementById("user_name_1").value = '';
    document.getElementById("user_name_2").value = '';
    document.getElementById("login-pass-1").value = '';
    document.getElementById("login-pass-2").value = '';

    if (check_ph == 0) {
        document.getElementById("ph_text_1").innerHTML = 'Use email instead';
        document.getElementById("user_name_1").placeholder = "Phone number";
        document.getElementById("ep_icon_1").setAttribute("class","uil uil-Phone");
        document.getElementById("user_name_1").setAttribute("type","number");
        check_ph=1;
    } else { 
        document.getElementById("ph_text_1").innerHTML = 'Use phone number instead';
        document.getElementById("user_name_1").placeholder = "Email ID";
        document.getElementById("ep_icon_1").setAttribute("class","uil uil-at");
        document.getElementById("user_name_1").setAttribute("type","email");
        check_ph=0;
    }
}

function check(){
    let a = document.getElementById("login-pass-1").value;
    let b = document.getElementById("login-pass-2").value;

    if(a===b){
        return true;
    }
    else{
        alert('Both the passwords must be the same');
        return false;
    }
}

function signin(){
    document.getElementById("gen1").style.display = "unset";
    document.getElementById("img1").style.display = "unset";
    document.getElementById("gen2").style.display = "none";
    document.getElementById("img2").style.display = "none";
}

function signup(){
    document.getElementById("gen1").style.display = "none";
    document.getElementById("img1").style.display = "none";
    document.getElementById("gen2").style.display = "unset";
    document.getElementById("img2").style.display = "unset";
}