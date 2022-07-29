/*Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:

* O menor valor de faturamento ocorrido em um dia do mês;
* O maior valor de faturamento ocorrido em um dia do mês;
* Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;*/
let maior = 0, menor = 0, soma = 0, media = 0, aux = 0

const dados = require('./dados.json')
dados.forEach((dia) => {
    if((dia.valor) != 0){
        aux = dia.valor

        if(aux>maior){
            maior = aux
        }
    
        if(menor == 0){
            menor = aux
        }else if(aux<menor){
            menor = aux
        }
    }
    soma += dia.valor
}
)

console.log(`O menor valor de faturamento ocorrido no mês foi de ${menor}`);
console.log(`O maior valor de faturamento ocorrido no mês foi de ${maior}`);

media = soma / dados.length

let faturamentoDias = ''

dados.forEach((i) => {
    if(i.valor != 0){
        if(i.valor > media){
            faturamentoDias += i.dia + ', '
        }
    }
})

console.log(`Os dias em que o faturamento foi maior que a média mensal foram: ${faturamentoDias}`)