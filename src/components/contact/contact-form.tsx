"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactValues } from "@/lib/validations";

const demonstrationMessage =
  "Your inquiry was checked on the server. It was not emailed or saved, because no delivery service is configured. This form is a demonstration.";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      companyWebsite: "",
    },
  });

  async function onSubmit(values: ContactValues) {
    setStatus("loading");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as {
        ok?: boolean;
        message?: string;
      };

      if (!response.ok || !data.ok) {
        setStatus("error");
        setServerMessage(
          data.message ?? "The inquiry could not be checked. Try again.",
        );
        return;
      }

      setStatus("success");
      setServerMessage(data.message ?? demonstrationMessage);
      reset();
    } catch {
      setStatus("error");
      setServerMessage("The inquiry could not be checked. Try again.");
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
      <p className="text-sm leading-6 text-muted">
        Demonstration form. Messages are validated and then discarded. Nothing
        is emailed or stored.
      </p>
      <Field
        id="fullName"
        label="Full name"
        error={errors.fullName?.message}
        registration={register("fullName")}
        autoComplete="name"
      />
      <Field
        id="email"
        label="Email address"
        type="email"
        error={errors.email?.message}
        registration={register("email")}
        autoComplete="email"
      />
      <Field
        id="phone"
        label="Contact number (optional)"
        type="tel"
        error={errors.phone?.message}
        registration={register("phone")}
        autoComplete="tel"
      />
      <Field
        id="subject"
        label="Inquiry subject"
        error={errors.subject?.message}
        registration={register("subject")}
      />
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          className="mt-2"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1 text-sm text-[#8a2b16]">
            {errors.message.message}
          </p>
        ) : null}
      </div>
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="companyWebsite">Company website</label>
        <input
          id="companyWebsite"
          tabIndex={-1}
          autoComplete="off"
          {...register("companyWebsite")}
        />
      </div>
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Checking…" : "Submit inquiry"}
      </Button>
      {status === "success" ? (
        <p role="status" className="rounded-lg bg-[#e7f6f2] p-3 text-sm leading-6 text-brand-deep">
          {serverMessage}
        </p>
      ) : null}
      {status === "error" ? (
        <p role="alert" className="rounded-lg bg-[#fde8e2] p-3 text-sm leading-6 text-[#8a2b16]">
          {serverMessage}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  error,
  registration,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  error?: string;
  registration: UseFormRegisterReturn;
  autoComplete?: string;
}) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        className="mt-2"
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...registration}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-sm text-[#8a2b16]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
