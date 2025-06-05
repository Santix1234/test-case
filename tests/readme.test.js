const fs = require('fs');
const path = require('path');

describe('README Documentation', () => {
  let readmeContent;

  beforeAll(() => {
    readmeContent = fs.readFileSync(path.resolve(__dirname, '../readme.md'), 'utf8');
  });

  test('README should contain MCP Integration Testing section', () => {
    expect(readmeContent).toContain('MCP Integration Testing');
  });

  test('README should have detailed testing strategies', () => {
    expect(readmeContent).toContain('Testing Strategies');
    expect(readmeContent).toContain('Dependency Mocking');
    expect(readmeContent).toContain('Scenario-based Testing');
  });

  test('README formatting is correct', () => {
    // Check for proper markdown headers
    expect(readmeContent).toMatch(/^# /m);  // Main header
    expect(readmeContent).toMatch(/^## /m);  // Section headers
  });

  test('README provides test execution instructions', () => {
    expect(readmeContent).toContain('npm run test:integration');
  });
});