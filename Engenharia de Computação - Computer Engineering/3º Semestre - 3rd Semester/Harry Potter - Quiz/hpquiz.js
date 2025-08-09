let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')

let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')
let e = document.querySelector('#e')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')


// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}


const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    alternativaE : "Alternativa E",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Qual o total de livros sobre o Universo Harry Potter que foram publicados (incluindo peças de teatro, prólogos, histórias, etc)?",
    alternativaA : "7",
    alternativaB : "8",
    alternativaC : "9",
    alternativaD : "11",
    alternativaE : "14",
    correta      : "14",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual é o nome completo de Nick Quase Sem Cabeça - o fantasma que frequentava os corredores da Grifinória?",
    alternativaA : "Sir Nicholas de Mimsy Porpington",
    alternativaB : "Sir Nicholas Porpington de Mimsy",
    alternativaC : "Nicholas de Porpington Sir Mimsy",
    alternativaD : "Nicholas de Mimsy Sir Porpington",
    alternativaE : "Sir Mimsy Nicholas de Porpington",
    correta      : "Sir Nicholas de Mimsy Porpington",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : " Quantos anos tinha Nicholas Flamel, o co-criador da Pedra Filosofal, quando começou a destruí-la?",
    alternativaA : "667 Anos",
    alternativaB : "666 Anos",
    alternativaC : "665 Anos",
    alternativaD : "664 Anos",
    alternativaE : "663 Anos",
    correta      : "665 Anos",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Quantas escadas ao todo o castelo mágico de Hogwarts tinha?",
    alternativaA : "142 Escadas",
    alternativaB : "143 Escadas",
    alternativaC : "144 Escadas",
    alternativaD : "145 Escadas",
    alternativaE : "146 Escadas",
    correta      : "142 Escadas",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Por qual outro nome é também conhecido Wolfsbane e Monkshood?",
    alternativaA : "Acônito",
    alternativaB : "Visgo do diabo",
    alternativaC : "Bubotúbera",
    alternativaD : "Verbena",
    alternativaE : "Folha de tentáculo venoso",
    correta      : "Acônito",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "No jogo de Quadribol, quantas faltas possíveis existem?",
    alternativaA : "400 Faltas",
    alternativaB : "500 faltas",
    alternativaC : "600 Faltas",
    alternativaD : "700 Faltas",
    alternativaE : "800 Faltas",
    correta      : "700 Faltas",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "No final de 'Harry Potter e a Pedra Filosofal', qual foi o número final de pontos que Grifinória e Sonserina tiveram?",
    alternativaA : "480 e 470 respectivamente",
    alternativaB : "482 e 472 respectivamente",
    alternativaC : "484 e 474 respectivamente",
    alternativaD : "486 e 476 respectivamente",
    alternativaE : "488 e 478 respectivamente",
    correta      : "482 e 472 respectivamente",
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "Quantos ingredientes tinha a poção polissuco?",
    alternativaA : "4 ingredientes",
    alternativaB : "5 ingredientes",
    alternativaC : "6 ingredientes",
    alternativaD : "7 ingredientes",
    alternativaE : "8 ingredientes",
    correta      : "7 ingredientes",
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "Qual é o nome da empresa em que Vernon Dursley, tio de Harry Potter, trabalhou?",
    alternativaA : "Sorveteria de Florean Fortescue",
    alternativaB : "Madam Malkin Roupas Para Todas as Ocasiões",
    alternativaC : "Zonko's Joke Shop",
    alternativaD : "Dervish and Banges",
    alternativaE : "Grunnings",
    correta      : "Grunnings",
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "Como é a cicatriz acima do joelho esquerdo de Alvo Dumbledore?",
    alternativaA : "Um mapa perfeito de Hogwarts",
    alternativaB : "Um mapa perfeito de Hogsmeade",
    alternativaC : "Um mapa perfeito de Londres",
    alternativaD : "Um mapa perfeito da Irlanda",
    alternativaE : "Um mapa perfeito do metrô de Londres.",
    correta      : "Um mapa perfeito do metrô de Londres.",
}

