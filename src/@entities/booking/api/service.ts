import { BaseService } from "@/@shared/api";

class BookingService extends BaseService {
  addBook({
    clientName,
    phone,
    comment,
  }: {
    clientName: string;
    phone: string;
    comment: string;
  }) {
    return this.apiClient("booking/create", {
      method: "post",
      json: {
        clientName,
        phone,
        comment,
      },
    });
  }
}

export const bookingService = new BookingService();
