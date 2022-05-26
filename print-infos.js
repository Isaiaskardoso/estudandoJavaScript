// Acessando valores de Objetos

// Objestos
const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12365478912",
    email: "andre@email.com"
}
        // templet ``
console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`);

console.log(cliente.cpf.substring(0,3));

