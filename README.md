# RandomJokes API (NodeJS)

Simple API to fetch random joke

## Requeriments
- Node.js version >= 10.3.0
- MySQL Server

## MySQL Server installation

Here you can find some installation guides depending on your OS:
[MySQL Installation Guide](https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/)

You can find the database use in this project in sqls/randomjokes.sql (includes 400 jokes examples for testing)

## Project installation guide
Install dependencies
 - npm install

Set your settings
 - Change .env.example to .env
 - Change default settings to match your installation

Run locally
 - npm run dev

## Project structure

```
├── package.json
|
├── src # Source code folder
    ├── index.ts # Main file with dependencies references and project info
    ├── db.ts # Database (MySQL) connection
    ├── types.d.ts # Declaration file for types and interfaces
    ├── routes
        ├── joke.ts # Routes for /api/joke
├── sqls # Folder with queries for create a database from scratch
```