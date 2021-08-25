const CORRECT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const test = (template, verifyAnswers, func) => {
  const finalResult = func(template, verifyAnswers);
  return `A nota do aluno foi: ${finalResult[0]}. Total de respostas corretas ${finalResult[1]}`;
}

const func1 = (arr1, arr2) => {
  let result = [];
  let nota = 0;
  let totalCorretas = 0
  const verify = arr1.map((item, index) => item === arr2[index] ? (result.push(1), nota += 1,totalCorretas += 1) : arr2[index] === 'N.A' ? result.push(0) : (result.push(-0.5), nota -= 0.5));
  return [nota, totalCorretas];
}

/* const func2 = (arr1, arr2) => {
  console.log('correctAnswers2');
  return "OK2";
 } */

console.log(test(CORRECT_ANSWERS, STUDENT_ANSWERS, func1));
//console.log(test(CORRECT_ANSWERS, STUDENT_ANSWERS, func2));
