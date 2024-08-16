import { RegistrationsService } from "./Registrations.service";

const responseMock = {
  data: {
    cpf: '0123456790',
  }
}

jest.mock('./axios', () => ({
  service: {
    get: () => ({ ...responseMock }),
    post: () => ({ ...responseMock }),
    put: () => ({ ...responseMock }),
    delete: () => ({ ...responseMock }),
  }
}));

describe('RegistrationService', () => {
  it('should check call when method is get', async () => {
    expect(await RegistrationsService.get()).toEqual(responseMock.data)
  });
  it('should check call when method is post', async () => {
    expect(await RegistrationsService.post({})).toEqual(responseMock)
  });
  it('should check call when method is update', async () => {
    expect(await RegistrationsService.put('', {})).toEqual(responseMock)
  });
  it('should check call when method is delete', async () => {
    expect(await RegistrationsService.delete('')).toEqual(responseMock)
  });
})