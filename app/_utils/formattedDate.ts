import { format, parseISO } from "date-fns";
import { pl } from "date-fns/locale";

export const formattedDate = (date: string) => {
  const parsedDate = parseISO(date);
  return format(parsedDate, "LLLL yyyy", { locale: pl });
};
