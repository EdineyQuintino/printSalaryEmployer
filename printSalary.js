function calcSalary(sal0, horas0, imposto = 27) {
  let salfinal = sal0 * horas0;
  return salfinal - (imposto / 100) * salfinal;
}

function total(nome = "", sal1, horas1) {
  const salary = calcSalary(sal1, horas1);
  console.log(nome, 'Recebera $ : ', salary, 'Reais no final do Mes');
}

function printSalaryOnlyNumber(sal2, horas2) {
  console.log(calcSalary(sal2, horas2));
}

function upSalary(salary) {
  if (salary > 10000) {
    console.log('salario maior que 10,000')
  }
}

module.exports = { calcSalary, total, printSalaryOnlyNumber, upSalary };
