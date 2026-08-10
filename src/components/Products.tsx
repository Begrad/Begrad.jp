import Link from 'next/link';

import adventure from '../assets/appicon/adventure.webp';
import blickbreaker from '../assets/appicon/blickbreaker.webp';
import music from '../assets/appicon/music.webp';
import puzzle from '../assets/appicon/puzzle.webp';
import racing from '../assets/appicon/racing.webp';
import rpg from '../assets/appicon/rpg.webp';
import sharehouse from '../assets/appicon/sharehouse.webp';
import sports from '../assets/appicon/sports.webp';
import strategy from '../assets/appicon/strategy.webp';
import survival from '../assets/appicon/survival.webp';
import styles from '../css/Products.module.css';
import { getProducts, Product } from '../microCMS/apiClient';
import { withTomoMemoProduct } from './withTomoMemoProduct';

const localIcons = [
  blickbreaker,
  sharehouse,
  puzzle,
  adventure,
  racing,
  strategy,
  rpg,
  survival,
  sports,
  music,
].map((icon) => icon.src);

type ProductWithIcon = Product & { imageUrl: string };

const Products = async (): Promise<React.JSX.Element> => {
  let products: ProductWithIcon[] = [];
  let error: string | null = null;

  try {
    const cmsProducts = await getProducts();
    const mergedProducts = withTomoMemoProduct(cmsProducts);

    products = mergedProducts.map((product, index) => ({
      ...product,
      imageUrl: product.productImage?.url ?? localIcons[index % localIcons.length],
    }));
  } catch {
    error = 'プロダクト情報の取得に失敗しました。';
  }

  if (error) {
    return (
      <section id="products" className={styles.products}>
        <h2>Products</h2>
        <p>{error}</p>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section id="products" className={styles.products}>
        <h2>Products</h2>
        <p>現在公開中のプロダクトはありません。</p>
      </section>
    );
  }

  return (
    <section id="products" className={styles.products}>
      <h2>Products</h2>
      <div className={styles['product-list']}>
        {products.map((product) => (
          <div key={product.id} className={styles['product-item']}>
            {product.title === 'ともメモ' ? (
              <Link href="/apps/friend-memo" className={styles['product-link']}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className={styles['product-image']}
                />
                <div className={styles['product-info']}>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </Link>
            ) : (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className={styles['product-image']}
                />
                <div className={styles['product-info']}>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
