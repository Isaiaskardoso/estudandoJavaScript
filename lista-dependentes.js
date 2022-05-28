// Objestos
const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12365478912",
    email: "andre@email.com",
    fones: ["11123456789", "11258369147"],
    dependentes: [{
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2022"
    }] 

}

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"
})

// console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente =>
dependente.dataNasc==="04/01/2014" )

console.log(filhaMaisNova[0].nome);




