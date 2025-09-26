const campovalor = document.getElementById('valor');
const botao = document.getElementById('calcular');
const resultadoDiv = document.getElementById('resultado');


botao.addEventListener('click', () => {
    const valor = parseFloat(campovalor.value);
    if (isNaN(valor) || valor <= 0)
        resultadoDiv.textContent = "🙄 Só digite os números pae";
        resultadoDiv.style.color = "#e74c3c";
        return
})
const valorFinal = valor * 1.10;
resultadoDiv.textContent = valorFinal
resultadoDiv.style.color = "#11998e";
console.log(valor)



function formatarReal(valor){
    return valor.toLocaleString('pt-br', {style: ' currency',
        currency: 'BRL'});
}