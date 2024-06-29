function calculateNetSalary(basicSalary, benefits) {
    // Constants
    const personalRelief = 2400;
    const nssfRate = 0.06; // NSSF rate is 6% of gross salary

    // Gross salary
    const grossSalary = basicSalary + benefits;

    // NSSF Deduction (Tier I and Tier II)
    let nssfDeduction;
    if (grossSalary <= 18000) {
        nssfDeduction = grossSalary * nssfRate;
    } else {
        nssfDeduction = 1080; // Maximum NSSF contribution
    }

    // NHIF Deduction (based on gross salary)
    let nhifDeduction;
    if (grossSalary <= 5999) {
        nhifDeduction = 150;
    } else if (grossSalary <= 7999) {
        nhifDeduction = 300;
    } else if (grossSalary <= 11999) {
        nhifDeduction = 400;
    } else if (grossSalary <= 14999) {
        nhifDeduction = 500;
    } else if (grossSalary <= 19999) {
        nhifDeduction = 600;
    } else if (grossSalary <= 24999) {
        nhifDeduction = 750;
    } else if (grossSalary <= 29999) {
        nhifDeduction = 850;
    } else if (grossSalary <= 34999) {
        nhifDeduction = 900;
    } else if (grossSalary <= 39999) {
        nhifDeduction = 950;
    } else if (grossSalary <= 44999) {
        nhifDeduction = 1000;
    } else if (grossSalary <= 49999) {
        nhifDeduction = 1100;
    } else if (grossSalary <= 59999) {
        nhifDeduction = 1200;
    } else if (grossSalary <= 69999) {
        nhifDeduction = 1300;
    } else if (grossSalary <= 79999) {
        nhifDeduction = 1400;
    } else if (grossSalary <= 89999) {
        nhifDeduction = 1500;
    } else if (grossSalary <= 99999) {
        nhifDeduction = 1600;
    } else {
        nhifDeduction = 1700; // Maximum NHIF contribution
    }

    // PAYE (Tax) Calculation
    let taxableIncome = grossSalary - nssfDeduction;
    let paye;

    if (taxableIncome <= 24000) {
        paye = taxableIncome * 0.1;
    } else if (taxableIncome <= 32333) {
        paye = (24000 * 0.1) + ((taxableIncome - 24000) * 0.25);
    } else {
        paye = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((taxableIncome - 32333) * 0.3);
    }

    // Subtract personal relief from PAYE
    paye = Math.max(paye - personalRelief, 0);

    // Net Salary Calculation
    const netSalary = grossSalary - (nssfDeduction + nhifDeduction + paye);

    // Output
    console.log(`Gross Salary: ${grossSalary.toFixed(2)}`);
    console.log(`NSSF Deduction: ${nssfDeduction.toFixed(2)}`);
    console.log(`NHIF Deduction: ${nhifDeduction.toFixed(2)}`);
    console.log(`PAYE (Tax): ${paye.toFixed(2)}`);
    console.log(`Net Salary: ${netSalary.toFixed(2)}`);
}

// Example
const basicSalary = 70000;
const benefits = 5000;
calculateNetSalary(basicSalary, benefits);
