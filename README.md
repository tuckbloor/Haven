# Haven

Haven is a full-stack smart-home automation simulator built with **Laravel 13**, **Vue 3**, **Inertia.js**, and **SQLite**.

The project is designed both as a complete smart-home application and as a practical environment for developing and demonstrating professional software engineering skills including:

- Full-stack Laravel and Vue development
- Automated testing
- Docker and containerisation
- Continuous Integration
- Continuous Deployment
- GitHub Actions
- Deployment automation
- Modern development workflows

Haven is being developed incrementally, with each new feature accompanied by appropriate automated testing and pipeline improvements.

---

## Project Overview

Haven allows users to create and manage a simulated smart home containing:

- Homes
- Rooms
- Smart devices
- Device states
- Automations
- Schedules
- Alerts
- Activity history
- Dashboard statistics

The application provides a realistic domain for developing and testing everything from authentication and database behaviour through to automation rules, APIs, queues, events, notifications, and deployment pipelines.

---

## Technology Stack

### Backend

- PHP 8.5
- Laravel 13
- Laravel Breeze
- Inertia.js
- SQLite
- PHPUnit

### Frontend

- Vue 3
- Composition API
- Vite
- Tailwind CSS
- Inertia.js

### Infrastructure & DevOps

- Docker
- Docker Compose
- nginx
- PHP-FPM
- Git
- GitHub
- GitHub Actions
- Self-hosted GitHub Actions runner
- Automated CI/CD pipeline

---

## Application Architecture

Haven is a standard Laravel and Vue application.

Docker provides a containerised runtime around the application without making the source code dependent on Docker.

```text
Haven
│
├── Laravel 13
│   ├── Routes
│   ├── Controllers
│   ├── Models
│   ├── Services
│   ├── Validation
│   └── PHPUnit Tests
│
├── Vue 3
│   ├── Pages
│   ├── Components
│   └── Frontend Tests
│
├── Inertia.js
│   └── Laravel ↔ Vue integration
│
├── SQLite
│
├── Docker
│   ├── nginx
│   └── PHP-FPM
│
└── GitHub Actions
    ├── Continuous Integration
    └── Continuous Deployment
```

This separation allows Haven to be developed normally while also being built, tested, and deployed through an automated container-based workflow.

---

# Docker

Haven includes Docker environments for running and testing the application in a consistent environment.

The Docker architecture currently consists of:

```text
Docker Compose
│
├── nginx
│   └── Web server
│
└── PHP-FPM
    └── Laravel application
```

The Laravel source code is mounted into the containers, allowing the same application source to be used by both the local development environment and Docker.

### Local development deployment

```text
http://localhost:8090
```

### Automated CD test deployment

```text
http://localhost:8092
```

The two environments are isolated using separate Docker Compose projects.

Docker configuration includes:

```text
compose.yaml
compose.test.yaml

docker/
├── nginx/
│   └── default.conf
│
└── php/
    └── Dockerfile
```

---

# Automated Testing

Automated testing is a core part of Haven rather than an afterthought.

Laravel tests are organised under:

```text
tests/
├── Feature/
└── Unit/
```

The test suite currently covers important application behaviour including:

- Login
- Authentication
- Invalid login attempts
- Registration
- Logout
- Password reset
- Password confirmation
- Email verification
- Profile management
- Protected routes
- Dashboard access
- Verified and unverified users
- Inertia page responses

Tests can be executed locally using:

```bash
php artisan test
```

As Haven grows, the test suite will progressively demonstrate:

```text
Unit Testing
Feature Testing
Database Testing
Authentication Testing
Validation Testing
HTTP Testing
API Testing
Mocking
Spies
Fakes
Events
Notifications
Queues
Mail
Storage
Scheduled Tasks
External API Testing
Frontend Testing
End-to-End Testing
```

The goal is not simply to accumulate tests, but to apply the appropriate testing technique to real application behaviour.

---

# Continuous Integration

Haven has an automated **Continuous Integration pipeline using GitHub Actions**.

The workflow is defined in:

```text
.github/workflows/tests.yml
```

CI runs when code is pushed to:

```text
main
develop
```

and when Pull Requests target those branches.

GitHub Actions creates a clean Linux environment and performs the application build and test process automatically.

```text
Developer
    │
    │ git push
    ▼
GitHub
    │
    ▼
GitHub Actions
    │
    ├── Checkout source
    │
    ├── Configure PHP 8.5
    │
    ├── Configure Node 24
    │
    ├── Install Composer dependencies
    │
    ├── Install npm dependencies
    │
    ├── Configure Laravel
    │
    ├── Generate application key
    │
    ├── Generate Ziggy routes
    │
    ├── Run database migrations
    │
    ├── Build Vue / Vite
    │
    └── Run Laravel test suite
    │
    ▼
 PASS / FAIL
```

A failed test prevents the deployment stage from running.

This provides an automated quality gate between source-code changes and deployment.

---

# Continuous Deployment

Haven also includes a working **Continuous Deployment pipeline**.

When code is pushed to the `main` branch:

