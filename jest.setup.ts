import '@testing-library/jest-dom'

jest.mock('~/constants', () => ({
  Env: {
    api: '',
  }
}));