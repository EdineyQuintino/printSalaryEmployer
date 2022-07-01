function total(nome = "", sal, horas, imposto = 27) {
  let salfinal = sal * horas;
  console.log(nome, 'Recebera $ : ', salfinal - (imposto / 100) * salfinal, 'Reais no final do Mes');
}

function printSalaryOnlyNumber (sal, horas, imposto = 27){
  let salfinal = sal * horas;
  console.log(salfinal - (imposto / 100) * salfinal);
}

module.exports = {total,printSalaryOnlyNumber};
