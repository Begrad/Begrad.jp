import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Products.css";

import blickbreaker from "../assets/appicon/blickbreaker.webp";
import sharehouse from "../assets/appicon/sharehouse.webp";
import puzzle from "../assets/appicon/puzzle.webp";
import adventure from "../assets/appicon/adventure.webp";
import racing from "../assets/appicon/racing.webp";
import strategy from "../assets/appicon/strategy.webp";
import rpg from "../assets/appicon/rpg.webp";
import survival from "../assets/appicon/survival.webp";
import sports from "../assets/appicon/sports.webp";
import music from "../assets/appicon/music.webp";
import { getProducts, Product } from "../microCMS/apiClient";

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
];

type ProductWithIcon = Product & { imageUrl: string };

const tomoMemoProduct: Product = {
  id: "tomo-memo",
  title: "ともメモ",
  description: "フレンド管理アプリ",
};

const Products: React.FC = () => {
  const [products, setProducts] = useState<ProductWithIcon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const cmsProducts = await getProducts();
        const mergedProducts = cmsProducts.some(
          (product) => product.title === tomoMemoProduct.title
        )
          ? cmsProducts
          : [...cmsProducts, tomoMemoProduct];

        const productsWithIcons: ProductWithIcon[] = mergedProducts.map(
          (product, index) => ({
            ...product,
            imageUrl:
              product.productImage?.url ??
              localIcons[index % localIcons.length],
          })
        );
        setProducts(productsWithIcons);
      } catch (e) {
        setError("プロダクト情報の取得に失敗しました。");
      } finally {
        setLoading(false);
      }
    };

    void fetchProducts();
  }, []);

  if (loading) {
    return (
      <section id="products" className="products">
        <h2>Products</h2>
        <p>読み込み中...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section id="products" className="products">
        <h2>Products</h2>
        <p>{error}</p>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section id="products" className="products">
        <h2>Products</h2>
        <p>現在公開中のプロダクトはありません。</p>
      </section>
    );
  }

  return (
    <section id="products" className="products">
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            {product.title === "ともメモ" ? (
              <Link to="/apps/friend-memo" className="product-link">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="product-image"
                />
                <div className="product-info">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </Link>
            ) : (
              <>
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="product-image"
                />
                <div className="product-info">
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
