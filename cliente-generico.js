function Cliente(nome, cpf, email, saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const antonio = new Cliente("Antonio", "12365478912", "antonio@email.com", 100);

console.log(antonio)