const q11 = {
    numQuestao   : 11,
    pergunta     : "Qual é a velocidade máxima que um cabo de vassoura Firebolt pode atingir?",
    alternativaA : "0 km/h a 260 km/h em 10 segundos",
    alternativaB : "0 km/h a 240 km/h em 10 segundos",
    alternativaC : "0 km/h a 200 km/h em 10 segundos",
    alternativaD : "0 km/h a 180 km/h em 10 segundos",
    alternativaE : "0 km/h a 150 km/h em 10 segundos",
    correta      : "0 km/h a 240 km/h em 10 segundos",
}

const q12 = {
    numQuestao   : 12,
    pergunta     : "Se alguém levasse chocolate a bordo do Nôitibus, quanto seria o preço do eventual bilhete?",
    alternativaA : "14 foices",
    alternativaB : "15 foices",
    alternativaC : "16 foices",
    alternativaD : "17 foices",
    alternativaE : "18 foices",
    correta      : "14 foices",
}

const q13 = {
    numQuestao   : 13,
    pergunta     : "Qual era o nome do artilheiro irlandês que marcou o primeiro gol na Copa Mundial de Quadribol?",
    alternativaA : "Aidan Lynch",
    alternativaB : "Victor Krum",
    alternativaC : "Mullet C",
    alternativaD : "Keeper",
    alternativaE : "Tróia (Troy)",
    correta      : "Tróia (Troy)",
}

const q14 = {
    numQuestao   : 14,
    pergunta     : "Qual fileira abriga a profecia sobre Harry e Lord Voldemort na Casa da Profecia?",
    alternativaA : "Linha 94",
    alternativaB : "Linha 95",
    alternativaC : "Linha 96",
    alternativaD : "Linha 97",
    alternativaE : "Linha 98",
    correta      : "Linha 97",
}

const q15 = {
    numQuestao   : 15,
    pergunta     : "Quantas Horcruxes foram feitas?",
    alternativaA : "6 Horcruxes, sem incluir Harry",
    alternativaB : "7 Horcruxes, sem incluir Harry",
    alternativaC : "7 Horcruxes, incluindo Harry",
    alternativaD : "8 Horcruxes, sem incluir Harry",
    alternativaE : "8 Horcruxes, incluindo Harry",
    correta      : "8 Horcruxes, incluindo Harry",
}

const q16 = {
    numQuestao   : 16,
    pergunta     : "Qual era o nome do elfo doméstico de Hepzibah Smith",
    alternativaA : "Hokey",
    alternativaB : "Dobby",
    alternativaC : "Winky",
    alternativaD : "Monstro",
    alternativaE : "Aragogue",
    correta      : "Hokey",
}

const q17 = {
    numQuestao   : 17,
    pergunta     : " Qual é o código de cinco dígitos que se precisa discar para entrar no Ministério da Magia?",
    alternativaA : "6-2-4-4-2",
    alternativaB : "6-2-2-4-4",
    alternativaC : "6-4-2-4-2",
    alternativaD : "2-4-6-2-4",
    alternativaE : "2-6-4-2-4",
    correta      : "6-2-4-4-2",
}

const q18 = {
    numQuestao   : 18,
    pergunta     : "Como Ginny nomeou seu puff pigmeu de estimação?",
    alternativaA : "Arnaldo",
    alternativaB : "Roberto",
    alternativaC : "Reginaldo",
    alternativaD : "Oswaldo",
    alternativaE : "Naldo",
    correta      : "Arnaldo",
}

const q19 = {
    numQuestao   : 19,
    pergunta     : "Qual é o nome do amigo de Dudley que acompanha os Dursleys e Harry ao zoológico?",
    alternativaA : "Thomas",
    alternativaB : "James",
    alternativaC : "Smith",
    alternativaD : "Pierre",
    alternativaE : "Piers",
    correta      : "Piers",
}

