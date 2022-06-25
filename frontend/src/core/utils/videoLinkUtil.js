/**
 *
 * @param {*} link String
 * @returns
 */
export const getIdVideo = (link) => {
  const url = new URL(link);
  const params = url.searchParams.get("v");

  return params;
};
