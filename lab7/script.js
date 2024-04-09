function getRandomArbitrary(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
  }
if (confirm ("Сыграй в игру!")){
    let num = getRandomArbitrary(1, 11);
    //console.log(num); //вывод в консоль ответ
    let res = prompt('Угадай число от 1 до 10!', '...');
    let k=0;
    while (true){
        if (k < 4){
            if (res == num){
                k++;
                alert('Ты угадал число! Это было '+num+'! Число твоих попыток составило '+k+'!');
                break;
            } else if (num > res){
                k++;
                res = prompt('Загаданное число больше '+res+'!', '...');
            } else if (num < res){
                k++;
                res = prompt('Загаданное число меньше '+res+'!', '...');
            } else {
                alert('Попробуй ввести еще раз');
                break;
            }
        }
        else{
            alert('Попытки закончились. Это было число '+num+'! Испытай удачу еще раз!');
            break;
        }
    }
}
