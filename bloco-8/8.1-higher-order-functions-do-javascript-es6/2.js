function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const verify = (numb, randNum) => {
  return numb === randNum ? `Parabéns você ganhou. Número: ${numb}` : `Tente novamente. Número apostado: ${numb}. Número sorteado ${randNum}`;
 }

const sorteio = (numb, func) => {
  const randNum = getRandomIntInclusive(1, 5);
  return func(numb, randNum);
}

console.log(sorteio(1, verify));
