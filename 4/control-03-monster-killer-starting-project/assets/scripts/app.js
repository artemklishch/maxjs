const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 40;
let maxPlayerHealth = 100;
let monsterHealth = maxPlayerHealth;

adjustHealthBars(maxPlayerHealth);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  monsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  maxPlayerHealth -= playerDamage;
  if (monsterHealth <= 0) {
    alert("You won!");
  } else if (maxPlayerHealth <= 0) {
    alert("You lost!");
  }
}
attackBtn.addEventListener("click", attackHandler);

function errhand() {
  // try{

  // }catch(e){

  // }
  //   throw { message: "thre is an error" };
  throw "thre is an error";
}
errhand();
