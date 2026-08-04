/**
 * Resolve asset paths with base URL for GitHub Pages subdirectory deployment
 * Converts "/path" to "/Semillero-de-Investigacion/path" when deployed
 */
export const getAssetPath = (path) => {
  return import.meta.env.BASE_URL + path.replace(/^\//, '');
};
