import { Metadata } from "next";

import { PageTitle } from "@/app/_components/PageTitle";
import { ContactForm } from "@/app/_components/main-page/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
};

export default function ContactPage() {
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
          <ContactForm />
        </div>
      </div>
    </>
  );
}
