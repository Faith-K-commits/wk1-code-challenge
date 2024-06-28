# Wk1 Code Challenge

This document provides an overview of week one code challenge.

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