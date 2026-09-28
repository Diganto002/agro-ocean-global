/**
 * Asset URL resolver that works seamlessly on both local dev and GitHub Pages subpaths
 */
export function getAssetUrl(path) {
  if (!path) return '';
  const clean = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL || './';
  return base.endsWith('/') ? `${base}${clean}` : `${base}/${clean}`;
}
