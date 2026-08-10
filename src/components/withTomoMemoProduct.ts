import type { Product } from '../microCMS/apiClient';

export const tomoMemoProduct: Product = {
  id: 'tomo-memo',
  title: 'ともメモ',
  description: 'フレンド管理アプリ',
};

export const withTomoMemoProduct = (cmsProducts: Product[]): Product[] =>
  cmsProducts.some((product) => product.title === tomoMemoProduct.title)
    ? cmsProducts
    : [...cmsProducts, tomoMemoProduct];
