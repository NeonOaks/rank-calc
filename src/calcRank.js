const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

nameHero();

function nameHero() {
    rl.question('Insira seu nickName: ', (name) => {
        console.log(`Seu nickname é: ${name}`);
        balanceVitories(name);
    });
}

function balanceVitories (name) {
    rl.question('Qual o saldo de vitórias atual: ', (victories) => {
        rl.question('Qual o saldo de derrotas atual: ', (defeats) => {
            victories = parseInt(victories);
            defeats = parseInt(defeats);

            let total = victories - defeats;
            console.log(`Saldo de Vitorias: ${total}`);
            
            nivelHero(name,total);
        });
    });  
}

function nivelHero(name,total) {
   let rank;
   let nivel;
    if (total <= 10) {
        rank = "Sua quantidade de vitórias é menor ou igual a 10. Seu Rank é FERRO!";
        nivel = "Ferro";
    } else if (total >= 11 && total <= 20) {
        rank = "Sua quantidade de vitórias for entre 11 e 20. Seu Rank é BRONZE!";
        nivel = "Bronze";
    } else if (total >= 21 && total <= 50) {
        rank = "Sua quantidade de vitórias for entre 21 e 50. Seu Rank é PRATA!";
        nivel = "Prata";
    } else if (total >= 51 && total <= 80) {
        rank = "Sua quantidade de vitórias for entre 51 e 80. Seu Rank é OURO!";
        nivel = "Ouro";
    } else if (total >= 81 && total <=90) {
        rank = "Sua quantidade de vitórias for entre 81 e 90. Seu Rank é DIAMANTE!";
        nivel = "Diamante";
    } else if (total >= 91 && total <= 100) {
        rank = "Sua quantidade de vitórias for entre 91 e 100. Seu Rank é LENDÁRIO!";
        nivel = "Lendário";
    } else {
        rank = "Sua quantidade de vitórias maior ou igual a 101. Seu Rank é IMORTAL!";
        nivel = "Imortal";
    }

    console.log(`Seu Rank é: ${rank}`);
    console.log(`O Herói ${name}, tem de saldo  ${total} vitórias, está no nível ${nivel}. `);
    rl.close();
    
}