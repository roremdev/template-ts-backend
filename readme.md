<p align="center">
    <img src="./markdown/logo.svg" alt="Logo" width="80" height="80" />
    <h3 align="center">Project Name</h3>
    <p align="center">Description</p>
</p>

<p align="center">
    <img src="https://img.shields.io/badge/Verion-v0.0.1-EBCB8B?style=for-the-badge" alt="Version" />
</p>

<p align="center">
    <img src="https://img.shields.io/badge/v14.X-ECEFF4?style=for-the-badge&logo=Node.js" alt="NodeJS" />
    <img src="https://img.shields.io/badge/v7.X-ECEFF4?style=for-the-badge&logo=npm" alt="NPM" />
    <img src="https://img.shields.io/badge/v20.x-ECEFF4?style=for-the-badge&logo=Docker" alt="Docker" />
</p>

<p align="center">
    <img src="https://img.shields.io/badge/supported-A7C9E6?style=for-the-badge&logo=Typescript" alt="Typescript" />
    <img src="https://img.shields.io/badge/v3.x-ECEFF4?style=for-the-badge&logo=Prisma&logoColor=2E3440" alt="Prisma" />
    <img src="https://img.shields.io/badge/v14.x-ECEFF4?style=for-the-badge&logo=postgresql" alt="Postgresql" />
</p>

### 📦 Getting Started

#### ⚙️ Installation

For start to develop with this project follow the steps below:

-   Install the dependencies (Use **npm** preferably):

```bash
npm install
```

-   Run the application in mode `development`:

```bash
npm run dev
```

This project uses the following environment variables:

| Available variables | Description                   |
| ------------------- | ----------------------------- |
| `DOMAIN`            | The domain on listen.         |
| `MODE`              | The mode of execution.        |
| `PORT`              | The port of access to server. |

> **Note.** The environment variables are set by the `.env` file. You can follow the structure to change the name of `.env.example` file.

### 🚀 Docker for production

For to run the docker containers, you need to use the implementation:

-   `docker-compose up -d` to launch the docker container.

-   `docker-compose down` to stop the docker contianer.

> **Note.** For only launch DB environment, exec `docker-compose up -d postgres` in mode silence.

#### ⚙️ Installation

This image uses environment variables for configuration.

| Available variables | Description                               |
| ------------------- | ----------------------------------------- |
| `DOMAIN`            | The domain on listen.                     |
| `MODE`              | The mode of execution.                    |
| `PORT`              | The port of access to container.          |
| `DB_USER`           | The user to container database.           |
| `DB_PASSWORD`       | The password to container database.       |
| `DB_PORT`           | The port of access to container database. |

### 😎 Author

> **Emmanuel Rodriguez** - Full Stack Developer

[![Twitter](https://img.shields.io/badge/Twitter-ECEFF4?style=for-the-badge&logo=Twitter)](https://twitter.com/roremDev)
[![GitHub](https://img.shields.io/badge/GitHub-ECEFF4?style=for-the-badge&logo=GitHub&logoColor=2E3440)](https://github.com/roremdev)
[![Medium](https://img.shields.io/badge/Medium-ECEFF4?style=for-the-badge&logo=Medium&logoColor=2E3440)](https://medium.com/@roremDev)
