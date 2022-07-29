/* Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado: 

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.*/

function porcentagem(estado, total) {
    return Math.round((100*estado)/total)
}

sp = 67836.43
rj = 36678.66
mg = 29229.88
es = 27165.48
outros = 19849.53

total = sp + rj + mg + es + outros

console.log(`Porcentagem do faturamento de SP: ${porcentagem(sp, total)}%`);
console.log(`Porcentagem do faturamento de RJ: ${porcentagem(rj, total)}%`);
console.log(`Porcentagem do faturamento de MG: ${porcentagem(mg, total)}%`);
console.log(`Porcentagem do faturamento de ES: ${porcentagem(es, total)}%`);
console.log(`Porcentagem do faturamento de outros: ${porcentagem(outros, total)}%`);