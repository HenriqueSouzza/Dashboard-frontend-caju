import '@testing-library/jest-dom'

jest.mock('~/constants', () => ({
  Env: {
    api: '',
  }
}));

jest.mock('react-toastify/dist/ReactToastify.css', () => ({
  toast: {
    success: jest.fn(),
  },
}));