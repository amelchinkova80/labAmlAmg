function checkFirst() {
    let name_surname = document.getElementById("first").value;
    let regex = /[А-ЯA-Z][а-яА-ЯA-Za-z]{2,15} [А-ЯA-Z][а-яА-Яa-zA-Z]{2,15}/;
    if (regex.test(name_surname)) {
        document.getElementById("first_Check").style.color = "green";
        document.getElementById("first").style.backgroundColor = "rgb(163, 238, 163)";
        document.getElementById("first_Check").innerHTML = "Вы ввели корректные данне";
    return true;
    
    }
    else {
        document.getElementById("first_Check").style.color = "red";
        document.getElementById("first").style.backgroundColor = "rgb(255, 99, 99, 0.91)";
        document.getElementById("first_Check").innerHTML = "Укажите данные в формате: Имя Фамилия";
    return false;
    }
}

function checkEmail() {
    let em = document.getElementById("email").value;
    let regex = /[a-zA-Z0-9]{2,20}@[a-z]{2,10}\.[a-z]{2,5}/;
    if (regex.test(em)) {
        document.getElementById("email_Check").style.color = "green";
        document.getElementById("email").style.backgroundColor = "rgb(163, 238, 163)";
        document.getElementById("email_Check").innerHTML = "Вы ввели корректную почту";
    return true;
    
    }
    else {
        document.getElementById("email_Check").style.color = "red";
        document.getElementById("email").style.backgroundColor = "rgb(255, 99, 99, 0.91)";
        document.getElementById("email_Check").innerHTML = "Укажите почту в формате: qwerty@.com";
    return false;
    }
}

function checkTelNum() {
    let tl_nm = document.getElementById("tel_number").value;
    let regex = /\+7[0-9]{10}/;
    if (regex.test(tl_nm)) {
        document.getElementById("telnum_Check").style.color = "green";
        document.getElementById("tel_number").style.backgroundColor = "rgb(163, 238, 163)";
        document.getElementById("telnum_Check").innerHTML = "Вы ввели корректный номер телефона";
    return true;
    
    }
    else {
        document.getElementById("telnum_Check").style.color = "red";
        document.getElementById("tel_number").style.backgroundColor = "rgb(255, 99, 99, 0.91)";
        document.getElementById("telnum_Check").innerHTML = "Укажите номер в формате: +79991234567";
    return false;
    }
}

function checkTovar() {
    let tov = document.getElementById("tovar").value;
    let regex = /[A-Za-z\sа-яА-Я]{2,50}/;
    if (regex.test(tov)) {
        document.getElementById("tovar_Check").style.color = "green";
        document.getElementById("tovar").style.backgroundColor = "rgb(163, 238, 163)";
        document.getElementById("tovar_Check").innerHTML = "Товар найден";
    return true;
    
    }
    else {
        document.getElementById("tovar_Check").style.color = "red";
        document.getElementById("tovar").style.backgroundColor = "rgb(255, 99, 99, 0.91)";
        document.getElementById("tovar_Check").innerHTML = "Товар указан неверно";
    return false;
    }
}