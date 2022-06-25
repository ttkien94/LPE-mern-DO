import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import pageTitleUs from "./us/pageTitle.json";
import pageTitleVn from "./vn/pageTitle.json";
import commonUs from "./us/common.json";
import commonVn from "./vn/common.json";

i18n.use(LanguageDetector).init({
  resources: {
    "en-EN": {
      pageTitle: pageTitleUs,
      common: commonUs,
    },
    "vi-VN": {
      pageTitle: pageTitleVn,
      common: commonVn,
    },
  },
  fallbackLng: "vi-vn",
  debug: true,
  ns: ["pageTitle"],
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ",",
  },

  react: {
    wait: true,
  },
});

export default i18n;
