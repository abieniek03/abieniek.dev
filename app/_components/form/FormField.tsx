"use client";

import { type ReactNode, type ComponentProps } from "react";
import clsx from "clsx";
import { useFormContext, useController } from "react-hook-form";
import { error } from "console";

interface Props {
  id: string;
  label: string;
  children?: ReactNode;
}

export function FormField({
  id,
  label,
  children,
  ...rest
}: Readonly<ComponentProps<"input"> & ComponentProps<"textarea"> & Props>) {
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

  if (rest.type === "checkbox") {
    return (
      <div className="mb-4">
        <div className=" flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            id={id}
            value={field.value}
            onChange={field.onChange}
            {...rest}
          />
          <label htmlFor={id} className=" text-sm">
            {children} {rest.required && <span className="text-error">*</span>}
          </label>
        </div>
        {errors[id]?.message && (
          <p className="ml-5 mt-1 text-xs font-semibold text-error">
            {errors[id]?.message?.toString()}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="mb-3">
      <label htmlFor={id} className={labelStyles}>
        {label} {rest.required && <span className="text-error">*</span>}
      </label>
      {rest.type === "textarea" ? (
        <textarea
          rows={7}
          id={id}
          className={clsx("h-28", fieldStyles)}
          placeholder=""
          value={field.value}
          onChange={field.onChange}
          {...rest}
        />
      ) : (
        <input
          type={rest.type || "text"}
          id={id}
          className={fieldStyles}
          placeholder=""
          value={field.value}
          onChange={field.onChange}
          {...rest}
        />
      )}
      {errors[id]?.message && (
        <p className="mt-2 text-xs font-semibold text-error">
          {errors[id]?.message?.toString()}
        </p>
      )}
    </div>
  );
}
