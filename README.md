# API Testing — TMDB

API testing project using Jest, Axios and GitHub Actions against the TMDB production API.

![Tests](https://github.com/VladimirRamirez07/api-testing-tmdb/actions/workflows/tests.yml/badge.svg)

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
│       └── schema.test.js
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

## Setup

1. Clone the repo
2. Install dependencies: `npm install`
3. Create `.env` file:
TMDB_BASE_URL=https://api.themoviedb.org/3
TMDB_API_KEY=your_api_key_here
4. Run tests: `npm test`
