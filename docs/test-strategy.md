# Test Strategy

## 1. Project Scope

This test strategy defines the QA approach for a web-based E-commerce application that supports user registration, login, product catalog browsing, product search, shopping cart operations, and checkout with payment processing. The scope of this assignment is limited to QA planning, risk evaluation, environment preparation, and the definition of initial automated and manual testing activities.

The strategy assumes that the application already exists and that QA is being introduced to improve confidence in core customer-facing workflows.

## 2. Testing Objectives

The primary objectives of the testing effort are:

- to detect critical defects in high-risk business workflows
- to reduce release risk through early validation of essential user journeys
- to establish repeatable automated checks for regression prevention
- to define measurable QA practices for future expansion
- to support research-based reporting through structured documentation and metrics

## 3. Risk-Based Testing Strategy

The testing approach is based on risk prioritization. Modules with the highest combined probability and impact scores will receive the greatest level of test coverage, earlier execution, and stronger automation support.

### Priority order

| Priority Level | Module Focus | Testing Emphasis |
| --- | --- | --- |
| Critical | Authentication, Payment Processing, Shopping Cart | Functional, negative, regression, and workflow testing |
| Medium | Product Search, Product Catalog | Functional, usability, and data accuracy testing |

Under this strategy, end-to-end customer journeys such as login, add-to-cart, and checkout are prioritized over lower-risk display-oriented features.

## 4. Manual Testing vs Automated Testing

Both manual and automated testing are necessary in the initial QA environment.

| Testing Type | Purpose | Example Usage |
| --- | --- | --- |
| Manual Testing | Exploratory validation, usability review, ad hoc investigation | Checking UI behavior, verifying error messages, exploratory checkout flows |
| Automated Testing | Repeatable regression checks for stable workflows | Login, product search, and checkout smoke scenarios |

Manual testing is especially valuable during early analysis and for discovering unexpected user experience issues. Automated testing is appropriate for stable, repeatable, and high-value workflows that must be executed frequently.

## 5. Test Prioritization

The following prioritization model is recommended:

1. Smoke tests for critical business paths
2. High-risk functional tests
3. Negative and boundary test cases
4. Medium-risk regression tests
5. Lower-priority exploratory and usability scenarios

Examples of top-priority tests include:

- valid and invalid user login
- product search result accuracy
- cart update and item persistence
- successful checkout completion
- payment failure handling

## 6. Tool Selection

The selected tools align with modern web QA practices and support both academic and industry use cases.

| Tool | Role in the QA Process | Justification |
| --- | --- | --- |
| Playwright | Web UI automation | Supports reliable end-to-end browser testing with modern selectors and reporting |
| Postman | API testing | Useful for validating backend services such as authentication and order endpoints |
| GitHub | Source control and collaboration | Enables versioning of tests, documentation, and configuration |
| GitHub Actions | Continuous Integration | Automates test execution on repository changes and supports repeatable QA workflows |

## 7. Test Coverage Plan

The initial coverage plan focuses on representative business-critical scenarios.

| Area | Planned Coverage |
| --- | --- |
| Authentication | Successful login, invalid login, session access validation |
| Product Search | Search by keyword, result visibility, no-result handling |
| Shopping Cart | Add item, update quantity, remove item, cart persistence |
| Checkout | Address entry, order summary validation, payment submission flow |
| Product Catalog | Product list visibility, category navigation, product detail access |

The first automation phase will target smoke and regression scenarios that can provide fast confidence after code changes.

## 8. Metrics to Measure Testing Effectiveness

The following metrics will be used to evaluate the effectiveness of the testing process:

- percentage of high-risk modules covered by tests
- number of automated smoke tests implemented
- number of manual test cases prepared
- defect detection rate in critical workflows
- pass/fail trend of CI pipeline executions
- execution time of the automated regression suite

These metrics establish a measurable baseline and support continuous improvement in future QA iterations.
