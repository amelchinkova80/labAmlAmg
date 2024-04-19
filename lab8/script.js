const firstAndLastName = document.getElementById("first_and_last");
const email = document.getElementById("email");
const tel_number = document.getElementById("tel_number");
const productPreferences = document.getElementById("product");
const productQuantity = document.getElementById("quantity");
const orderButton = document.getElementById("order_button");
const mainSection = document.getElementById("main_section");

// Индикаторы корректности заполнения полей формы
let firstLastNameFlag = false;
let emailFlag = false;
let telephoneNumberFlag = false;
let productPreferencesFlag = false;
let productQuantityFlag = false;

firstAndLastName.addEventListener("change", function () {
    const message = document.getElementById("first_and_last_check");
    const regex = /^[а-яА-ЯA-Za-z]{2,15} [а-яА-Яa-zA-Z]{2,15}$/;

    if (regex.test(this.value)) {
        message.style.color = "green";
        message.innerHTML = "Корректный ввод";
        firstLastNameFlag = true;
        return true;
    }
    else {
        message.style.color = "red";
        message.innerHTML = this.value ? `Содержимое поля (${this.value}) некорректно. Шаблон ввода: Иван Иванов` : "";
        firstLastNameFlag = false;
        return false;
    }
});

email.addEventListener("change", function () {
    const message = document.getElementById("email_check");
    const regex = /^[a-zA-Z0-9]{2,20}@[a-z]{2,10}\.[a-z]{2,5}$/;

    if (regex.test(this.value)) {
        message.style.color = "green";
        message.innerHTML = "Корректный ввод";
        emailFlag = true;
        return true;
    }
    else {
        message.style.color = "red";
        message.innerHTML = this.value ? `Содержимое поля (${this.value}) некорректно. Шаблон ввода: qwerty@.com` : "";
        emailFlag = false;
        return false;
    }
});

tel_number.addEventListener("change", function () {
    const message = document.getElementById("telnum_check");
    const regex = /^\+7[0-9]{10}$/;

    if (regex.test(this.value)) {
        message.style.color = "green";
        message.innerHTML = "Корректный ввод";
        telephoneNumberFlag = true;
        return true;
    }
    else {
        message.style.color = "red";
        message.innerHTML = this.value ? `Содержимое поля (${this.value}) некорректно. Шаблон ввода: +7XXXXXXXXXX` : "";
        telephoneNumberFlag = false;
        return false;
    }
});

productPreferences.addEventListener("change", function () {
    const message = document.getElementById("product_check");
    const regex = /^[A-Za-z\sа-яА-Я0-9\.\,\;\:]{2,50}$/;

    if (regex.test(this.value)) {
        message.style.color = "green";
        message.innerHTML = "Корректный ввод";
        productPreferencesFlag = true;
        return true;
    }
    else {
        message.style.color = "red";
        message.innerHTML = this.value ? `Содержимое поля (${this.value}) некорректно` : "";
        productPreferencesFlag = false;
        return false;
    }
});

productQuantity.addEventListener("change", function () {
    const message = document.getElementById("quantity_check");
    const regex = /^[0-9]{1,3}$/;

    if (regex.test(this.value)) {
        message.style.color = "green";
        message.innerHTML = "Корректный ввод";
        productQuantityFlag = true;
        return true;
    }
    else {
        message.style.color = "red";
        message.innerHTML = this.value ? `Содержимое поля (${this.value}) некорректно. Максимально можно заказать только 999 единиц товара` : "";
        productQuantityFlag = false
        return false;
    }
})

// При успешном заказе товара цвет кнопки меняется на зеленый (в противном случае на красный)

orderButton.addEventListener("click", function (event) {
    if (!firstLastNameFlag || !emailFlag || !telephoneNumberFlag || !productPreferencesFlag || !productQuantityFlag) {
        alert("Одно или несколько полей заполнены некорректно! Также, возможно, у вас заполнены не все поля");
        this.style.backgroundColor = "#f42626";
        event.preventDefault();
    }
    else {
        this.style.backgroundColor = "#29ff34";
    }
});

// Изменение цвета блока section (класс main) при нажатии на него
let sectionClickCounter = 0;

mainSection.addEventListener("click", function () {
    if (sectionClickCounter % 2 === 0) {
        this.style.backgroundColor = "#d0f098";
    }
    else {
        this.style.backgroundColor = "white";
    }

    sectionClickCounter++;
});