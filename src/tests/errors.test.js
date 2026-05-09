const apiClient = require('../helpers/apiClient');

describe('TMDB Error Handling', () => {

  test('should return 401 for missing API key', async () => {
    try {
      await apiClient.get('/movie/popular', {
        params: { api_key: '' }
      });
    } catch (error) {
      expect(error.response.status).toBe(401);
      expect(error.response.data.success).toBe(false);
      expect(error.response.data.status_code).toBe(7);
    }
  });

  test('should return 404 for invalid endpoint', async () => {
    try {
      await apiClient.get('/invalid/endpoint/xyz');
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  });

  test('should return 422 for invalid page parameter', async () => {
    try {
      await apiClient.get('/movie/popular', {
        params: { page: -1 }
      });
    } catch (error) {
      expect([400, 422]).toContain(error.response.status);
    }
  });

  test('should return error for invalid movie id format', async () => {
    try {
      await apiClient.get('/movie/abc');
    } catch (error) {
      expect([400, 404]).toContain(error.response.status);
      expect(error.response.data.success).toBe(false);
    }
  });

});