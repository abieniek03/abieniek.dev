import { type ReactElement } from "react";
import Image from "next/image";

export default function Logo(): ReactElement {
  return (
    <span className="flex items-center gap-x-0.5 font-semibold">
      <Image
        src="/avatar.png"
        alt=""
        width={30}
        height={30}
        className="mb-1.5"
      />
      <span>
        <span className="text-primary">abieniek</span>
        .dev
      </span>
    </span>
  );
}
