"use client";

import { type ReactElement, useState } from "react";

import SectionContainer from "./elements/SectionContainer";
import SectionTitle from "./elements/SectionTitle";
import FormField from "@/components/form/FormField";
import Button from "@/components/Button";
import Alert from "@/components/Alert";

import { useForm, FormProvider } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type AlertType = "loading" | "success" | "error";

interface IContactForm {
  email: string;
  subject: string;
  message: string;
}

const messages = {
  email: {
    valid: "Podaj poprawny adres mailowy.",
  },
  subject: {
    min: "Temat musi być dłuższy.",
  },
  message: {
    min: "Wiadomość jest za krótka.",
  },
  required: "Pole jest wymagane.",
};

const isEmailAllowed = (email: string) => {
  const notAllowedDomains = JSON.parse(
    process.env.NEXT_PUBLIC_NOT_ALLOWED_EMAIL_DOMAINS as string,
  );

  return !notAllowedDomains.some((domain: string) =>
    email.endsWith(`@${domain}`),
  );
};

export const contactFormSchema = z.object({
  email: z
    .string({ required_error: messages.required })
    .email({ message: messages.email.valid })
    .refine((email) => isEmailAllowed(email), {
      message: "Podanie tymczasowego adresu mailowego jest niedozwolone!",
    }),
  subject: z
    .string({ required_error: messages.required })
    .min(5, { message: messages.subject.min }),
  message: z
    .string({ required_error: messages.required })
    .min(25, { message: messages.message.min }),
});

export default function SectionContact(): ReactElement {
  const contactForm = useForm<IContactForm>({
    resolver: zodResolver(contactFormSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  const [alertTitle, setAlertTitle] = useState<string>(
    "Wysyłanie wiadmości...",
  );
  const [alertInfo, setAlertInfo] = useState<string>("");
  const [alertType, setAlertType] = useState<AlertType>("loading");

  const sendMessage = async (data: IContactForm) => {
    setAlertVisible(true);
    setAlertType("loading");
    setAlertTitle("Sending a message...");
    setAlertInfo("");

    const emailResponse = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (emailResponse.status === 200) {
      contactForm.reset();
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
    <SectionContainer id="kontakt">
      <SectionTitle>Skontaktuj się ze mną</SectionTitle>
      <p className="text-center">
        Napisz bezpośrednio na{" "}
        <a
          href="mailto:kontakt@abieniek.dev"
          className="font-semibold text-primary hover:underline"
        >
          kontakt@abieniek.dev
        </a>{" "}
        lub skorzystaj z formularza kontaktowego .
      </p>
      <div className="mt-10">
        <Alert
          visible={alertVisible}
          type={alertType}
          title={alertTitle}
          info={alertInfo}
        />
        <FormProvider {...contactForm}>
          <form
            className="mx-auto max-w-lg"
            onSubmit={contactForm.handleSubmit(sendMessage)}
          >
            <FormField type="email" id="email" label="Adres mailowy" />
            <FormField id="subject" label="Temat" />
            <FormField type="textarea" id="message" label="Wiadomość" />
            <div className="mt-5">
              <Button type="primary" fullWidth={true}>
                Wyślij wiadmość
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </SectionContainer>
  );
}
