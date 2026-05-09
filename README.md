# API Testing — TMDB

API testing project using Jest, Axios and GitHub Actions against the TMDB production API.

![Tests](https://github.com/VladimirRamirez07/api-testing-tmdb/actions/workflows/tests.yml/badge.svg)

## Tech Stack

- **Jest** — Test framework
- **Axios** — HTTP client
- **dotenv** — Environment variables
- **GitHub Actions** — CI/CD

## Project Structure
src/
├── helpers/
│   └── apiClient.js    # Axios base client
├── schemas/
└── tests/
├── auth.test.js        # Authentication tests
├── search.test.js      # Search tests
├── pagination.test.js  # Pagination tests
└── schema.test.js      # JSON schema validation
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