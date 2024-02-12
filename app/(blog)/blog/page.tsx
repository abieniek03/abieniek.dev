import { type ReactElement } from "react";
import Link from "next/link";

export default function BlogMainPage(): ReactElement {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="text-center font-semibold">
        <div className="mb-4">
          <p className="mb-1 text-4xl">Strona w budowie...</p>
          <p>Do zobaczenia niedługo!👋</p>
        </div>
        <Link href="/" className="mt-2 text-sm  text-primary hover:underline">
          Wróć na stronę główną
        </Link>
      </div>
    </main>
  );
}
