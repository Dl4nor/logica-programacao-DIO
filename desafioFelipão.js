
let heroName = "Kastija Vascript"
let heroExp = "2001"
let heroClass

//let qntMonsterKill
//let expMonsterKill = 200

let expClassList = [["Ferro", 1000],
                    ["Bronze", 2000],
                    ["Prata", 5000],
                    ["Ouro", 7000],
                    ["Platina", 8000],
                    ["Ascendente", 9000],
                    ["Imortal", 10000],
                    ["Radiante"]
                    ]

//heroName = prompt("Digite o nome do seu herói: ")
//qntMonsterKill = prompt("Quantos monstros o seu heroi matou?\n")

//heroExp = qntMonsterKill * expMonsterKill

for (i=0;i<expClassList.length;i++){
    if (heroExp<=expClassList[i][1]){
        heroClass=expClassList[i][0]
        break
    }
    else
        heroClass=expClassList[expClassList.length-1][0]
}

console.log("O herói de nome " + heroName + " está no nível de " + heroClass)