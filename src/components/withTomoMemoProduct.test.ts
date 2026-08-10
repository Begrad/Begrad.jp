import type { Product } from '../microCMS/apiClient';
import { tomoMemoProduct, withTomoMemoProduct } from './withTomoMemoProduct';

describe('withTomoMemoProduct', () => {
  it('appends the tomo-memo product when it is absent from CMS products', () => {
    const cmsProducts: Product[] = [{ id: '1', title: 'Product A', description: 'desc' }];

    expect(withTomoMemoProduct(cmsProducts)).toEqual([...cmsProducts, tomoMemoProduct]);
  });

  it('does not duplicate the tomo-memo product when the CMS already has one', () => {
    const cmsProducts: Product[] = [
      { id: '1', title: 'Product A', description: 'desc' },
      { id: 'cms-tomo-memo', title: 'ともメモ', description: 'CMS版' },
    ];

    expect(withTomoMemoProduct(cmsProducts)).toEqual(cmsProducts);
  });

  it('returns just the tomo-memo product when the CMS list is empty', () => {
    expect(withTomoMemoProduct([])).toEqual([tomoMemoProduct]);
  });
});
