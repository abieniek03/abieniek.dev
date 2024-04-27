import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="mx-auto mt-20 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/not-found.png"
          alt=""
          width={200}
          height={200}
          className="mb-4 rounded-full"
        />
        <div className="mb-2 text-center">
          <h1 className="text-7xl font-bold text-primary">404</h1>
          <p>
            Nie udało się znaleźć takiej podstrony
            <span className="font-semibold tracking-widest">...</span>
          </p>
        </div>
        <Link
          href="/"
          className="mt text-sm font-semibold text-primary hover:underline"
        >
          Wróć na stronę główną
        </Link>
      </div>
    </main>
  );
}
