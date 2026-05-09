const apiClient = require('../helpers/apiClient');

describe('TMDB Search', () => {

  test('should search movies by title', async () => {
    const response = await apiClient.get('/search/movie', {
      params: { query: 'Inception' }
    });

    expect(response.status).toBe(200);
    expect(response.data.results).toBeDefined();
    expect(response.data.results.length).toBeGreaterThan(0);
    expect(response.data.results[0]).toHaveProperty('title');
    expect(response.data.results[0]).toHaveProperty('id');
  });

  test('should return empty results for unknown movie', async () => {
    const response = await apiClient.get('/search/movie', {
      params: { query: 'xzxzxzxzxzxz123456789' }
    });

    expect(response.status).toBe(200);
    expect(response.data.results).toHaveLength(0);
  });

  test('should return pagination data', async () => {
    const response = await apiClient.get('/search/movie', {
      params: { query: 'Batman' }
    });

    expect(response.data).toHaveProperty('page');
    expect(response.data).toHaveProperty('total_pages');
    expect(response.data).toHaveProperty('total_results');
    expect(response.data.page).toBe(1);
  });

});