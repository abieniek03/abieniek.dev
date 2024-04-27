import { formattedDate } from "@/app/_utils/formattedDate";

interface Props {
  link: string;
  title: string;
  description: string;
  dateStart: string;
  inProgress: boolean;
}

export function ProjectItem({
  link,
  title,
  description,
  dateStart,
  inProgress,
}: Props) {
  return (
    <a
      href={link}
      rel="noopener"
      target="_blank"
      className="w-full cursor-pointer rounded-lg p-4 text-sm transition-all duration-300 hover:bg-light-darker dark:hover:bg-light-darker/5 lg:flex lg:gap-x-10"
    >
      <div className="relative mb-2 w-full before:absolute before:-left-2 before:h-5 before:w-[2px] before:bg-primary lg:mb-0 lg:mt-1 lg:max-w-36">
        <span>{formattedDate(dateStart, "LLLL yyyy")}</span>
        {inProgress && (
          <span className="rounded-lg text-xs font-bold uppercase text-primary lg:mt-2 lg:block">
            <span className="mx-2 text-dark dark:text-light  lg:hidden">•</span>
            in&nbsp;progress
          </span>
        )}
      </div>
      <div className="w-full">
        <p className="text-xl font-bold">{title}</p>
        <p>{description}</p>
      </div>
    </a>
  );
}
