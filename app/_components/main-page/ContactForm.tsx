"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormField } from "@/app/_components/form/FormField";
import { Button } from "@/app/_components/Button";
import { Alert, AlertType } from "@/app/_components/Alert";

interface Iform {
  email: string;
  subject: string;
  message: string;
  privatePolicy: boolean;
}

const messages = {
  email: {
    notAllowed: "Podanie tymczasowego adresu mailowego jest niedozwolone!",
  },
  subject: {
    min: "Temat musi być dłuższy.",
  },
  message: {
    min: "Wiadomość jest za krótka.",
  },
  privatePolicy: {
    accept: "Zgoda jest wymagana.",
  },
};

const isEmailAllowed = (email: string) => {
  const notAllowedDomains = JSON.parse(
    process.env.NEXT_PUBLIC_NOT_ALLOWED_EMAIL_DOMAINS as string,
  );

  return !notAllowedDomains.some((domain: string) =>
    email.endsWith(`@${domain}`),
  );
};

const formSchema = z.object({
  email: z
    .string()
    .email()
    .refine((email) => isEmailAllowed(email), {
      message: messages.email.notAllowed,
    }),
  subject: z.string().min(5, { message: messages.subject.min }),
  message: z.string().min(25, { message: messages.message.min }),
  privatePolicy: z.boolean().refine((accept) => accept === true, {
    message: messages.privatePolicy.accept,
  }),
});

const formDefaultValues: Iform = {
  email: "",
  subject: "",
  message: "",
  privatePolicy: false,
};

export function ContactForm() {
  const form = useForm<Iform>({
    resolver: zodResolver(formSchema),
    defaultValues: formDefaultValues,
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  const [alertTitle, setAlertTitle] = useState<string>("");
  const [alertInfo, setAlertInfo] = useState<string>("");
  const [alertType, setAlertType] = useState<AlertType | undefined>();

  const sendMessage = async (data: Iform) => {
    setAlertVisible(true);
    setAlertType("loading");
    setAlertTitle("Wysyłanie wiadmości...");
    setAlertInfo("");

    const emailResponse = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (emailResponse.status === 200) {
      form.reset();
      setAlertType("success");
      setAlertTitle("Udało się!");
      setAlertInfo("Wiadomość została wysłana.");
      setTimeout(() => {
        setAlertVisible(false);
      }, 6500);
    } else {
      setAlertType("error");
      setAlertTitle("Coś poszło nie tak!");
      setAlertInfo("Nie udało się wysłać wiadomości. Spróbuj ponownie.");
      setTimeout(() => {
        setAlertVisible(false);
      }, 6500);
    }
  };

  return (
    <>
      <Alert
        visible={alertVisible}
        type={alertType}
        title={alertTitle}
        info={alertInfo}
      />
      <FormProvider {...form}>
        <form className="w-full" onSubmit={form.handleSubmit(sendMessage)}>
          <FormField
            type="email"
            id="email"
            label="Adres mailowy"
            required={true}
          />
          <FormField id="subject" label="Temat" required={true} />
          <FormField
            type="textarea"
            id="message"
            label="Wiadomość"
            required={true}
          />

          <FormField
            type="checkbox"
            id="privatePolicy"
            label="Akceptuję politykę prywatności"
            required={true}
          >
            Akceptuję{" "}
            <Link
              href="/polityka-prywatnosci"
              className="font-semibold text-primary hover:underline"
            >
              politykę prywatności
            </Link>
            .
          </FormField>
          <Button wFull={true} disabled={alertType === "loading"}>
            Wyślij wiadomość
          </Button>
        </form>
      </FormProvider>
    </>
  );
}
