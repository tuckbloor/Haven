# Haven

Haven is a smart-home automation simulator built with **Laravel 13** and **Vue 3**.

The project is being developed as a practical application for learning and demonstrating modern full-stack development, automated testing, Docker, Continuous Integration (CI), and eventually Continuous Deployment (CD).

Haven will allow users to create and manage a simulated smart home containing rooms, devices, automations, schedules, and alerts.

---

## Project Goals

Haven has two main goals:

1. Build a complete smart-home management application.
2. Use the project to learn and demonstrate professional development, testing, Docker, and CI/CD practices.

The project will gradually introduce more advanced testing and DevOps techniques as development progresses.

---

## Technology Stack

### Backend

- PHP 8.5
- Laravel 13
- Laravel Breeze
- Inertia.js
- SQLite

### Frontend

- Vue 3
- Composition API
- Vite
- Tailwind CSS
- Inertia.js

### Development & Deployment

- Docker
- Docker Compose
- nginx
- PHP-FPM
- Git
- GitHub
- GitHub Actions

---

## Application Architecture

Haven is a normal Laravel and Vue application.

Docker provides an isolated environment around the application but the source code remains a standard Laravel project.

```text
Haven
│
├── Laravel 13
│   ├── Routes
│   ├── Controllers
│   ├── Models
│   ├── Services
│   └── PHPUnit Tests
│
├── Vue 3
│   ├── Pages
│   ├── Components
│   └── Frontend Tests
│
├── Inertia.js
│   └── Connects Laravel and Vue
│
├── SQLite
│
├── Docker
│   ├── nginx
│   └── PHP-FPM
│
└── GitHub Actions
    └── Automated CI Pipeline
```

---

## Docker

Haven includes a Docker environment for running the application locally in a production-style setup.

The Docker environment currently contains:

```text
Docker Compose
│
├── nginx
│   └── Web server
│
└── PHP-FPM
    └── Laravel application
```

The Laravel source code is mounted into the containers, meaning the same application can be developed normally on Windows while also being executed and tested through Docker.

The local application is available at:

```text
http://localhost:8090
```

Docker configuration is stored in:

```text
compose.yaml

docker/
├── nginx/
│   └── default.conf
│
└── php/
    └── Dockerfile
```

---

## Automated Testing

Testing is a major part of the Haven project.

Laravel tests are stored under:

```text
tests/
├── Feature/
└── Unit/
```

The test suite currently covers areas including authentication and user account behaviour.

Examples include:

- Login page
- User authentication
- Invalid login attempts
- Registration
- Logout
- Password reset
- Password confirmation
- Email verification
- Profile management

Tests can be run locally with:

```bash
php artisan test
```

As Haven grows, the testing suite will expand to cover:

```text
Unit Testing
Feature Testing
Database Testing
Authentication Testing
Validation Testing
HTTP Testing
API Testing
Mocking
Fakes
Events
Notifications
Queues
Mail
Storage
Scheduled Tasks
Frontend Testing
End-to-End Testing
```

The long-term goal is to use Haven to demonstrate a large range of real-world Laravel and PHP testing techniques.

---

## Continuous Integration

Haven uses **GitHub Actions** for Continuous Integration.

The workflow is stored in:

```text
.github/workflows/tests.yml
```

When code is pushed to:

```text
main
develop
```

or a Pull Request targets those branches, GitHub automatically creates a clean Linux environment and validates the application.

The pipeline performs:

```text
Git Push
    │
    ▼
GitHub Actions
    │
    ├── Checkout Haven
    │
    ├── Install PHP 8.5
    │
    ├── Install Composer dependencies
    │
    ├── Install Node 24
    │
    ├── Install npm dependencies
    │
    ├── Configure Laravel
    │
    ├── Generate Ziggy routes
    │
    ├── Run database migrations
    │
    ├── Build Vue / Vite
    │
    └── Run Laravel tests
    │
    ▼
PASS / FAIL
```

This means every pushed change can be automatically checked before it is considered safe.

---

## Why CI Matters

Without CI, tests depend on a developer remembering to run them manually.

With Haven's CI pipeline:

```text
Developer changes code
        ↓
Developer commits code
        ↓
Developer pushes to GitHub
        ↓
GitHub automatically builds Haven
        ↓
GitHub automatically runs the tests
        ↓
       PASS?
      /     \
    YES      NO
     ↓        ↓
    ✓        ✗
 Safe     Fix code
```

This helps detect problems early and ensures that changes are tested consistently.

---

## CI/CD Roadmap

Haven currently focuses on **Continuous Integration**.

Future stages will expand the pipeline to include:

```text
Code
 ↓
Automated Tests
 ↓
Frontend Tests
 ↓
Static Analysis
 ↓
Code Style Checks
 ↓
Security Checks
 ↓
Build Docker Image
 ↓
Health Check
 ↓
Deployment
 ↓
Rollback if required
```

This will allow Haven to be used as a practical environment for learning a complete CI/CD workflow.

---

## Planned Haven Features

Haven will gradually grow into a complete simulated smart-home system.

Planned functionality includes:

- User authentication
- Homes
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

Automations will eventually allow rules such as:

```text
IF motion is detected
AND time is after 18:00
THEN turn on hallway light
```

These features will provide realistic scenarios for automated testing.

---

## Development Workflow

The intended Haven development workflow is:

```text
Create feature
      ↓
Write / update tests
      ↓
Run tests locally
      ↓
Commit changes
      ↓
Push to GitHub
      ↓
GitHub Actions runs CI
      ↓
PASS
      ↓
Continue development
```

If CI fails, the failure can be investigated before the change progresses further.

---

## Project Status

Haven is currently under active development.

Current work includes:

- Laravel 13 application
- Vue 3 frontend
- Inertia.js integration
- Server-side rendering support
- Laravel Breeze authentication
- SQLite database
- Docker development environment
- nginx + PHP-FPM
- PHPUnit automated tests
- GitHub repository
- GitHub Actions CI pipeline

Future development will add the smart-home domain and progressively more advanced testing and DevOps practices.

---

## Repository

Haven is maintained on GitHub under:

```text
tuckbloor/Haven
```

---

## License

This project is licensed under the terms contained in the repository's `LICENSE` file.
