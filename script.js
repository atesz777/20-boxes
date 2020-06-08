let name = "Attila"
console.log(name)

function printNumbersTill(N) {
    for (let i = 0; i <= N; i++) {
        console.log(i)
}}

printNumbersTill(15);

function getGreetingTo(name) {
    return 'Hello ' + name + '!'
}


console.log(getGreetingTo('Mark'))

function printValues(array) {
    
}

let myNumbers = [10, 20, 30, 40]

myNumbers.forEach((number) => {
    console.log(number)
})