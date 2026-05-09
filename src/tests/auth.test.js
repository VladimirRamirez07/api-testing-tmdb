const apiClient = require('../helpers/apiClient');

describe('TMDB Authentication', () => {

  test('should authenticate successfully with valid API key', async () => {
  const response = await apiClient.get('/authentication');

  expect(response.status).toBe(200);
  expect(response.data.success).toBe(true);
});

  test('should fail with invalid API key', async () => {
    try {
      await apiClient.get('/authentication', {
        params: { api_key: 'invalid_key_123' }
      });
    } catch (error) {
      expect(error.response.status).toBe(401);
      expect(error.response.data.success).toBe(false);
      expect(error.response.data.status_code).toBe(7);
    }
  });

});