const q20 = {
    numQuestao   : 20,
    pergunta     : "Qual é o codinome de Fred Weasley no Potterwatch?",
    alternativaA : "Esquilo",
    alternativaB : "Raposa",
    alternativaC : "Leão",
    alternativaD : "Lebre",
    alternativaE : "Tigre",
    correta      : "Raposa",
}

const q21 = {
    numQuestao   : 21,
    pergunta     : "Hannah Abbott é classificada em qual casa?",
    alternativaA : "Grifinória",
    alternativaB : "Lufa-Lufa",
    alternativaC : "Corvinal",
    alternativaD : "Salazar Sonserina",
    alternativaE : "Essa personagem não é retratada nos livros e filmes do Universo de Harry Potter",
    correta      : "Lufa-Lufa",
}

const q22 = {
    numQuestao   : 22,
    pergunta     : "Depois de visitar Gringotes, qual loja Harry vai primeiro no Beco Diagonal?",
    alternativaA : "Borgin and Burkes Store",
    alternativaB : "Olivaras",
    alternativaC : "As vestes de Madame Malkin para todas as ocasiões",
    alternativaD : "Floreios e Borrões",
    alternativaE : "Empório das Corujas",
    correta      : "As vestes de Madame Malkin para todas as ocasiões",
}

const q23 = {
    numQuestao   : 23,
    pergunta     : "Qual é a primeira fala do filme, 'Harry Potter e a Pedra Filosofal'?",
    alternativaA : "Eu deveria saber que você estaria aqui.",
    alternativaB : "Não faz bem viver sonhando e se esquecer de viver, lembre-se.",
    alternativaC : "Afinal, para a mente bem estruturada, a morte é apenas a grande aventura seguinte",
    alternativaD : "A verdade é uma coisa bela e terrível, e, portanto, deve ser tratada com grande cautela",
    alternativaE : "Chame-o de Voldemort. Sempre chame as coisas pelo nome que têm. O medo de um nome aumenta o medo da coisa em si",
    correta      : "Eu deveria saber que você estaria aqui.",
}

const q24 = {
    numQuestao   : 24,
    pergunta     : "Referente à questão anterior, o que todas as alternativas tem em comum?",
    alternativaA : "São falas do roteiro de Harry Potter e a Pedra Filosofal",
    alternativaB : "São falas do roteiro de Harry Potter e a Câmara secreta, exceto a frase: 'Eu deveria saber que você estaria aqui.'",
    alternativaC : "São falas de Hermione, exceto a frase: Eu deveria saber que você estaria aqui.''",
    alternativaD : "São falas de Dumbledore, exceto a frase: 'Eu deveria saber que você estaria aqui.'",
    alternativaE : "São todas falas de Dumbledore",
    correta      : "São todas falas de Dumbledore",
}

const q25 = {
    numQuestao   : 25,
    pergunta     : "Em 'Harry Potter e o Prisioneiro de Azkaban', o que Rony faz com o bicho-papão depois que ele toma a forma de uma aranha?",
    alternativaA : "Ele imagina o bicho-papão usando patins",
    alternativaB : "Ele imagina o bicho-papão se transformando no Snape",
    alternativaC : "Ele imagina o bicho-papão se transformando em um palhaço",
    alternativaD : "Ele imagina o bicho-papão se transformando em um Dementador",
    alternativaE : "Ele imagina o bicho-papão se trnaformando em um lobisomem",
    correta      : "Ele imagina o bicho-papão usando patins",
}

const q26 = {
    numQuestao   : 26,
    pergunta     : "Em 'Harry Potter e o Cálice de Fogo', contra que tipo de dragão Harry Potter luta?",
    alternativaA : "Rabo Córneo Húngaro",
    alternativaB : "Negro das Ilhas Hébridas",
    alternativaC : "Chifres-Longos Romeno",
    alternativaD : "Focinho-Curto Sueco",
    alternativaE : "Verde-Galês-Comum",
    correta      : "Rabo Córneo Húngaro",
}

