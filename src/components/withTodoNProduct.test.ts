import type { Product } from '../microCMS/apiClient';
import { todoNProduct, withTodoNProduct } from './withTodoNProduct';

describe('withTodoNProduct', () => {
  it('appends the TodoN product when it is absent from CMS products', () => {
    const cmsProducts: Product[] = [{ id: '1', title: 'Product A', description: 'desc' }];

    expect(withTodoNProduct(cmsProducts)).toEqual([...cmsProducts, todoNProduct]);
  });

  it('does not duplicate the TodoN product when the CMS already has one', () => {
    const cmsProducts: Product[] = [
      { id: '1', title: 'Product A', description: 'desc' },
      { id: 'cms-todon', title: 'TodoN', description: 'CMS版' },
    ];

    expect(withTodoNProduct(cmsProducts)).toEqual(cmsProducts);
  });

  it('returns just the TodoN product when the CMS list is empty', () => {
    expect(withTodoNProduct([])).toEqual([todoNProduct]);
  });
});
