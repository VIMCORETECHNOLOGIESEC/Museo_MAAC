"use client";

import { useCallback, useState } from "react";

export type ContactFormFields = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormApi = {
  form: ContactFormFields;
  update: (field: keyof ContactFormFields, value: string) => void;
  reset: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const initialFields: ContactFormFields = {
  name: "",
  email: "",
  message: "",
};

export function useContactForm(): ContactFormApi {
  const [form, setForm] = useState<ContactFormFields>(initialFields);

  const update = useCallback((field: keyof ContactFormFields, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  }, []);

  const reset = useCallback(() => {
    setForm(initialFields);
  }, []);

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.warn("Contact form not wired yet");
  }, []);

  return { form, update, reset, onSubmit };
}
