const apiClient = require('../helpers/apiClient');

describe('TMDB Pagination', () => {

  test('should return page 1 by default', async () => {
    const response = await apiClient.get('/movie/popular');

    expect(response.status).toBe(200);
    expect(response.data.page).toBe(1);
    expect(response.data.results).toHaveLength(20);
  });

  test('should return page 2 when requested', async () => {
    const response = await apiClient.get('/movie/popular', {
      params: { page: 2 }
    });

    expect(response.status).toBe(200);
    expect(response.data.page).toBe(2);
  });

  test('page 1 and page 2 should have different results', async () => {
    const page1 = await apiClient.get('/movie/popular', { params: { page: 1 } });
    const page2 = await apiClient.get('/movie/popular', { params: { page: 2 } });

    const ids1 = page1.data.results.map(m => m.id);
    const ids2 = page2.data.results.map(m => m.id);

    const hasDuplicates = ids1.some(id => ids2.includes(id));
    expect(hasDuplicates).toBe(false);
  });

  test('should return 400 or 422 for invalid page number', async () => {
    try {
      await apiClient.get('/movie/popular', {
        params: { page: 99999 }
      });
    } catch (error) {
      expect([400, 422]).toContain(error.response.status);
    }
  });

});