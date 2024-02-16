import { formatDistanceToNow, parseISO } from "date-fns";
import { pl } from "date-fns/locale";

export const formattedPostDate = (date: string) => {
  const pardesDate = parseISO(date);
  return formatDistanceToNow(pardesDate, { locale: pl, addSuffix: true });
};
