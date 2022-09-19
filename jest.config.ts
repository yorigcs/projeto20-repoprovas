export default {
  clearMocks: true,
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  setupFilesAfterEnv: ['./tests/setupTests.ts']
}
