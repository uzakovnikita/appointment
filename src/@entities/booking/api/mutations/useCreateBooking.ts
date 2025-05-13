import { useMutation } from '@tanstack/react-query'
import { bookingService } from '../service'
import { Booking } from '../model'

export const useCreateBooking = () => {
  const { mutate, isError, isPending, isSuccess, reset } = useMutation({
    mutationFn: (data: Booking) => {
      return bookingService.createBooking(data)
    },
  })

  return { mutate, isError, isPending, isSuccess, reset }
}
