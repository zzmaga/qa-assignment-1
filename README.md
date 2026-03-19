# QA Testing Project

## Assignment 1: QA Risk Assessment and Environment Setup

This repository presents a structured Quality Assurance preparation project for a web-based E-commerce application. The purpose of the project is to support an academic assignment focused on QA risk assessment, environment setup, test planning, and the creation of an initial automation foundation for future test execution.

The system under test is assumed to be an existing E-commerce platform with the following core capabilities:

- User registration
- Login and authentication
- Product catalog browsing
- Product search
- Shopping cart management
- Checkout and payment processing

This repository does not implement the application itself. Instead, it establishes the QA research and operational framework required to test such a system in a structured and risk-driven manner.

## Tools Used

The following tools were selected to support the QA process:

| Tool | Purpose |
| --- | --- |
| Playwright | End-to-end web test automation |
| Postman | API validation and service-level testing |
| GitHub | Version control and collaboration |
| GitHub Actions | Continuous Integration and automated test execution |
| Node.js | Runtime environment for Playwright tests |

## Repository Structure

```text
qa-testing-project/
├── README.md
├── package.json
├── playwright.config.js
├── docs/
│   ├── risk-assessment.md
│   ├── test-strategy.md
│   ├── environment-setup.md
│   └── baseline-metrics.md
├── tests/
│   ├── login.spec.js
│   ├── checkout.spec.js
│   └── search.spec.js
├── screenshots/
└── .github/
    └── workflows/
        └── qa-tests.yml
```

## How to Run Tests

### 1. Install dependencies

```bash
npm install
```

### 2. Install Playwright browsers

```bash
npx playwright install --with-deps
```

### 3. Run the automated test suite

```bash
npm test
```

### 4. Run tests in headed mode if needed

```bash
npx playwright test --headed
```

## How This Project Supports a QA Research Paper

This repository supports a QA research paper by translating theoretical testing concepts into a practical project structure. The included documentation demonstrates:

- formal risk identification and prioritization
- the use of a probability-impact scoring model
- a risk-based testing strategy
- environment setup planning for repeatable test execution
- baseline metrics for measuring QA progress
- an initial automation framework integrated with CI/CD

As a result, the repository serves both as an academic submission artifact and as a realistic foundation for a professional QA initiative in a web application project.
