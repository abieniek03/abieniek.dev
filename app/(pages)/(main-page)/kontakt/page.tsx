"use client";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { PageTitle } from "@/app/_components/PageTitle";
import { FormField } from "@/app/_components/form/FormField";
import { Button } from "@/app/_components/Button";
import { Alert, AlertType } from "@/app/_components/Alert";
import Link from "next/link";

interface IContactForm {
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

const contactFormSchema = z.object({
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

const contactFormDefaultValues: IContactForm = {
  email: "",
  subject: "",
  message: "",
  privatePolicy: false,
};

export default function ContactPage() {
  const contactForm = useForm<IContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: contactFormDefaultValues,
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  const [alertTitle, setAlertTitle] = useState<string>("");
  const [alertInfo, setAlertInfo] = useState<string>("");
  const [alertType, setAlertType] = useState<AlertType | undefined>();

  const sendMessage = async (data: IContactForm) => {
    setAlertVisible(true);
    setAlertType("loading");
    setAlertTitle("Wysyłanie wiadmości...");
    setAlertInfo("");

    const emailResponse = await fetch("/api/email", {
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
    <>
      <div className="max-w-[80%]">
        <PageTitle>Skontaktuj się ze mną</PageTitle>
      </div>

      <div className="lg:mt-14 lg:flex">
        <div className="mb-10 w-full max-w-lg lg:mb-0">
          <p>
            Masz pytanie, ofertę współpracy? Skorzystaj z&nbsp;formularza
            kontaktowego lub&nbsp;napisz bezpośrednio na{" "}
            <a
              href="mailto:kontakt@abieniek.dev"
              className="font-semibold text-primary hover:underline"
            >
              kontakt@abieniek.dev
            </a>
          </p>
        </div>
        <div className="mx-auto w-full lg:ml-10 lg:w-3/4">
          <Alert
            visible={alertVisible}
            type={alertType}
            title={alertTitle}
            info={alertInfo}
          />
          <FormProvider {...contactForm}>
            <form
              className="w-full"
              onSubmit={contactForm.handleSubmit(sendMessage)}
            >
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
        </div>
      </div>
    </>
  );
}
