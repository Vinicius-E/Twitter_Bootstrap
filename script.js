const carro = new Object();
carro.cor = "Branco";
carro.modelo = "Volkswagen Golf 2.0 Mi Sportline 8v Flex 4p Tiptronic";
carro.ano = 2011;
carro.velocidade = "A Milhão!";

const carro1 = {
    cor: "Preto",
    modelo: "Volkswagen Golf 2.0 Mi Sportline 8v Flex 4p Tiptronic",
    ano: 2011,
    velocidade: "Parece um Tobata!"
}

function meuCarro() {
    alert("Modelo: " + carro.modelo + " \nCor: " + carro.cor + " | Ano: " + carro.ano + " | Velocidade: " + carro.velocidade)
}

function meuCarro1() {
    alert("Modelo: " + carro1.modelo + " \nCor: " + carro1.cor + " | Ano: " + carro1.ano + " | Velocidade: " + carro1.velocidade)
}

const obj = {
    nome: "Vinicius Eduardo da Silva",
    idade: 19,
    cidade: "Blumenau",

    familia: {
        mae: "Lucia Leite da Silva",
        pai:  "Celso Carlos da Silva",
        irmãos:["Muriel", "Wellington", "Fábio"],
        irmãs: ["Bruna", "Francieli", "Taiana"]
    }
}

function meuObj() {
    alert("Meu Nome: " + obj.nome + " | Idade: " + obj.idade + " | Cidade: " +
obj.cidade + "\nMinha Familia !^_^!: \n" + "Mãe: " + obj.familia.mae + "Pai: " + obj.familia.pai + 
"Irmão 1: " + obj.familia.irmãos[0] + " | Irmão 2: " + obj.familia.irmãos[1])
}