```text
git push
    │
    ▼
GitHub Actions
    │
    ▼
Continuous Integration
    │
    ├── Install dependencies
    ├── Build application
    ├── Run migrations
    └── Run automated tests
    │
    ▼
Tests pass?
   / \
 NO   YES
 │     │
 ▼     ▼
STOP   CD
       │
       ▼
Self-hosted Windows Runner
       │
       ├── Checkout latest source
       ├── Install Composer dependencies
       ├── Install Node dependencies
       ├── Configure deployment environment
       ├── Generate Laravel application key
       ├── Generate Ziggy routes
       ├── Build Vue application
       ├── Build Docker environment
       ├── Start deployment containers
       ├── Run database migrations
       └── Configure SQLite permissions
       │
       ▼
Haven Test Deployment
http://localhost:8092
```

The deployment job runs only when:

1. The change has been pushed to `main`.
2. The CI job has completed successfully.

This means deployment is dependent on a successful automated test run.

---

## CI/CD Architecture

Haven currently demonstrates the following complete workflow:

```text
                    DEVELOPMENT
                         │
                    Change code
                         │
                    Git commit
                         │
                     Git push
                         │
                         ▼
                 ┌───────────────┐
                 │    GitHub     │
                 └───────┬───────┘
                         │
                         ▼
              ┌─────────────────────┐
              │  GitHub Actions CI  │
              └──────────┬──────────┘
                         │
                  Build + Test
                         │
                    ┌────┴────┐
                    │         │
                  FAIL       PASS
                    │         │
                    ▼         ▼
                   STOP      CD
                              │
                              ▼
                   ┌──────────────────┐
                   │ Self-hosted      │
                   │ Windows Runner   │
                   └────────┬─────────┘
                            │
                       Docker Build
                            │
                       DB Migration
                            │
                         Deploy
                            │
                            ▼
                  ┌───────────────────┐
                  │ Haven Test Site   │
                  │ localhost:8092    │
                  └───────────────────┘
```

This provides a practical implementation of:

**Code → Build → Test → Quality Gate → Deploy**

rather than CI/CD existing only as a theoretical exercise.

---

# Why CI/CD Matters

Without automation, developers must remember to manually build, test, and deploy every change.

Haven's pipeline instead provides:

```text
Source change
      ↓
Version control
      ↓
Automated build
      ↓
Automated tests
      ↓
Quality gate
      ↓
Automated deployment
```

This improves consistency and makes failures visible before a change reaches the deployment environment.

It also provides a foundation for adding more advanced DevOps practices later.

---

# Planned Pipeline Improvements

The current CI/CD pipeline provides automated build, testing, and deployment.

Future improvements will progressively introduce:

```text
PHPUnit
   ↓
Frontend Tests
   ↓
Static Analysis
   ↓
Code Style Checks
   ↓
Security Checks
   ↓
Docker Image Build
   ↓
Container Health Checks
   ↓
Versioned Images
   ↓
Deployment
   ↓
Post-deployment Verification
   ↓
Automated Rollback
```

Potential technologies and techniques include:

- Laravel Pint
- PHPStan / Larastan
- Vitest
- Vue Test Utils
- Playwright
- Docker image registries
- Health checks
- Deployment environments
- GitHub Secrets
- Versioned releases
- Rollback strategies

---

# Planned Haven Features

Haven will progressively grow into a complete simulated smart-home management system.

Planned functionality includes:

- Multiple homes
- Rooms
- Smart devices
- Device status
- Device controls
- Automations
- Automation rules
- Schedules
- Alerts
- Activity history
- Dashboard statistics
- Smart-home simulation

Example:

```text
Home
│
├── Living Room
│   ├── Main Light
│   ├── Television
│   └── Temperature Sensor
│
├── Kitchen
│   ├── Lights
│   └── Smart Plug
│
└── Bedroom
    ├── Lights
    └── Heating
```

Automations will support rules such as:

```text
IF motion is detected
AND time is after 18:00
THEN turn on hallway light
```

These features provide realistic scenarios for increasingly advanced automated testing.

---

# Development Workflow

The Haven development process follows a test-driven and automated delivery workflow:

```text
Develop feature
      ↓
Write / update tests
      ↓
Run tests locally
      ↓
Commit changes
      ↓
Push to GitHub
      ↓
GitHub Actions CI
      ↓
Automated build
      ↓
Automated tests
      ↓
     PASS?
    /     \
   NO      YES
   │        │
   ▼        ▼
 Fix      Deploy
 code       │
            ▼
      CD test environment
```

This allows each new feature to exercise both the application architecture and the delivery pipeline.

---

# Current Project Status

Haven currently includes:

- ✅ Laravel 13
- ✅ PHP 8.5
- ✅ Vue 3
- ✅ Composition API
- ✅ Inertia.js
- ✅ Server-side rendering support
- ✅ Laravel Breeze authentication
- ✅ SQLite
- ✅ Docker
- ✅ Docker Compose
- ✅ nginx
- ✅ PHP-FPM
- ✅ PHPUnit automated tests
- ✅ GitHub repository
- ✅ GitHub Actions
- ✅ Continuous Integration
- ✅ CI quality gate before deployment
- ✅ Self-hosted GitHub Actions runner
- ✅ Automated Continuous Deployment
- ✅ Separate CD test environment

Development is now moving toward the smart-home domain and progressively more advanced automated testing and DevOps practices.

---

# Repository

Haven is maintained on GitHub under:

```text
tuckbloor/Haven
```

---

# License

This project is licensed under the terms contained in the repository's `LICENSE` file.
