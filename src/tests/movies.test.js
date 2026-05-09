const apiClient = require('../helpers/apiClient');

describe('TMDB Movies', () => {

  test('should get trending movies', async () => {
    const response = await apiClient.get('/trending/movie/day');

    expect(response.status).toBe(200);
    expect(response.data.results).toBeDefined();
    expect(response.data.results.length).toBeGreaterThan(0);
    expect(response.data.results[0]).toHaveProperty('title');
  });

  test('should get movies by genre', async () => {
    const response = await apiClient.get('/discover/movie', {
      params: { with_genres: 28 } // Action
    });

    expect(response.status).toBe(200);
    expect(response.data.results.length).toBeGreaterThan(0);
    expect(response.data.results[0]).toHaveProperty('id');
    expect(response.data.results[0]).toHaveProperty('title');
  });

  test('should get movie details by id', async () => {
    const response = await apiClient.get('/movie/27205'); // Inception

    expect(response.status).toBe(200);
    expect(response.data.title).toBe('Inception');
    expect(response.data.id).toBe(27205);
    expect(response.data).toHaveProperty('runtime');
    expect(response.data).toHaveProperty('genres');
  });

  test('should return 404 for non-existent movie', async () => {
    try {
      await apiClient.get('/movie/999999999');
    } catch (error) {
      expect(error.response.status).toBe(404);
      expect(error.response.data.success).toBe(false);
    }
  });

});