const q27 = {
    numQuestao   : 27,
    pergunta     : "Em 'Harry Potter e a Ordem da Fênix', quem segura Harry após a queda dolorosa de Sirius através do véu?",
    alternativaA : "Snape",
    alternativaB : "Hermione",
    alternativaC : "Haggrid",
    alternativaD : "Dumbledore",
    alternativaE : "Remo Lupin",
    correta      : "Remo Lupin",
}

const q28 = {
    numQuestao   : 28,
    pergunta     : "Quem disse: 'A varinha escolhe o mago, Sr. Potter.'",
    alternativaA : "Olivaras",
    alternativaB : "Dumbledore",
    alternativaC : "Haggrid",
    alternativaD : "Hermione",
    alternativaE : "Ron Weasley",
    correta      : "Olivaras",
}

const q29 = {
    numQuestao   : 29,
    pergunta     : "Em 'Harry Potter e as Relíquias da Morte', a quem pertencem as duas varinhas que Ollivander identifica para Harry?",
    alternativaA : "Belatrix e Voldemort",
    alternativaB : "Voldemort e Snape",
    alternativaC : "Belatrix e Snape",
    alternativaD : "Belatrix e Pedro Pettigrew ",
    alternativaE : "Bellatrix e Draco",
    correta      : "Bellatrix e Draco",
}

const q30 = {
    numQuestao   : 30,
    pergunta     : "Que tipo de chave de portal foi usada para transportar Harry para a Copa Mundial de Quadribol?",
    alternativaA : "Um cálice",
    alternativaB : "Uma bota velha",
    alternativaC : "Um livro",
    alternativaD : "Uma vassoura",
    alternativaE : "Um caldeirão",
    correta      : "Uma bota velha",
}

const q31 = {
    numQuestao   : 31,
    pergunta     : "Qual ano Grindewald conhece e fica amigo de Dumbledore?",
    alternativaA : "1897",
    alternativaB : "1898",
    alternativaC : "1899",
    alternativaD : "1900",
    alternativaE : "1901",
    correta      : "1899",
}

const q32 = {
    numQuestao   : 32,
    pergunta     : "Em que ano nasce Tom Riddle?",
    alternativaA : "1926",
    alternativaB : "1927",
    alternativaC : "1298",
    alternativaD : "1929",
    alternativaE : "1930",
    correta      : "1926",
}

const q33 = {
    numQuestao   : 33,
    pergunta     : "Em que ano ocorre o fim da Segunda Guerra Mundial no mundo dos trouxas?",
    alternativaA : "1935",
    alternativaB : "1940",
    alternativaC : "1945",
    alternativaD : "1950",
    alternativaE : "1955",
    correta      : "1945",
}

const q34 = {
    numQuestao   : 34,
    pergunta     : "Em que ano a Ordem da Fênix é criada?",
    alternativaA : "1960",
    alternativaB : "1970",
    alternativaC : "1975",
    alternativaD : "1980",
    alternativaE : "1985",
    correta      : "1970",
}

const q35 = {
    numQuestao   : 35,
    pergunta     : "Qual a data de nascimento de Harry Potter?",
    alternativaA : "31 de Julho de 1980",
    alternativaB : "31 de Junho de 1980",
    alternativaC : "31 de Agosto de 1980",
    alternativaD : "31 de Julho de 1981",
    alternativaE : "31 de Junho de 1981",
    correta      : "31 de Julho de 1980",
}

const q36 = {
    numQuestao   : 36,
    pergunta     : "Em que ano acontece a primeira derrota de Lord Voldemort?",
    alternativaA : "1979",
    alternativaB : "1980",
    alternativaC : "1981",
    alternativaD : "1982",
    alternativaE : "1983",
    correta      : "1981",
}

