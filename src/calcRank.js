const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

nameHero();

function nameHero() {
    rl.question('Insira seu nickName: ', (name) => {
        console.log(`Seu nickname é: ${name}`);
        balanceVitories();
    });
}

function balanceVitories (victories, defeats) {
    rl.question('Qual o saldo de vitórias atual: ', (victories) => {
        rl.question('Qual o saldo de derrotas atual: ', (defeats) => {
            victories = parseInt(victories);
            defeats = parseInt(defeats);

            let total = victories - defeats;
            console.log(`Saldo de Vitorias: ${total}`);
            /*rl.close();*/
            nivelHero();
        });
    });  
}

function nivelHero(total) {
    switch(total) {
        case total <= 10:
            console.log("Sua quantidade de vitórias é menor que 10. Seu Rank é FERRO!");
        break;
        case total <= 10:
            console.log("Sua quantidade de vitórias for entre 11 e 20. Seu Rank é BRONZE!");
        break;
        case total <= 10:
            console.log("Sua quantidade de vitórias for entre 21 e 50. Seu Rank é PRATA!");
        break;
        case total <= 10:
            console.log("Sua quantidade de vitórias for entre 51 e 80. Seu Rank é OURO!");
        break;
        case total <= 10:
            console.log("Sua quantidade de vitórias for entre 81 e 90. Seu Rank é DIAMANTE!");
        break;
        case total <= 10:
            console.log("Sua quantidade de vitórias for entre 91 e 100. Seu Rank é LENDÁRIO!");
        break;
        case total <= 10:
            console.log("Sua quantidade de vitórias maior ou igual a 101. Seu Rank é IMPORTAL!");
        break;
    }
}