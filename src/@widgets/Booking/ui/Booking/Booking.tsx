/* eslint-disable react/no-children-prop */
"use client";

import { useForm } from "@tanstack/react-form";
import { ClientForm } from "../ClientForm";
export function Booking() {
  const form = useForm({
    defaultValues: {
      name: "",
      phone: "",
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
  });
  return <ClientForm />;
}
