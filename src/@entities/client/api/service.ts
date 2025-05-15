import { BaseService } from '@shared'

class ClientService extends BaseService {
  someMethod() {
    console.log('hello')
  }
}

export const clientService = new ClientService()