const q37 = {
    numQuestao   : 37,
    pergunta     : "Em que ano Harry Potter chega à Hogwarts",
    alternativaA : "1990",
    alternativaB : "1991",
    alternativaC : "1992",
    alternativaD : "1993",
    alternativaE : "1994",
    correta      : "1991",
}

const q38 = {
    numQuestao   : 38,
    pergunta     : "Em que ano acontece a última derrota de Lord Voldemort?",
    alternativaA : "1997",
    alternativaB : "1998",
    alternativaC : "1999",
    alternativaD : "2000",
    alternativaE : "2001",
    correta      : "1998",
}

const q39 = {
    numQuestao   : 39,
    pergunta     : "Em que ano Alvo Potter chega à Hogwarts, segundo eventos do livro 'Harry Pottern e a Criança Amaldiçoada?",
    alternativaA : "2015",
    alternativaB : "2016",
    alternativaC : "2017",
    alternativaD : "2018",
    alternativaE : "2019",
    correta      : "2017",
}

const q40 = {
    numQuestao   : 40,
    pergunta     : "Por quantos anos os Weasleys tiveram Perebas como animal de estimação?",
    alternativaA : "10 anos",
    alternativaB : "11 anos",
    alternativaC : "12 anos",
    alternativaD : "13 anos",
    alternativaE : "14 anos",
    correta      : "12 anos",
}

const q41 = {
    numQuestao   : 41,
    pergunta     : "A que ato mágico a palavra 'esplinching' está conectada?",
    alternativaA : "Desaparição",
    alternativaB : "Flutuação",
    alternativaC : "Levitação",
    alternativaD : "Aparição",
    alternativaE : "Petrificação",
    correta      : "Aparição",
}

const q42 = {
    numQuestao   : 42,
    pergunta     : "Pergunta: Em 'Harry Potter e o Prisioneiro de Azkaban', para qual número de página o Professor Snape pede para sua classe recorrer?",
    alternativaA : "354",
    alternativaB : "364",
    alternativaC : "374",
    alternativaD : "384",
    alternativaE : "394",
    correta      : "394",
}

const q43 = {
    numQuestao   : 43,
    pergunta     : "No Ministério da Magia, para qual departamento Arthur Weasley trabalha?",
    alternativaA : "Acidentes e Catástrofes Mágicas",
    alternativaB : "Regulamentação e Controle das Criaturas Mágicas",
    alternativaC : "Transportes Mágicos",
    alternativaD : "Execução das Leis da Magia",
    alternativaE : "Uso Indevido de Artefatos Trouxas",
    correta      : "Uso Indevido de Artefatos Trouxas",
}

const q44 = {
    numQuestao   : 44,
    pergunta     : "O que a palavra mágica 'episkey' alcança?",
    alternativaA : "Cura de ferimentos leves",
    alternativaB : "Cura de ferimentos profundos",
    alternativaC : "Causa de ferimentos leves",
    alternativaD : "Causa de ferimentos profundos",
    alternativaE : "Na ajuda como contra-feitiço",
    correta      : "Cura de ferimentos leves",
}

const q45 = {
    numQuestao   : 45,
    pergunta     : "Na primeira parte de 'Harry Potter e as Relíquias da Morte', quem viaja ao lado de Hermione durante a Batalha dos Sete Potters?",
    alternativaA : "Lupin",
    alternativaB : "Luna Lovegood",
    alternativaC : "Ron Weasley",
    alternativaD : "Kingsley Shacklebolt",
    alternativaE : "Harry Potter",
    correta      : "Kingsley Shacklebolt",
}

const q46 = {
    numQuestao   : 46,
    pergunta     : "Em que ano o filme 'Harry Potter e a Câmara Secreta' foi lançado?",
    alternativaA : "2001",
    alternativaB : "2002",
    alternativaC : "2003",
    alternativaD : "2004",
    alternativaE : "2005",
    correta      : "2002",
}

