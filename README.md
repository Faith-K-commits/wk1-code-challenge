# Wk1 Code Challenge

This document provides an overview of the week one code challenge.

## Functions

### 1. `getStudentGrade()`

This function prompts the user to input student marks, which should be a number between 0 and 100. Based on the input, it calculates and displays the corresponding grade according to the following criteria:

- A: Marks > 79
- B: Marks between 60 and 79
- C: Marks between 50 and 59
- D: Marks between 40 and 49
- E: Marks < 40

The function validates the input to ensure it is a number within the specified range and alerts the user if the input is invalid.

### 2. `checkSpeed(speed)`

This function takes a single parameter, `speed`, which represents the speed of a car. It assesses the speed against a speed limit of 70 km/s. The function operates under the following rules:

- If the speed is less than 70 km/s, it prints "Ok".
- For every 5 km/s above the speed limit, it assigns one demerit point and prints the total number of points.
- If the driver accumulates more than 12 points, the function prints "License suspended".

### 3. `calculateNetSalary(basicSalary, benefits)`

This function calculates an individual’s net salary by taking the inputs of basic salary and benefits. It calculates the PAYE (i.e., tax), NHIF deductions, NSSF deductions, gross salary, and net salary based on the current rates provided by KRA, NHIF, and NSSF.

#### Example usage:

```javascript
const basicSalary = 30000; 
const benefits = 5000; 
calculateNetSalary(basicSalary, benefits);
```

## Project Setup

To execute this project on your PC, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone <https://github.com/Faith-K-commits/wk1-code-challenge>
   ```

2. **Navigate to the project directory**:
   ```sh
   cd <wk1-code-challenge>
   ```

3. **Open the project in your preferred code editor**. For instance, if you are using Visual Studio Code:
   ```sh
   code .
   ```

4. **Ensure you have Node.js installed**. You can download it from [here](https://nodejs.org/).

5. **Run the project**:
    -   You can run the file using Node.js:
     ```sh
     node speedDetector.js
     ```

6. **Test the functions**: You can test each function by calling them with sample inputs as shown in the example usages section.