export const assetPrefix = process.env.NODE_ENV === 'production' ? '/Notate.ai' : '';

export function withAssetPrefix(path: string): string {
  if (path.startsWith('http') || path.startsWith('//')) {
    return path;
  }
  return `${assetPrefix}${path}`;
}
