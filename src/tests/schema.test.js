const apiClient = require('../helpers/apiClient');

describe('TMDB JSON Schema Validation', () => {

  test('movie object should have required fields', async () => {
    const response = await apiClient.get('/movie/popular');
    const movie = response.data.results[0];

    expect(movie).toHaveProperty('id');
    expect(movie).toHaveProperty('title');
    expect(movie).toHaveProperty('overview');
    expect(movie).toHaveProperty('release_date');
    expect(movie).toHaveProperty('vote_average');
    expect(movie).toHaveProperty('popularity');
    expect(movie).toHaveProperty('poster_path');
  });

  test('movie fields should have correct types', async () => {
    const response = await apiClient.get('/movie/popular');
    const movie = response.data.results[0];

    expect(typeof movie.id).toBe('number');
    expect(typeof movie.title).toBe('string');
    expect(typeof movie.overview).toBe('string');
    expect(typeof movie.vote_average).toBe('number');
    expect(typeof movie.popularity).toBe('number');
  });

  test('search response should have correct schema', async () => {
    const response = await apiClient.get('/search/movie', {
      params: { query: 'Inception' }
    });

    expect(typeof response.data.page).toBe('number');
    expect(typeof response.data.total_results).toBe('number');
    expect(typeof response.data.total_pages).toBe('number');
    expect(Array.isArray(response.data.results)).toBe(true);
  });

  test('vote_average should be between 0 and 10', async () => {
    const response = await apiClient.get('/movie/popular');

    response.data.results.forEach(movie => {
      expect(movie.vote_average).toBeGreaterThanOrEqual(0);
      expect(movie.vote_average).toBeLessThanOrEqual(10);
    });
  });

});