import getCharaсterHealth from '../getCharaсterHealth';

test.each([
  [51, 'healthy'],
  [50, 'wounded'],
  [14, 'critical'],
])('testing getCharaсterHealth function for character with %i health', (health, expected) => {
  const healthStatus = getCharaсterHealth({ name: '', health });
  expect(healthStatus).toBe(expected);
});
