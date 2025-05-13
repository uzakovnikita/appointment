import { BaseService } from '@/@shared/api'
import { Booking } from './model'

class BookingService extends BaseService {
  createBooking(data: Booking) {
    return this.apiClient('booking/create', {
      method: 'post',
      json: data,
    })
  }
}

export const bookingService = new BookingService()
