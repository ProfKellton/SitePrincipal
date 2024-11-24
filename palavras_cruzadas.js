var palavras = ['cpu', 'ula', 'registradores', 'ram', 'rom', 'eprom', 'flash', 'memoria de massa', 'dma', 'cs', 'address bus', 'data bus', 'i5', 'i7', 'dual core', 'quad core', 'threads', 'cache'];

function verificar_palavra(){
    var palavra_digitada = input_palavra.value;
    palavra_digitada = palavra_digitada.toLowerCase();
    var palavra_digitada_existe = false;

    for (var i = 0; i < palavras.length; i++) {
        if(palavra_digitada == palavras[i]){
            palavra_digitada_existe = true
        }
    }

    if (palavra_digitada_existe){
        
        if(palavra_digitada == "cpu"){
            letra4.innerHTML = "C";
            letra5.innerHTML = "P";
            letra6.innerHTML = "U";
        } else

        if(palavra_digitada == "ula"){
            letra6.innerHTML = "U";
            letra12.innerHTML = "L";
            letra17.innerHTML = "A";
        } else

        if(palavra_digitada == "registradores"){
            letra0.innerHTML = "R";
            letra1.innerHTML = "E";
            letra3.innerHTML = "G";
            letra9.innerHTML = "I";
            letra16.innerHTML = "S";
            letra27.innerHTML = "T";
            letra32.innerHTML = "R";
            letra36.innerHTML = "A";
            letra41.innerHTML = "D";
            letra49.innerHTML = "O";
            letra53.innerHTML = "R";
            letra57.innerHTML = "E";
            letra71.innerHTML = "S";
        } else

        if (palavra_digitada == "ram") {
            letra56.innerHTML = "R";
            letra69.innerHTML = "A";
            letra75.innerHTML = "M";
        } else

        if (palavra_digitada == "rom") {
            letra48.innerHTML = "R";
            letra49.innerHTML = "O";
            letra50.innerHTML = "M";
        } else

        if (palavra_digitada == "eprom") {
            letra80.innerHTML = "E";
            letra81.innerHTML = "P";
            letra82.innerHTML = "R";
            letra83.innerHTML = "O";
            letra84.innerHTML = "M";
        } else 

        if (palavra_digitada == "flash") {
            letra2.innerHTML = "F";
            letra8.innerHTML = "L";
            letra14.innerHTML = "A";
            letra22.innerHTML = "S";
            letra30.innerHTML = "H";
        } else

        if (palavra_digitada == "memoria de massa") {
            letra59.innerHTML = "M";
            letra60.innerHTML = "E";
            letra61.innerHTML = "M";
            letra62.innerHTML = "Ó";
            letra63.innerHTML = "R";
            letra64.innerHTML = "I";
            letra65.innerHTML = "A";
            letra66.innerHTML = "D";
            letra67.innerHTML = "E";
            letra68.innerHTML = "M";
            letra69.innerHTML = "A";
            letra70.innerHTML = "S";
            letra71.innerHTML = "S";
            letra72.innerHTML = "A";
        } else

        if (palavra_digitada == "dma") {
            letra38.innerHTML = "D";
            letra39.innerHTML = "M";
            letra40.innerHTML = "A";
        } else

        if (palavra_digitada == "cs") {
            letra4.innerHTML = "C";
            letra11.innerHTML = "S";
        } else

        if (palavra_digitada == "address bus") {
            letra17.innerHTML = "A";
            letra18.innerHTML = "D";
            letra19.innerHTML = "D";
            letra20.innerHTML = "R";
            letra21.innerHTML = "E";
            letra22.innerHTML = "S";
            letra23.innerHTML = "S";
            letra24.innerHTML = "B";
            letra25.innerHTML = "U";
            letra26.innerHTML = "S";
        } else

        if (palavra_digitada == "data bus") {
            letra18.innerHTML = "D";
            letra28.innerHTML = "A";
            letra33.innerHTML = "T";
            letra37.innerHTML = "A";
            letra51.innerHTML = "B";
            letra54.innerHTML = "U";
            letra58.innerHTML = "S";
        } else

        if (palavra_digitada == "i5") {
            letra9.innerHTML = "I";
            letra10.innerHTML = "5";
        } else

        if (palavra_digitada == "i7") {
            letra64.innerHTML = "I";
            letra73.innerHTML = "7";
        } else

        if (palavra_digitada == "dual core") {
            letra66.innerHTML = "D";
            letra74.innerHTML = "U";
            letra76.innerHTML = "A";
            letra77.innerHTML = "L";
            letra78.innerHTML = "C";
            letra79.innerHTML = "O";
            letra82.innerHTML = "R";
            letra85.innerHTML = "E";
        } else

        if (palavra_digitada == "quad core") {
            letra15.innerHTML = "Q";
            letra25.innerHTML = "U";
            letra31.innerHTML = "A";
            letra35.innerHTML = "D";
            letra43.innerHTML = "C";
            letra52.innerHTML = "O";
            letra55.innerHTML = "R";
            letra60.innerHTML = "E";
        } else

        if (palavra_digitada == "threads") {
            letra7.innerHTML = "T";
            letra13.innerHTML = "H";
            letra20.innerHTML = "R";
            letra29.innerHTML = "E";
            letra34.innerHTML = "A";
            letra38.innerHTML = "D";
            letra42.innerHTML = "S";
        } else

        if (palavra_digitada == "cache") {
            letra43.innerHTML = "C";
            letra44.innerHTML = "A";
            letra45.innerHTML = "C";
            letra46.innerHTML = "H";
            letra47.innerHTML = "E";
        } else {
            alert("Ouve algum erro inexplicável")
        }

    } else {
        alert("Não... Não tem essa palavra na Palavra Cruzada, tente novamente");
    }
}

