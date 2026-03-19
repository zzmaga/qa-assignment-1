# Baseline Metrics

## 1. Purpose

This document establishes the initial QA baseline metrics for the E-commerce application. These metrics provide a measurable starting point for planning, tracking progress, and evaluating the maturity of the testing effort over time.

## 2. Baseline Research Metrics

| Metric | Baseline Value | Notes |
| --- | --- | --- |
| Number of core modules assessed | 5 | Authentication, Payment Processing, Shopping Cart, Product Search, Product Catalog |
| Number of high-risk modules | 3 | Authentication, Payment Processing, Shopping Cart |
| Number of medium-risk modules | 2 | Product Search, Product Catalog |
| Planned automated tests in initial suite | 3 | Login, search, checkout smoke scenarios |
| Planned manual test cases | 15 | Includes exploratory, negative, and usability-focused cases |
| Estimated initial testing effort | 5 person-days | Documentation, setup, and starter automation |
| Initial automation coverage target | 60% of high-risk workflows | Focused on smoke and regression value |
| Initial manual coverage target | 100% of identified modules | At least one manual scenario per module |
| CI execution frequency | On every push | Enabled through GitHub Actions |
| Expected suite execution duration | Under 10 minutes | Suitable for early CI feedback |

## 3. Coverage Plan Summary

The initial coverage distribution is shown below:

| Functional Area | Planned Coverage Type | Initial Status |
| --- | --- | --- |
| Authentication | Automated + Manual | Planned |
| Payment Processing | Manual + Partial automated workflow simulation | Planned |
| Shopping Cart | Manual + Automated within checkout flow | Planned |
| Product Search | Automated + Manual | Planned |
| Product Catalog | Manual | Planned |

## 4. Interpretation of Baseline

The current baseline reflects an early-stage QA environment rather than a complete testing program. At this stage, the objective is to:

- establish visibility into risk concentration
- prioritize business-critical scenarios
- create a lightweight but repeatable automation suite
- provide measurable targets for future QA expansion

## 5. Future Metric Expansion

In later project phases, the following metrics should be added:

- defect density by module
- escaped defects after release
- automation pass rate over time
- flaky test rate
- mean time to defect detection
- requirement-to-test traceability coverage

These future additions would strengthen the research value of the QA project and improve operational decision-making.
