function getPasswordStrength(password){
    let s=0;
    if(password.length > 6){
        s++;
    }
    if(password.length > 10){
        s++;
    }
    if(/[A-Z]/.test(password)){
        s++;
    }
    if(/[0-9]/.test(password)){
        s++;
    }
    if(/[^A-Za-z0-9]/.test(password)){
        s++;
    }
    return s;
}

document.querySelector(".pw-meter #password").addEventListener('focus', function(){
    document.querySelector(".pw-meter .pw-strength").style.display = "block";
});

document.querySelector(".pw-meter .pw-display-toggle-btn").addEventListener("click", function(){
    var el = document.querySelector(".pw-meter .pw-display-toggle-btn");
    if(el.classList.contains("active")){
        document.querySelector(".pw-meter #password").setAttribute("type", "password");
        el.classList.remove("active");
    }else{
        document.querySelector(".pw-meter #password").setAttribute("type", "text");
        el.classList.add("active");
    }
});

document.querySelector(".pw-meter #password").addEventListener("keyup", function(e){
    let password = e.target.value;
    let strength = getPasswordStrength(password);
    let pwspans = document.querySelectorAll(".pw-meter .pw-strength span");
    strength = Math.max(strength , 1);
    
    pwspans[1].style.width = strength*20 + "%";
    if(strength<2){
        pwspans[0].innerText = "Weak";
        pwspans[1].color = "#111";
        pwspans[1].background = "#d13636";
        pwspans[1].classList.add('weak');
        if (pwspans[1].classList.contains('medium')){
            pwspans[1].classList.remove('medium');
        }
        if(pwspans[1].classList.contains('strong')){
            pwspans[1].classList.remove('strong');
        }

    }else if(strength>=2 && strength<=4){
        pwspans[0].innerText = "Medium";
        pwspans[1].color = "#111";
        pwspans[1].classList.add('medium');
        if(pwspans[1].classList.contains('strong')){
            pwspans[1].classList.remove('strong');
        }
    }
    else{
        pwspans[0].innerText = "Strong";
        pwspans[1].color = "#fff";
        //pwspans[1].style.backgroundColor = "#20a820";
        pwspans[1].classList.add('strong');
    }
});