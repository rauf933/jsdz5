let name = prompt('Введите свое имя');
let age = +prompt('Введите нынешний год');
let year = +prompt('Введите год рождения');
function params(name, age , year) {
    let god = age - year;
    console.log(name+',', 'Ваш возраст ' + god)
    return god;
}
params(name, age , year)