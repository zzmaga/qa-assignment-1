# Environment Setup

## 1. QA Environment Overview

The QA environment is designed to support the preparation and execution of structured tests for a web-based E-commerce application. The environment includes documentation for risk analysis, an automated test framework for browser-based scenarios, and a Continuous Integration pipeline for repeatable execution.

The purpose of this environment is not to replicate production in full detail, but to establish a reliable starting point for QA research, test design, and automated validation.

## 2. Installed Tools

The following tools are required for the environment:

| Tool | Version Type | Purpose |
| --- | --- | --- |
| Node.js | Current LTS recommended | JavaScript runtime for Playwright |
| npm | Included with Node.js | Dependency installation and script execution |
| Playwright | Project dependency | Browser automation framework |
| Git | Latest stable | Source control |
| GitHub | Cloud platform | Repository hosting and collaboration |
| GitHub Actions | Cloud CI service | Automated test execution |
| Postman | Latest stable | API testing support |

## 3. Testing Framework Setup

The automation framework uses Playwright with Node.js.

### Installation steps

```bash
npm install
npx playwright install --with-deps
```

### Execution steps

```bash
npm test
```

The test framework has been configured to:

- execute tests from the `tests/` directory
- generate an HTML report
- capture screenshots on failure
- support headless browser execution in CI

## 4. Repository Structure Explanation

The repository has been organized to separate planning documentation from executable test assets.

| Path | Purpose |
| --- | --- |
| `docs/` | Academic and project QA documentation |
| `tests/` | Automated Playwright test cases |
| `screenshots/` | Reserved location for visual evidence and test artifacts |
| `.github/workflows/` | GitHub Actions CI pipeline definition |
| `package.json` | Project dependencies and test scripts |
| `playwright.config.js` | Playwright execution configuration |

This structure supports maintainability, readability, and future scaling of the QA effort.

## 5. CI/CD Pipeline Overview

The CI/CD configuration is implemented with GitHub Actions. The workflow is triggered on every push to the repository. Its purpose is to ensure that automated tests are executed consistently whenever changes are introduced.

The pipeline performs the following steps:

1. Checks out the repository code
2. Installs Node.js
3. Installs project dependencies
4. Installs Playwright browsers
5. Runs the automated test suite
6. Uploads the Playwright HTML report as an artifact

This approach provides an initial quality gate and helps establish regression control in the development lifecycle.

## 6. Steps to Run Automated Tests

### Local execution

1. Open a terminal in the project root.
2. Install dependencies using `npm install`.
3. Install Playwright browsers using `npx playwright install --with-deps`.
4. Run the suite using `npm test`.

### CI execution

When code is pushed to GitHub, the workflow file in `.github/workflows/qa-tests.yml` automatically runs the defined QA checks.

## 7. Environment Readiness Summary

The environment is prepared to support:

- foundational QA documentation
- automated web test development
- CI-based regression execution
- future extension into API, performance, and cross-browser testing

This setup provides a suitable baseline for a university assignment while remaining consistent with real-world QA engineering practices.
