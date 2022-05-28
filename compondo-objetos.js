// Objestos
const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12365478912",
    email: "andre@email.com",
    fones: ["11123456789", "11258369147"]
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc:"20/03/2022"
}

console.log(cliente);

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)
