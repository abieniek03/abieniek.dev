import { format, parseISO } from "date-fns";
import { pl } from "date-fns/locale";

export const formattedDate = (date: string, finalFormat: string) => {
  const parsedDate = parseISO(date);
  return format(parsedDate, finalFormat, { locale: pl });
};
