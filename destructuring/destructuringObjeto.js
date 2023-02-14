const cliente1 = {
    name: "Raí vaz",
    email: "rai.exemplo@email.com",
    age: 23,
    college: "UniItalo"
};

const cliente2 = {
    name: "Gabriela de sá",
    email: "gabi@email.com",
    age: 22,
    college: "Usp"
};

function getBirdYear(age){
    const year = new Date().getFullYear();
    const birdYear = year - age;
    return birdYear
};


//sabendo que meu argumento da função será um objeto posso usar de forma desestruturada
function showPersonalInfo({name, email, age, college}){
    const birdYear = getBirdYear(age)
    console.log('O nome da pessoa é: ' + name)
    console.log('O ano de nascimento é: ' + birdYear)
    console.log('Para entrar em contato envie um email para: ' + email)
}

showPersonalInfo(cliente1)
console.log()
showPersonalInfo(cliente2)