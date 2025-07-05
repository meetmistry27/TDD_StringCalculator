# String Calculator — TDD Craftsmanship Kata

Welcome to my take on the classic **String Calculator Kata**, implemented as part of the **Incubyte Software Craftsperson recruitment process**.

This project is a demonstration of how powerful and elegant software can emerge through **Test-Driven Development (TDD)**. Every feature here has been carefully shaped using the red-green-refactor cycle, and every line of code is backed by tests that led its design.

---

## ✨ Tech Stack

| Tool       | Purpose                       |
|------------|-------------------------------|
| JavaScript | Core implementation language  |
| Node.js    | Runtime environment            |
| Jest       | Testing framework for JavaScript     |

---

## 🧭 Philosophy: TDD, Thought First

This project is not just a solution — it’s a story of evolution.

Every test was written **before** implementation. The features grew **incrementally**, with confidence. I’ve focused on **clarity, correctness, and continuous refactoring**, so that every piece of logic feels natural and intentional.

> 🧠 “Tests don’t just verify code — they inspire better design.”

---

## ⚙️ Setup & Usage

```bash
# Clone the repository
git clone https://github.com/meetmistry27/TDD_StringCalculator.git

# Navigate to the project
cd TDD_StringCalculator

# Install dependencies
npm install

# Run all tests
npm test

```

## ✅ Test Cases

Each test below was written first, before any implementation, following the TDD workflow:  
**Fail → Pass → Refactor**

| #   | Test Description                                                   | Example Input                         | Expected Output / Behavior                         |
|-----|--------------------------------------------------------------------|---------------------------------------|----------------------------------------------------|
| 1   | Returns 0 for an empty string                                      | `""`                                  | `0`                                                |
| 2   | Returns the number itself for a single input                       | `"5"`                                 | `5`                                                |
| 3   | Returns sum of two comma-separated numbers                         | `"1,2"`                               | `3`                                                |
| 4   | Returns sum of multiple comma-separated numbers                    | `"1,2,3"`                             | `6`                                                |
| 5   | Supports newline (`\n`) as a valid delimiter with commas           | `"1\n2,3"`                            | `6`                                                |
| 6   | Supports custom single-character delimiter                         | `"//;\n1;2;3"`                        | `6`                                                |
| 7   | Throws error when a negative number is passed                      | `"1,-2,3"`                            | Throws Error: `Negative numbers not allowed: -2`       |
| 7  | Throws error listing all negative numbers                          | `"1,-2,-3"`                           | Throws Error: `Negative numbers not allowed: -2, -3`   |
| 8 | Tracks how many times `add()` was called                           | Two calls: `"1,2"` and `"3,4"`      | `getCalledCount()` returns `2`                    |
| 9   | Ignores numbers greater than 1000                                  | `"2,1001"` / `"1000,2"`              | `2` / `1002`                                       |
| 10  | Supports delimiters of any length using `//[delimiter]` format     | `"//[***]\n1***2***3"`               | `6`                                                |
| 11  | Supports multiple single-character delimiters                      | `"//[*][%]\n1*2%3"`                  | `6`                                                |
| 12  | Supports multiple multi-character delimiters                       | `"//[**][%%]\n1**2%%3"`              | `6`                                                |

