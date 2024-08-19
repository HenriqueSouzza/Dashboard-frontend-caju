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

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: jest.fn(),
}));