const q47 = {
    numQuestao   : 47,
    pergunta     : "O que é o Patrono de Luna Lovegood?",
    alternativaA : "Uma lebre",
    alternativaB : "Uma raposa",
    alternativaC : "Um cervo",
    alternativaD : "Uma lontra",
    alternativaE : "Um lobo",
    correta      : "Uma lebre",
}

const q48 = {
    numQuestao   : 48,
    pergunta     : "Quem entre os Marotos também era conhecido como Pontas?",
    alternativaA : "Tiago Potter",
    alternativaB : "Sirius Black",
    alternativaC : "Remo Lupin",
    alternativaD : "Pedro Pettigrew",
    alternativaE : "Severus Snape",
    correta      : "Tiago Potter",
}

const q49 = {
    numQuestao   : 49,
    pergunta     : "Qual tem o menor tempo de execução entre todos os filmes de 'Harry Potter'?",
    alternativaA : "Harry Potter e a Pedra Filosofal",
    alternativaB : "Harry Poter e o Cálioce de Fogo",
    alternativaC : "Harry Potter e o Enigma do Príncepe",
    alternativaD : "Harry Potter e as Relíquias da Morte - Parte 1",
    alternativaE : "Harry Potter e as Relíquias da Morte - Parte 2",
    correta      : "Harry Potter e as Relíquias da Morte - Parte 2",
}

const q50 = {
    numQuestao   : 50,
    pergunta     : "Snape é o verdadeiro pai de Harry Potter?",
    alternativaA : "Não, pois o pai de Harry era Tiago Potter.",
    alternativaB : "Sim, e isso pode ser percebido de forma sutil nos filmes e livros.",
    alternativaC : "Não, os livros e filmes não falam sobre isso.",
    alternativaD : "Talvez, mas isso é algo que é discutido até hoje.",
    alternativaE : "A J.K. Rolling ainda não teve esse debate com os fãs.",
    correta      : "Sim, e isso pode ser percebido de forma sutil nos filmes e livros.",
}

const q51 = {
    numQuestao   : 51,
    pergunta     : "Na manhã de seu aniversário de 11 anos, quantos presentes Dudley recebe de seus pais?",
    alternativaA : "33",
    alternativaB : "34",
    alternativaC : "35",
    alternativaD : "36",
    alternativaE : "37",
    correta      : "36",
}

const q52 = {
    numQuestao   : 52,
    pergunta     : "Qual é o nome completo do filho do meio de Harry e Ginny?",
    alternativaA : "Alvo Severo Potter",
    alternativaB : "Alvo Siruius Potter",
    alternativaC : "Tiago Sirius Potter",
    alternativaD : "Tiago Severo Potter",
    alternativaE : "Sirius Tiago Potter",
    correta      : "Alvo Severo Potter",
}

const q53 = {
    numQuestao   : 53,
    pergunta     : "Qual personagem foi o primeiro usuário da sala de requisitos?",
    alternativaA : "Snape",
    alternativaB : "Lupin",
    alternativaC : "Minerva MacGonagall",
    alternativaD : "Dumbledore",
    alternativaE : "Dolores Umbridge",
    correta      : "Dumbledore",
}

const q54 = {
    numQuestao   : 54,
    pergunta     : "No programa de rádio 'Potterwatch', qual era o codinome de Lupin?",
    alternativaA : "Hazz",
    alternativaB : "Lua",
    alternativaC : "Lesminha",
    alternativaD : "Rômulo",
    alternativaE : "Zabini",
    correta      : "Rômulo",
}

const q55 = {
    numQuestao   : 55,
    pergunta     : "Que posição Harry jogou no time de Quadribol da Grifinória?",
    alternativaA : "Batedor",
    alternativaB : "Apanhador",
    alternativaC : "Goleiro",
    alternativaD : "Buscador",
    alternativaE : "Artilheiro",
    correta      : "Apanhador",
}

