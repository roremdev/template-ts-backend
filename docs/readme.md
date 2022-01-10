<p align="center">
    <img src="https://avatars.githubusercontent.com/u/87032333?s=200&v=4" alt="Logo" width="80" height="80">
    <h3 align="center">Wise Diet</h3>
    <p align="center">A solution of Evolution Nutrition</p>
</p>

<p align="center">
    <img src="https://img.shields.io/badge/Verion-v0.0.1-EBCB8B?style=for-the-badge" alt="JavaScript" />
</p>

Wise Diet is a solution for improving the health of your body through the use of appropriate meals tailored for your nutrition.

### Getting Started

![NodeJS](https://img.shields.io/badge/v14.X-ECEFF4?style=for-the-badge&logo=Node.js)
![NPM](https://img.shields.io/badge/v7.X-ECEFF4?style=for-the-badge&logo=npm)

#### Installation

For start to develop with this project follow the steps below:

-   Install the dependencies (Use **npm** preferably):

```bash
npm install
```

-   Run the application in mode `development`:

```bash
npm run dev
```

#### Evironment variables

This project uses the following environment variables:

| Available variables | Default value | Description             |
| ------------------- | ------------- | ----------------------- |
| `DOMAIN`            | `localhost`   | The url to access API.  |
| `MODE`              | `development` | The mode of execution.  |
| `PORT`              | `3000`        | The port to access API. |

> **Note.** The environment variables are set by the `.env` file. You can follow the structure to change the name of `.env.example` file.

#### Other requirements

-   **MySQL** >= 8

### Docker for production

![Docker](https://img.shields.io/badge/v20.x-ECEFF4?style=for-the-badge&logo=Docker)

#### How to use?

For to run the docker container, you need to use the implementation inside of `docker-compose.yml`.

-   `docker-compose up -d` to launch the docker container.

-   `docker-compose down` to stop the docker contianer.

#### Environment variables

This image uses environment variables for configuration.

| Available variables | Default value | Description                      |
| ------------------- | ------------- | -------------------------------- |
| `MODE`              | no default    | The mode of execution.           |
| `PORT`              | no default    | The port of access to container. |
