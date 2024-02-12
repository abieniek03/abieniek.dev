"use client";

import { type ReactElement } from "react";
import { useFormContext, useController } from "react-hook-form";

type FormFieldType = "email" | "textarea";

interface IFormField {
  type?: FormFieldType;
  id: string;
  label: string;
}

export default function FormField({
  type,
  id,
  label,
}: Readonly<IFormField>): ReactElement {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { field } = useController({
    control,
    name: id,
  });

  const labelStyles: string =
    "block ml-1 mb-2 text-sm font-medium text-dark dark:text-light";
  const fieldStyles: string = `w-full block p-2.5 outline-none border text-sm rounded-md bg-dark bg-opacity-[1%] focus:ring-0 dark:bg-light dark:bg-opacity-[10%] ${
    errors[id]?.message
      ? "border-error focus:border-error dark:border-error dark:focus:border-error"
      : "focus:border-primary dark:border-light/15 dark:focus:border-primary "
  }`;

  return (
    <div className="mb-3">
      <label htmlFor={id} className={labelStyles}>
        {label} <span className="text-error">*</span>
      </label>
      {type === "textarea" ? (
        <textarea
          rows={7}
          id={id}
          className={`${fieldStyles} h-28`}
          placeholder=""
          value={field.value}
          onChange={field.onChange}
        />
      ) : (
        <input
          type={type || "text"}
          id={id}
          className={fieldStyles}
          placeholder=""
          value={field.value}
          onChange={field.onChange}
        />
      )}

      <p className="mt-2 text-xs font-semibold text-error">
        {errors[id]?.message?.toString()}
      </p>
    </div>
  );
}
