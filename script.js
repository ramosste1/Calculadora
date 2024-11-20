function calculadora(valor)
{
    console.log(valor)
    
    var display = document.querySelector('.display')
    var valorDigitado = document.querySelector('.display .valor')
    var total = document.querySelector('.display .total')
    
    var letrasAceitas = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '.', 'x', '÷']
    if (letrasAceitas.indexOf(valor) > -1) {
    
        valorDigitado.innerHTML += valor     
    }
    
    if (valor == '=') {
        var valorDisplay = valorDigitado.innerHTML
        
        valorDisplay = valorDisplay.replace('x', '*')
        valorDisplay = valorDisplay.replace('÷', '/')
        
        total.innerHTML = eval(valorDisplay)
    }
    
    if (valor == 'C') {
        valorDigitado.innerHTML = ''
    }

    if (valor == 'CC') {
        valorDigitado.innerHTML = ''
        total.innerHTML = ''
    }

    if (valor == '❮') {
        var quantidadeCaracteres = valorDigitado.innerHTML.length -1
        
        // 1 2 3 - substring ele pega de uma posicao a outra, o menos -1 seria o caractere que sera removido da lista.
        valorDigitado.innerHTML = valorDigitado.innerHTML.substring(0, quantidadeCaracteres)
        
    }
}