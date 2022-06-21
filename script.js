let numberOne, numberTwo, option;

const sumTwoNumbers = (valueOne, valueTwo) => {
  return valueOne + valueTwo;
}

const subTwoNumbers = (valueOne, valueTwo) => {
  return valueOne - valueTwo;
}

const multTwoNumbers = (valueOne, valueTwo) => {
  return valueOne * valueTwo;
}

const divTwoNumbers = (valueOne, valueTwo) => {
  return valueOne / valueTwo;
}

const remTwoNumbers = (valueOne, valueTwo) => {
  return (valueOne % valueTwo).toFixed(2);
}


const numberEvenOrOdd = (number) => {
  if(number%2 == 0){
    return "par";

  }else{
    return "impar";

  }
}

const isEqual = (numberOne, numberTwo) => {
  if(numberOne === numberTwo){
    return `É igual`;

  }else{
    return `Não é igual`;

  }
}

while(option!=8){

alert("O programa a seguir captura dois valores e faz operações conforme solicitado.");
numberOne = Number(prompt("Entre com o primeiro valor"));
numberTwo = Number(prompt("Entre com o segundo valor"));

option = Number(prompt(`Entre com a opção da operação desejada:
        1. Soma.
        2. Subtração.
        3. Multiplicação.
        4. Divisão.
        5. Resto da divisão.
        6. Verifica se a soma dos números são par.
        7. Verifica se os dois números são iguais.
        8. Sair
      `));


  switch(option)  {
    case 1:
      alert(`O resultado da soma dos valores são: ${sumTwoNumbers(numberOne,numberTwo)}`);
      break;

    case 2:
      alert(`O resultado de subtração dos valores são: ${subTwoNumbers(numberOne,numberTwo)}`);
      break;
    
    case 3:
      alert(`O resultado da multiplicação dos valores são: ${multTwoNumbers(numberOne,numberTwo)}`);
      break;

    case 4:
      alert(`O resultado da divisão dos valores são: ${divTwoNumbers(numberOne,numberTwo)}`);
      break;
    
    case 5:
      alert(`O resultado do resto da divisão dos valores são: ${remTwoNumbers(numberOne,numberTwo)}`);
      break;

    case 6:
      alert(`A soma dos dois números é: ${numberEvenOrOdd(sumTwoNumbers(numberOne, numberTwo))}`);
      break;
    
    case 7:
      alert(`Os dois números são: ${isEqual(numberOne, numberTwo)}`);
      break;
    
    case 8:
      alert("Saindo do sistema...");
      break;
    
    default:
      alert("Valor inválido, tente novamente");

    }
}








