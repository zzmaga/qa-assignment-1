# Risk Assessment

## 1. System Overview

The system under test is a web-based E-commerce application designed to support common online retail operations. Key business functions include user account creation, authentication, product discovery, cart management, and online payment completion. Because the platform directly supports customer transactions and handles sensitive user and payment data, failures in specific modules may produce significant operational, financial, and reputational consequences.

This risk assessment is intended to identify which modules represent the highest testing priority during the initial QA planning phase.

## 2. Risk Assessment Methodology

The assessment uses a qualitative risk-based testing approach supported by a probability versus impact model. Each major application module is evaluated against two dimensions:

- **Probability**: the likelihood that faults may occur in the module
- **Impact**: the business and user consequence if the module fails

Both dimensions are scored on a scale from 1 to 5.

| Score | Probability Meaning | Impact Meaning |
| --- | --- | --- |
| 1 | Very low likelihood | Negligible business effect |
| 2 | Low likelihood | Minor user inconvenience |
| 3 | Moderate likelihood | Noticeable functional degradation |
| 4 | High likelihood | Major business or operational disruption |
| 5 | Very high likelihood | Critical business failure or data/security risk |

## 3. Probability vs Impact Model

The probability-impact model is used to identify modules that require earlier and deeper testing effort. Modules with both high failure likelihood and high business impact are considered the highest priority for QA planning, automation, regression coverage, and monitoring.

## 4. Risk Scoring Formula

The following formula is applied:

```text
Risk Score = Probability x Impact
```

Priority levels are assigned as follows:

| Score Range | Priority |
| --- | --- |
| 1-5 | Low |
| 6-10 | Medium |
| 11-15 | High |
| 16-25 | Critical |

## 5. Module Risk Prioritization

| Module | Probability (1-5) | Impact (1-5) | Risk Score | Priority |
| --- | --- | --- | --- | --- |
| Authentication | 4 | 5 | 20 | Critical |
| Payment Processing | 4 | 5 | 20 | Critical |
| Shopping Cart | 4 | 4 | 16 | Critical |
| Product Search | 3 | 3 | 9 | Medium |
| Product Catalog | 2 | 3 | 6 | Medium |

## 6. Explanation of High-Risk Modules

### Authentication

Authentication is a high-risk area because it governs access control and protects user accounts. Failures in this module may lead to unauthorized access, account lockout, weak session management, and exposure of user data. Since login is a prerequisite to many customer journeys, defects in this area also create broad usability and business continuity issues.

### Payment Processing

Payment processing is considered one of the most critical modules because it directly affects revenue generation and customer trust. A defect in this area could result in failed purchases, duplicate charges, incorrect transaction states, or payment confirmation errors. In addition, payment-related failures often have legal, compliance, and reputational implications.

### Shopping Cart

The shopping cart is high risk because it sits between product selection and final purchase. Errors in quantity calculation, item retention, pricing, or cart persistence can prevent successful checkout and directly reduce conversion rates. Cart instability also creates user frustration and may lead to abandoned purchases.

## 7. Risk Assessment Summary

Based on the analysis, the highest testing priority should be assigned to:

1. Authentication
2. Payment processing
3. Shopping cart

These modules should receive the earliest functional validation, stronger regression coverage, and a higher degree of automation compared with lower-risk modules such as catalog display and product search.
