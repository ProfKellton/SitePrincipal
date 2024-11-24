function showInfo(planet) {
    let infoText = "";
    switch(planet) {
        case 'mercurio':
            infoText = "Mercúrio é o planeta mais próximo do Sol e o menor do sistema solar. Sua temperatura pode chegar a 430°C durante o dia e cair para -180°C à noite.";
            break;
        case 'venus':
            infoText = "Vênus é o planeta mais parecido com a Terra em tamanho e composição, mas sua atmosfera densa e quente cria temperaturas extremas de 475°C.";
            break;
        case 'terra':
            infoText = "A Terra é o único planeta conhecido que possui água em estado líquido e vida. Sua atmosfera é composta principalmente de oxigênio e nitrogênio.";
            break;
        case 'lua':
            infoText = "Satélite natural da Terra, a Lua tem uma superfície coberta por crateras, mares (planícies basálticas) e montanhas. Sua gravidade afeta as marés da Terra, e ela tem uma face visível devido à rotação sincronizada com a Terra.";
            break;
        case 'marte':
            infoText = "Marte é o quarto planeta a partir do Sol, conhecido como o 'Planeta Vermelho' devido ao seu solo rico em óxido de ferro, ou ferrugem. Possui o maior vulcão do sistema solar, o Monte Olimpo.";
            break;
        case 'jupiter':
            infoText = "Júpiter é o maior planeta do Sistema Solar. Composto principalmente de hidrogênio e hélio, possui uma grande mancha vermelha, que é uma tempestade enorme. Tem 79 luas conhecidas.";
            break;
        case 'saturno':
            infoText = "Saturno é conhecido por seus anéis impressionantes, compostos de partículas de gelo e rocha. É o segundo maior planeta do Sistema Solar e tem uma atmosfera composta principalmente de hidrogênio e hélio. Saturno possui mais de 80 luas.";
            break;
        case 'urano':
            infoText = "Urano é um planeta gigante gasoso que gira de lado em relação ao plano de sua órbita, possuindo uma cor azul devido ao metano em sua atmosfera.";
            break;
        case 'netuno':
            infoText = "Netuno é o planeta mais distante do Sistema Solar, com uma atmosfera rica em hidrogênio, hélio e metano. E é conhecido por sua intensa cor azul, devido ao metano em sua atmosfera.";
            break;
        case 'plutão':
                infoText = "Considerado um planeta anão, Plutão é pequeno e tem uma órbita elíptica. Sua superfície é composta por gelo e rocha, com uma fina atmosfera de nitrogênio, metano e monóxido de carbono. Foi reclassificado como planeta anão pela União Astronômica Internacional em 2006.";
                break;
        default:
        
    }

    document.getElementById('info-text').innerText = infoText;
}
