import { createI18n } from "vue-i18n";

import en from "./languages/en";
import ru from "./languages/ru";

export const i18n = createI18n({
  locale: "en",
  messages: {
    en,
    ru,
  },
});
