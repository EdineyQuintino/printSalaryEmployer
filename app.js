const printSalary = require("./printSalary");

printSalary.total("Moises 1",400,200);
printSalary.total("Moises 3",80,200);
printSalary.total("Moises 4" ,50,200);
printSalary.total("Moises 6",49,300);

printSalary.printSalaryOnlyNumber(60,100);
printSalary.printSalaryOnlyNumber(40,200);
printSalary.printSalaryOnlyNumber(40,200);

printSalary.upSalary(printSalary.calcSalary(49,300));
printSalary.upSalary(printSalary.calcSalary(50,200));
 