console.log("Уважаемые посетители! Собака не продается!")
let marinasAge = 16
let dashasAge = 14
console.log(marinasAge*dashasAge)
let marinasAgeString  = "ger"
let dashasAgeString = "ker"
console.log(marinasAgeString*dashasAgeString)
let sisters = ["Lubka", "Marka", "Darka"]
console.log(sisters, sisters.length, sisters.length-1)
sisters.push("Layma")
sisters.push("Shkesh")
sisters.push("Malishka Vika")
sisters[0] = "Lubka-luribka"
console.log(sisters)
let age = 16
let isStudent = age==0
console.log(isStudent)
let firstname = "Дарла"
let secondname = "Мариша"
let isSameName = firstname==secondname
console.log(isSameName)
let isClever = age>20 || secondname == "Любка"
console.log(isClever)
let sinhronizedSwimmer = {
    "name": "Marina",
    "coach": "Olga Aleksandrovna",
    "age": 16,
    "programms": ["Solo", "Technosolo", "Elements"]
}
console.log(sinhronizedSwimmer)
sinhronizedSwimmer.year = 2003
sinhronizedSwimmer.age = 17
console.log(sinhronizedSwimmer)
for (let i = 0; i<sisters.length; i++) {
    console.log("Привет, дорогая", sisters[i])
}
let homeArray = []
for (let i = 0; i<10; i++) {
    homeArray.push(i)
}
console.log(homeArray)
function printNames(firstName, secondName) {
    console.log("Мариша")
    console.log("Даша")
    console.log(firstName)
    console.log(secondName)
}
printNames("Любаша", "Ливень")
printNames("Шкеш", "Лайма")
function sum(a, b) {
    return a+b
}
sum(78953,-1)
function getSinhronizedSwimmerAge(sinSwimmer) {
    return sinSwimmer.age
}
getSinhronizedSwimmerAge(sinhronizedSwimmer)
let firstNumber = 134
let secondNumber = 777
console.log("Привет, сумма чисел", firstNumber, "и", secondNumber, "=", sum(firstNumber, secondNumber ))
