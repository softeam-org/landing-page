export const PROJECTS_COUNT = 300;

const FOUNDING_DATE = new Date(1997, 6, 4); // 4 de julho de 1997
const today = new Date();
export const YEARS_OF_EXPERIENCE =
  today.getFullYear() - FOUNDING_DATE.getFullYear() -
  (today < new Date(today.getFullYear(), 6, 4) ? 1 : 0);
