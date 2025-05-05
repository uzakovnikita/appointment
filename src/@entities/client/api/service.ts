import { BaseService } from "@/@shared/api";

class ClientService extends BaseService {
  someMethod() {
    console.log('hello')
  }
}

export const clientService = new ClientService();
