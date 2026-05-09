# API Testing — TMDB

API testing project using Jest, Axios and GitHub Actions against the TMDB production API.

![Tests](https://github.com/VladimirRamirez07/api-testing-tmdb/actions/workflows/tests.yml/badge.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Jest](https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=githubactions&logoColor=white)
![MIT License](https://img.shields.io/badge/License-MIT-green?style=flat)
![Tests](https://img.shields.io/badge/Tests-21%20passing-brightgreen?style=flat)

## Tech Stack

- **Jest** — Test framework
- **Axios** — HTTP client
- **dotenv** — Environment variables
- **GitHub Actions** — CI/CD

## Project Structure

```
api-testing-tmdb/
├── src/
│   ├── helpers/
│   │   └── apiClient.js
│   ├── schemas/
│   └── tests/
│       ├── auth.test.js
│       ├── search.test.js
│       ├── pagination.test.js
│       ├── schema.test.js
│       ├── movies.test.js
│       └── errors.test.js
├── .github/
│   └── workflows/
│       └── tests.yml
├── .env
├── .gitignore
├── jest.config.js
└── package.json
```

## Test Coverage

- ✅ Authentication with valid/invalid API key
- ✅ Movie search by title
- ✅ Empty results for unknown movies
- ✅ Pagination data validation
- ✅ JSON schema validation
- ✅ Field type validation
- ✅ Trending movies
- ✅ Movies by genre
- ✅ Movie details by ID
- ✅ Error handling (401, 404, 422)

## Test Suites

| Suite | Tests | Description |
|---|---|---|
| auth.test.js | 2 | Authentication with valid/invalid API key |
| search.test.js | 3 | Movie search and pagination data |
| pagination.test.js | 4 | Pagination behavior and edge cases |
| schema.test.js | 4 | JSON schema and field type validation |
| movies.test.js | 4 | Trending, genres and movie details |
| errors.test.js | 4 | Error handling and invalid requests |
| **Total** | **21** | **6 suites, 21 tests** |

## Setup

1. Clone the repo
2. Install dependencies: `npm install`
3. Create `.env` file:
```
TMDB_BASE_URL=https://api.themoviedb.org/3
TMDB_API_KEY=your_api_key_here
```
4. Run tests: `npm test`
5. Run with coverage: `npm run test:coverage`