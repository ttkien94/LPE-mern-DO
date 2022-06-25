import React from "react";
import { useTranslation } from "react-i18next";

/**
 * @function useSiteTitle Change title of page
 * @param {string} title
 * @param  {...any} deps
 */
export default function useSiteTitle(title) {
  const [t] = useTranslation("pageTitle");

  React.useEffect(() => {
    document.title = t(title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);
}
