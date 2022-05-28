const clientes = [
    {
        nome: "Andre",
        cpf: "12365478921",
        dependentes: [{
            nome:"Sara",
            parantesco: "filha",
            dataNasc: "20/03/2011",            
        },
        {
            nome: "Samia", 
            parantesco: "Filha",
            dataNasc: "filha",
        }],
    
    },
    {
        nome: "Juliana",
        cpf: "78936912345",
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha", 
            dataNasc: "30/08/2020"
        }],
    }
    
];

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];

console.table(listaDependentes);

