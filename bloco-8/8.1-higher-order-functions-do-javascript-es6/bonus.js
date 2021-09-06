const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Parte I
function generateDamage(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1
const dragonAttack = (value) => {
  return generateDamage(15, value.strength);
  // return Math.ceil(Math.random() * dragon.strength +15);
}

// 2
const warriorAttack = (value) => { // Template, poderia ser 'attack' também
  return generateDamage(value.strength, value.strength * value.weaponDmg);
}
// console.log(warriorAttack(warrior));

// 3 REVIEW
const mageAttack = (value) => {
  //value.mana = 5;
  dmg = generateDamage(value.intelligence, value.intelligence * 2);
  const manaCost = 15;

  if (value.mana < 15) {
    return { damage: 'Não possui mana suficiente', manaSpent: manaCost = 0 };
  } return { damage: dmg, manaSpent: manaCost };
}
// mageAttack(mage);

// Parte II
const gameActions = { // 1
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack(warrior); // Retorna número aleatório
    warrior.damage = warriorDamage; // Atualiza a chave damage
    dragon.healthPoints -= warriorDamage; // Subtrai o dano do dragão
  },
  mageTurn: (mageAttack) => { // 2
    const mageDamage = mageAttack(mage);
    mage.damage = mageDamage;
    mage.mana = mage.mana - mageAttack(mage).manaSpent;
    dragon.healthPoints -= mageDamage.damage;
  },
  dragonTurn: (dragonAttack) => {
    const dragonDamage = dragonAttack(dragon);
    dragon.damage = dragonDamage;
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
  },
  turnResult: (battleMembers) => {
    return battleMembers;
  }
};

gameActions.warriorTurn(warriorAttack);
// console.log(warrior.damage);
// console.log(dragon.healthPoints);

gameActions.mageTurn(mageAttack);
// console.log(mage.damage);
// console.log(mage.mana);

gameActions.dragonTurn(dragonAttack);
// console.log(dragon.damage);
// console.log(mage.healthPoints);
// console.log(warrior.healthPoints);

gameActions.turnResult(battleMembers);
// console.log(battleMembers);
