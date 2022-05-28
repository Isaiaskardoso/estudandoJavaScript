// Objestos Cliente
const cliente = {

    nome: "Andre",
    idade: 36,
    cpf: "12365478912",
    email: "andre@email.com",
    fones: ["11123456789", "11258369147"],

    dependentes:[

        {
            nome: "Sara Silva",
            parentesco: "filha",
            dataNasc: "20/03/2022"
        },
        {
            nome: "Samia Maria",
            parentesco: "filha",
            dataNasc: "04/01/2014"
        }  

    ],

        saldo: 100,
        depositar: function(valor) {       
        this.saldo += valor
    }
}


function oferecerSeguro(obj){

    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes"))

    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);            
    }
}

//tipos diferentes de retorno!
console.log(Object.entries(cliente));
console.log(Object.values(cliente));
oferecerSeguro(cliente);