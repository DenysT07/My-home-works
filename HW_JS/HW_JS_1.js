// Задания с разным количеством звездочек:)
// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

// // const age_2 = 18
// const age_3 = 60

// const checkage = function(age){
// if (age < age_2){
//     console.log( "You don’t have access cause your age is " + age + " It’s less then", age_2)
// }else if (age>=age_2 && age_3>age) {
//     console.log('Welcome  !')
// }else if(age>age_3) {
//     console.log('Keep calm and look Culture channe')
//  }
// else {
//     console.log("Technical work")
// }
// }
// checkage(17)
// checkage(18)
// checkage(61)

//2**:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
// const age_2 = 18
// const age_3 = 60



// const checkage = function(age){
//     if (typeof age == "number"){
// if (age < age_2){
//     console.log( "You don’t have access cause your age is " + age + " It’s less then", age_2)
// }else if (age>=age_2 && age_3>age) {
//     console.log('Welcome  !')
// }else if(age>age_3) {
//     console.log('Keep calm and look Culture channe')
//  }
// else {
//     console.log("Technical work")
// }
// }else {console.log('Oshibka')}
// } 
// checkage(17)
// checkage(18)
// checkage(61)
// checkage('ne number')

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

const age_2 = 18
const age_3 = 60



const checkage = function(age){
    if (!isNaN(age)&& age){
if (age < age_2){
    console.log( "You don’t have access cause your age is " + age + " It’s less then", age_2)
}else if (age>=age_2 && age_3>age) {
    console.log('Welcome  !')
}else if(age>age_3) {
    console.log('Keep calm and look Culture channe')
 }
else {
    console.log("Technical work")
}
}else {console.log('Oshibka')}
} 
checkage(17)
checkage(18)
checkage(61)
checkage('ne number')
checkage('2')
checkage('')
