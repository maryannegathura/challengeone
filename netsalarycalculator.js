function calculateNetSalary(basicSalary, benefits) {
    const TAX_RATES = [
        { min: 0, max: 24000, rate: 10 },
        { min: 24001, max: 32333, rate: 15 },
        { min: 32334, max: 40333, rate: 20 },
        { min: 40334, max: 48333, rate: 25 },
        { min: 48334, max: Infinity, rate: 30 }
    ];

    const NHIF_RATES = [
        { min: 0, max: 5999, amount: 150 },
        { min: 6000, max: 7999, amount: 300 },
        { min: 8000, max: 11999, amount: 400 },
        { min: 12000, max: 14999, amount: 500 },
        { min: 15000, max: 19999, amount: 600 },
        { min: 20000, max: 24999, amount: 750 },
        { min: 25000, max: 29999, amount: 850 },
        { min: 30000, max: 34999, amount: 900 },
        { min: 35000, max: 39999, amount: 1000 },
        { min: 40000, max: 44999, amount: 1100 },
        { min: 45000, max: 49999, amount: 1200 },
        { min: 50000, max: 59999, amount: 1300 },
        { min: 60000, max: 69999, amount: 1400 },
        { min: 70000, max: 79999, amount: 1500 },
        { min: 80000, max: 89999, amount: 1600 },
        { min: 90000, max: 99999, amount: 1700 },
        { min: 100000, max: Infinity, amount: 1800 }
    ];

    const NSSF_EMPLOYEE_RATE = 6; 
    const NSSF_EMPLOYER_RATE = 6; 

    let grossSalary = basicSalary + benefits;

    let nhifDeduction = calculateNHIF(grossSalary);

    let nssfDeductionEmployee = (basicSalary * NSSF_EMPLOYEE_RATE) / 100;

    let paye = calculatePAYE(grossSalary);

    let netSalary = grossSalary - paye - nhifDeduction - nssfDeductionEmployee;

    console.log(`Basic Salary: ${basicSalary}`);
    console.log(`Benefits: ${benefits}`);
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`NHIF Deduction: ${nhifDeduction}`);
    console.log(`NSSF Deduction (Employee): ${nssfDeductionEmployee}`);
    console.log(`PAYE (Tax): ${paye}`);
    console.log(`Net Salary: ${netSalary}`);

    function calculateNHIF(grossSalary) {
        for (let i = 0; i < NHIF_RATES.length; i++) {
            if (grossSalary >= NHIF_RATES[i].min && grossSalary <= NHIF_RATES[i].max) {
                return NHIF_RATES[i].amount;
            }
        }
        return 0; 
    }

    function calculatePAYE(grossSalary) {
        let tax = 0;
        for (let i = 0; i < TAX_RATES.length; i++) {
            if (grossSalary > TAX_RATES[i].min) {
                let taxableAmount = Math.min(grossSalary - TAX_RATES[i].min, TAX_RATES[i].max - TAX_RATES[i].min);
                tax += (taxableAmount * TAX_RATES[i].rate) / 100;
            } else {
                break;
            }
        }
        return tax;
    }
}


calculateNetSalary(75000, 30000); //put any value of your choice
