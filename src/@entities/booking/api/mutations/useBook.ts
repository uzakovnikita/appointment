import { useMutation } from "@tanstack/react-query";
import { bookingService } from "../service";

export const useBook = () => {
  const { mutate, isError, isPending, isSuccess, reset } = useMutation({
    mutationFn: ({
      clientName,
      phone,
      comment,
    }: {
      clientName: string;
      phone: string;
      comment: string;
    }) => {
      return bookingService.addBook({
        clientName,
        phone,
        comment,
      });
    },
  });

  return { mutate, isError, isPending, isSuccess, reset };
};
