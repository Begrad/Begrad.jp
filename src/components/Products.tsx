import Link from 'next/link';

import styles from '../css/Products.module.css';
import { products } from '../data/products';

const Products: React.FC = () => {
  return (
    <section id="products" className={styles.products}>
      <h2>Products</h2>
      <div className={styles['product-list']}>
        {products.map((product) => {
          const card = (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={product.imageUrl} alt={product.title} className={styles['product-image']} />
              <div className={styles['product-info']}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            </>
          );

          return (
            <div key={product.id} className={styles['product-item']}>
              {product.href && product.external ? (
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['product-link']}
                >
                  {card}
                </a>
              ) : product.href ? (
                <Link href={product.href} className={styles['product-link']}>
                  {card}
                </Link>
              ) : (
                card
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
