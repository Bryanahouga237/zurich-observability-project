```markdown

\# Zurich Observability \& E2E Automated Testing Pipeline



This repository hosts a production-ready DevOps and Software Quality Assurance stack. It integrates end-to-end automated regression testing with modern real-time infrastructure observability to ensure total software compliance and continuous uptime monitoring.



\## 🚀 Architecture \& Features



\- \*\*Automated E2E Testing\*\*: Powered by \*\*Playwright\*\*, executing lightweight, reliable regression test suites mimicking end-user behavior (optimized with `networkidle` state handling to secure asynchronous web application initializations).

\- \*\*Real-Time Observability\*\*: Built with a \*\*Prometheus\*\* metrics scraping engine coupled with a dynamic \*\*Grafana\*\* dashboard to visualize infrastructure service uptime, system latency, and request success rates.

\- \*\*Resilient Execution Policy handling\*\*: Architected to isolate dependencies and safely maintain automation continuity regardless of underlying OS execution restrictions.



\---



\## 📦 Project Structure



```text

zurich-observability-project/

├── tests/

│   └── insurance.spec.js     # Playwright E2E Regression Test Suite

├── playwright.config.js       # Global configuration \& automated artifact capture

├── .gitignore                 # Safe deployment filter rule definition

└── README.md                  # Professional documentation handbook

