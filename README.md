# Fundraising Monorepo

The **Fundraising Monorepo** is a centralized repository designed to streamline the development and management of a fundraising platform. This repository consolidates all the necessary components, including frontend, backend, and shared libraries, in a single codebase to improve collaboration, maintainability, and scalability.

## Table of Contents

- [About the Project](#about-the-project)
  - [Key Features](#key-features)
  - [Tech Stack](#tech-stack)
- [Monorepo Structure](#monorepo-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Contributing](#contributing)
- [License](#license)
- [Support and Community](#support-and-community)

---

## About the Project

The **Fundraising Monorepo** is built to support a seamless and effective fundraising experience, providing tools for managing campaigns, collecting donations, and tracking progress. It is designed with scalability and flexibility in mind, ensuring it can handle diverse fundraising needs.

### Key Features

- **Campaign Management:** Create, edit, and manage fundraising campaigns easily.  
- **Donation Processing:** Secure and intuitive donation workflows.  
- **Progress Tracking:** Real-time updates on fundraising goals and achievements.  
- **Responsive Design:** Optimized for both desktop and mobile platforms.  
- **Centralized Codebase:** Shared libraries and utilities for faster development and reduced redundancy.  

---

### Tech Stack

The project is built using modern, efficient technologies:

- **Frontend:** TypeScript, JavaScript, CSS  
- **Backend:** Node.js  
- **Infrastructure:** Docker, Kubernetes (optional for deployment)  
- **Tools:** Monorepo management with tools like `Nx` or `Lerna` (if applicable)  

---

## Monorepo Structure

The repository is organized as follows:

```
fundraising-monorepo/
│
├── apps/
│   ├── frontend/         # Frontend applications
│   ├── backend/          # Backend services (APIs, database handlers)
│   └── admin-dashboard/  # Admin tools for managing campaigns
│
├── libs/
│   ├── shared/           # Shared components and utilities
│   └── ui/               # Reusable UI components
│
├── scripts/              # DevOps and automation scripts
├── tests/                # Unit and integration tests
└── docs/                 # Documentation resources
```

---

## Getting Started

Follow the steps below to set up the project locally.

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (>= 16.x)  
- **Docker** (>= 20.x) (optional for containerized setup)  
- **Package Manager**: npm or yarn  

### Installation

Clone the repository:

```bash
git clone https://github.com/sisovin/fundraising-monorepo.git
cd fundraising-monorepo
```

Install dependencies for all services:

```bash
# Install dependencies for the entire monorepo
npm install
```

### Running Locally

1. **Start the Backend:**

   ```bash
   cd apps/backend
   npm start
   ```

2. **Start the Frontend:**

   ```bash
   cd apps/frontend
   npm start
   ```

3. **Start the Admin Dashboard (Optional):**

   ```bash
   cd apps/admin-dashboard
   npm start
   ```

Access the application:

- **Frontend:** `http://localhost:3000`  
- **Admin Dashboard:** `http://localhost:3001`

---

## Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository.  
2. Create a new branch: `git checkout -b feature-name`.  
3. Commit your changes: `git commit -m "Description of changes"`.  
4. Push your branch: `git push origin feature-name`.  
5. Open a Pull Request.  

Please follow the [Code of Conduct](CODE_OF_CONDUCT.md) and ensure all contributions are well-documented and tested.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Support and Community

- **Issues:** Report bugs or request features via [GitHub Issues](https://github.com/sisovin/fundraising-monorepo/issues).  
- **Discussions:** Join the [GitHub Discussions](https://github.com/sisovin/fundraising-monorepo/discussions) to share ideas and ask questions.  
- **Contact:** Reach out to the maintainers at [email@example.com](mailto:email@example.com).  

---
