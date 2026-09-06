import type { Product } from '../microCMS/apiClient';

export const todoNProduct: Product = {
  id: 'todon',
  title: 'TodoN',
  description: 'タスク管理アプリ',
};

export const withTodoNProduct = (cmsProducts: Product[]): Product[] =>
  cmsProducts.some((product) => product.title === todoNProduct.title)
    ? cmsProducts
    : [...cmsProducts, todoNProduct];
