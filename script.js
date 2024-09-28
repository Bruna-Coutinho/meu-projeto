let storyText = document.getElementById('story-text');
let choicesDiv = document.getElementById('choices');
let restartButton = document.getElementById('restart');

const story = {
    start: {
        text: "Bem-vindo à Floresta Encantada! Escolha seu personagem:",
        choices: [
            { text: "Guerreiro", next: "warrior" },
            { text: "Mago", next: "wizard" },
            { text: "Arqueiro", next: "archer" },
        ],
    },
    warrior: {
        text: "Você é um Guerreiro! O que deseja fazer?",
        choices: [
            { text: "Explorar a Floresta", next: "forest" },
            { text: "Visitar a Vila", next: "village" },
        ],
    },
    wizard: {
        text: "Você é um Mago! O que deseja fazer?",
        choices: [
            { text: "Estudar um feitiço", next: "spell" },
            { text: "Ir à Montanha", next: "mountain" },
        ],
    },
    archer: {
        text: "Você é um Arqueiro! O que deseja fazer?",
        choices: [
            { text: "Treinar sua mira", next: "training" },
            { text: "Explorar a Vila", next: "village" },
        ],
    },
    forest: {
        text: "Você encontrou uma criatura mágica! O que fará?",
        choices: [
            { text: "Lutar", next: "fight" },
            { text: "Fugir", next: "escape" },
        ],
    },
    village: {
        text: "Na Vila, você recebe uma missão. Aceita?",
        choices: [
            { text: "Aceitar", next: "accept" },
            { text: "Recusar", next: "refuse" },
        ],
    },
    spell: {
        text: "Você aprendeu um novo feitiço! O que fará agora?",
        choices: [
            { text: "Usar o feitiço", next: "useSpell" },
            { text: "Voltar para a Floresta", next: "forest" },
        ],
    },
    mountain: {
        text: "Na Montanha, você encontra um sábio. O que pergunta?",
        choices: [
            { text: "Sobre a Floresta", next: "wiseInfo" },
            { text: "Sobre magia", next: "magicInfo" },
        ],
    },
    training: {
        text: "Você melhora sua mira! O que fará agora?",
        choices: [
            { text: "Explorar a Floresta", next: "forest" },
            { text: "Ir à Vila", next: "village" },
        ],
    },
    fight: {
        text: "Você venceu a criatura! O tesouro é seu. Você é um herói!",
        choices: [],
    },
    escape: {
        text: "Você escapou, mas perdeu a chance do tesouro. Volte para tentar de novo.",
        choices: [],
    },
    accept: {
        text: "Você completou a missão e trouxe paz à Vila. Parabéns, herói!",
        choices: [],
    },
    refuse: {
        text: "Você optou por não ajudar. A Vila permanece em perigo.",
        choices: [],
    },
    useSpell: {
        text: "Você usou o feitiço e salvou um aldeão! Agora você é um verdadeiro herói!",
        choices: [],
    },
    wiseInfo: {
        text: "O sábio te ensina sobre a Floresta. Você retorna mais sábio.",
        choices: [],
    },
    magicInfo: {
        text: "O sábio compartilha segredos de magia. Você se torna um mago poderoso!",
        choices: [],
    },
};

function startGame() {
    showStory("start");
}

function showStory(storyKey) {
    const currentStory = story[storyKey];
    storyText.innerText = currentStory.text;
    choicesDiv.innerHTML = '';

    currentStory.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.classList.add('button');
        button.onclick = () => showStory(choice.next);
        choicesDiv.appendChild(button);
    });

    restartButton.style.display = currentStory.choices.length === 0 ? "block" : "none";
}

function restartGame() {
    restartButton.style.display = "none";
    startGame();
}

startGame();
