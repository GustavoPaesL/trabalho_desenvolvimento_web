
function calcular(){
    const win = parseInt(document.getElementById("vitorias").value);
    const lose = parseInt(document.getElementById("derrotas").value);


    if(!win){
        alert("campo vitórias deve ser preenchido!")
        return;
    }

    if(!lose){
        alert("campo derrotas deve ser preenchido!")
        return;
    }


    let pdr = ""

    let wr = win/lose;
    let img = document.querySelector("#rank_img");

    console.log(wr)

    switch(true) {
        case (wr <= 0.5):
            pdr = (win * wr) * 1.15;
            break;
        case (wr > 0.5):
            pdr = win * wr;
            break;
    }
    console.log(pdr);

    switch (true) {
        case pdr < 25:
            rank = "Sem rank";
            img.setAttribute("src", "");
            break;
        case pdr >= 25 && pdr <= 99:
            rank = "Bronze";
            img.setAttribute("src", "https://www.unrankedsmurfs.com/storage/kYCt0ggLliMpPS7C3rcSzZcVm88NDkidfYTweNiN.png");
            break;
        case pdr >= 100 && pdr <= 499:
            rank = "Prata";
            img.setAttribute("src", "https://www.unrankedsmurfs.com/storage/YMoeDoxu3dKunABYwywDC05hf11tbWr6NQScWoWS.png");
            break;
        case pdr >= 500 && pdr <= 1499:
            rank = "Ouro";
            img.setAttribute("src", "https://www.unrankedsmurfs.com/storage/ruoxfp7El8hKfK6IFEK6i9zA0VPvlXa6ac5XG3HA.png");
            break;
        case pdr >= 1500 && pdr <= 2999:
            rank = "Platina";
            img.setAttribute("src", "https://www.unrankedsmurfs.com/storage/y4pOq0yXSUcOGQ39LfJF8Y20rZx7ZFS0lyKuo3R0.png");
            break;
        case pdr > 2999:
            rank = "Diamante";
            img.setAttribute("src", "https://www.unrankedsmurfs.com/storage/alpCvjaJ1vBCvzDeiycUfYpx1O5JGTGPz8zLWtTp.png");
            break;
    }

    console.log(rank)

    const resultado = document.getElementById("resposta");


    resultado.textContent = "Seu rank é: " + rank;

    
    console.log(resultado);
};