const q56 = {
    numQuestao   : 56,
    pergunta     : "A qual personagem pertencia originalmente o chapéu seletor?",
    alternativaA : "Grodric Gryffindor",
    alternativaB : "Dumbledore",
    alternativaC : "Minerva McGonagall",
    alternativaD : "Salazar Sonserina",
    alternativaE : "Haggrid",
    correta      : "Grodric Gryffindor",
}

const q57 = {
    numQuestao   : 57,
    pergunta     : "Em 'Harry Potter e a Ordem da Fênix', o que Bungy the Budgie faz para se refrescar durante o verão?",
    alternativaA : "Esqui na neve",
    alternativaB : "Surfar",
    alternativaC : "Nadar",
    alternativaD : "Tomar vários banhos",
    alternativaE : "Esqui aquático",
    correta      : "Esqui aquático",
}

const q58 = {
    numQuestao   : 58,
    pergunta     : "De que cor os Lovegoods se vestiram para o casamento de Bill e Fleur?",
    alternativaA : "Azul",
    alternativaB : "Verde",
    alternativaC : "Roxo",
    alternativaD : "Branco",
    alternativaE : "Amarelo",
    correta      : "Amarelo",
}

const q59 = {
    numQuestao   : 59,
    pergunta     : "Quem foi o primeiro prisioneiro a escapar de Azkaban?",
    alternativaA : "Sirius Black",
    alternativaB : "Barty Crouch Jr.",
    alternativaC : "Bellatrix",
    alternativaD : "Rodolfo Lestrange",
    alternativaE : "Rabastan Lestrange",
    correta      : "Barty Crouch Jr.",
}

const q60 = {
    numQuestao   : 60,
    pergunta     : "Para que serve o feitiço 'Anapneo'",
    alternativaA : "Para desengasgar",
    alternativaB : "Para curar um feimento na pele",
    alternativaC : "Para colocar um osso que está quebrado no seu devido lugar",
    alternativaD : "Para enxergar no escuro",
    alternativaE : "Para controlar aranhas",
    correta      : "Para desengasgar",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTÕES
const questoes = [q0, q1, q2 , q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25, q26, q27, q28, q29, q30, q31, q32, q33, q34, q35, q36, q37, q38, q39, q40, q41, q42, q43, q44, q45, q46, q47, q48, q49, q50, q51, q52, q53, q54, q55, q56, q57, q58, q59, q60]

let numero = document.querySelector('#numero')
let total = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length - 1)
console.log("Total de quatões: " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1ª QUESTÃO COMPLETA, PARA INICIAR O QUIZ
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD
e.textContent = q1.alternativaE

// ONFIGURAR O VALUE INICIAL DA 1ª QUESTÃO
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')
e.setAttribute('value', '1E')

// PARA MONTAR AS PRÓXIMAS QUESTÕES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    e.textContent = questoes[nQuestao].alternativaE
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    e.setAttribute('value', nQuestao+'E')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
    e.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
    e.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        console.log("Acertou")
        nQuestao.classList.add('acertou')
        pontos += 10
    } else {
        console.log("Errou!")
        nQuestao.classList.add('errou')
    }

    // ATUALIZAR PLACAR
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    //BLOQUEAR A ESCOLHA DE OPÇÕES
    bloquearAlternativas()

    setTimeout(function() {
        
        let proxima = numeroDaQuestao+1
        

        if(proxima > totalDeQuestoes) {
            console.log("Fim de jogo!")
            fimDeJogo()
        } else {
            proximaQuestao(proxima)
            nQuestao.classList.remove('acertou')
            nQuestao.classList.remove('errou')
        }
    }, 1000)
    desbloquearAlternativas()
}

function fimDeJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent = "Você conseguiu " + pontos + "" + pont

    aviso.textContent = "Você conseguiu " + pontos + "" + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""
    e.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
    d.setAttribute('value', '0')
    e.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTÃO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        location.reload();
    }, 5000)
}