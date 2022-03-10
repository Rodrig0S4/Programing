/**
 * Escreva um programa que leia as notas das duas avaliasções normais e a nota da avaliação optativa.
 * 
 * Caso o aluno não feito a optativa deve ser fornecido o valor de -1.
 * 
 * Calcular a média do semestre considerando que a prova optativa, substitui a nota mais baixa entre as duas primeiras avaliações.
 * 
 * Escrever a média e mensagens que indiquem se o aluno foi aprovado, reprovado ou está em exame, de acordo com as informações abaixo:
 * 
 * Se a média for maior a 6 "Aprovado".
 * Se a média for menor que 3 "Reprovado".
 * Se a média for maior igual a 3 e menor que 6 "Exame". * 
 */

console.log('Início da aplicação')



function calcularMedia(nota1, nota2, notaOptativa) {

    if (notaOptativa == undefined) {
        notaOptativa = -1
        console.log(notaOptativa)
    }

    if (nota1 < nota2) {
        nota1 = nota1 < notaOptativa ? notaOptativa : nota1
    } else if (nota2 < nota1) {
        nota2 = nota2 < notaOptativa ? notaOptativa : nota2
    }

    const media = (nota1 + nota2) / 2
    return media
}

function escreveMensagemMedia(media) {
    if (media >= 6) {
        comsole.log(`Aprovado: ${media}`)
    }
    else if (media < 3) {
        console.log(`Reprovado: ${media}`)
    } else {
        console.log(`Exame: ${media}`)
    }
}
// Aluno 1
const avaliacao1 = 9
const avaliacao2 = 8
let avaliacaoOptativa

const mediaAluno1 = calcularMedia(avaliacao1, avaliacao2, avaliacaoOptativa)
escreverMensagemMedia(mediaAluno1)


// Aluno 2
const mediaAluno2 = calcularMedia(2, 7)
escreverMensagemMedia(mediaAluno2)


//Aluno 3
escreveMensagemMedia(calcularMedia(6, 7, 9))