// sistema de cadastro de eventos
// validacao de data
let dataAtual = new Date(2021,08,30);

let dataEvento = new Date(2021,09,12);

if (dataEvento > dataAtual) {
    console.log("Evento permitido")
} else {
    console.log("Data inválida")
}

// Condicional de idade
let idade = 27;

if(idade >= 18) {
    console.log("Cadastro permitido")
} else {
    console.log("Cadastro não permitido para menores de 18 anos")
}

// condicionais de número de participantes
let listaParticipantes = ["Joao", "Sandra", "Joelma"]

if (listaParticipantes.length < 100) {
    console.log ("Cadastro concluído com sucesso")
} else {
    console.log ("Cadastro não permitido. O número de participantes excedeu o limite")
}