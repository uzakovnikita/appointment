"use client";

import React from "react";
import { RHFClientForm } from "./RHFClientForm";
import { TanstackClientForm } from "./TanstackClientForm";

enum FormTypes {
  Rhf,
  Tanstack,
}

const formtype = FormTypes.Rhf;

export const ClientForm = () => {
  if (formtype === FormTypes.Rhf) {
    return <RHFClientForm />;
  }

  return <TanstackClientForm />;
};