function proxima(i){
    var proxima = i + 1;

    if(i == 1){
        lista_dicas.innerHTML = `<li>01 - Memória dentro da própria CPU que armazena N bits.</li>`;
        btn_proxima.setAttribute('onclick', `proxima(${proxima})`);
    } else

    if(i == 2){
        lista_dicas.innerHTML = `<li>02 - Também conhecida por processador, peça é como o "cérebro do computador".</li>`;
        btn_proxima.setAttribute('onclick', `proxima(${proxima})`);
    } else

    if(i == 3){
        lista_dicas.innerHTML = `<li>03 - Permite que um dispositivo de entrada e saída envie ou receba dados diretamente da memória principal, ignorando a CPU</li>`;
        btn_proxima.setAttribute('onclick', `proxima(${proxima})`);
    } else

    if(i == 4){
        lista_dicas.innerHTML = `<li>04 - É um circuito combinatório responsável pela execução de somas, subtrações e funções lógicas, em um sistema digital.</li>`;
        btn_proxima.setAttribute('onclick', `proxima(${proxima})`);
    } else

    if(i == 5){
        lista_dicas.innerHTML = `<li>05 - É um sistema dentro de um computador ou dispositivo, consistindo em um conector ou conjunto de fios, que fornece transporte de dados.</li>`;
        btn_proxima.setAttribute('onclick', `proxima(${proxima})`);
    } else

    if(i == 6){
        lista_dicas.innerHTML = `<li>06 - É um barramento de endereço</li>`;
        btn_proxima.setAttribute('onclick', `proxima(${proxima})`);
    } else

    if(i == 7){
        lista_dicas.innerHTML = `<li>07 - Forma como um processo/tarefa de um programa de computador é divido</li>`;
        btn_proxima.setAttribute('onclick', `proxima(${proxima})`);
    } else

    if(i == 8){
        lista_dicas.innerHTML = `<li>08 - Tecnologia de armazenamento de dados que usa uma memória não volátil.</li>`;
        btn_proxima.setAttribute('onclick', `proxima(${proxima})`);
    } else

    if(i == 9){
        lista_dicas.innerHTML = `<li>09 - Permite a CPU a acessar memoria externar e/ou periféricos externos</li>`;
        btn_proxima.setAttribute('onclick', `proxima(${proxima})`);
    } else

    if(i == 10){
        lista_dicas.innerHTML = `<li>10 - Processador que contém 4 núcleos é um processador:</li>`;
        btn_proxima.setAttribute('onclick', `proxima(${proxima})`);
    } else

    if(i == 11){
        lista_dicas.innerHTML = `<li>11 - Intermediário entre um operador de um processo e o dispositivo de armazenamento ao qual esse operador acede.</li>`;
        btn_proxima.setAttribute('onclick', `proxima(${proxima})`);
    } else

    if(i == 12){
        lista_dicas.innerHTML = `<li>12 - Memoria que não é acessada pelo processador mas sim por intermédio da memória ram, cache, etc.</li>`;
        btn_proxima.setAttribute('onclick', `proxima(${proxima})`);
    } else

    if(i == 13){
        lista_dicas.innerHTML = `<li>13 - Processador que garante alto desempenho</li>`;
        btn_proxima.setAttribute('onclick', `proxima(${proxima})`);
    } else

    if(i == 14){
        lista_dicas.innerHTML = `<li>14 - Processador que contém 2 núcleos é um processador:</li>`;
        btn_proxima.setAttribute('onclick', `proxima(${proxima})`);
    } else

    if(i == 15){
        lista_dicas.innerHTML = `<li>15 - Processador com um ótimo custo-beneficio e um amplo uso.</li>`;
        btn_proxima.setAttribute('onclick', `proxima(${proxima})`);
    } else

    if(i == 16){
        lista_dicas.innerHTML = `<li>16 - A memória somente de leitura.</li>`;
        btn_proxima.setAttribute('onclick', `proxima(${proxima})`);
    } else

    if(i == 17){
        lista_dicas.innerHTML = `<li>17 - Memória volátil de leitura e escrita, e de acesso rapido.</li>`;
        btn_proxima.setAttribute('onclick', `proxima(${proxima})`);
    } else

    if(i == 18){
        lista_dicas.innerHTML = `<li>18 - Pode ser apagada apenas por exposição a uma forte luz ultravioleta.</li>`;
        proxima = 1;
        btn_proxima.setAttribute('onclick', `proxima(${proxima})`);
        
    }
    
}