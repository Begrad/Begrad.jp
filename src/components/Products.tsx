import React from "react";
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

const products = [
  {
    id: 1,
    title: "ブロック崩し",
    description: "クラシックなブロック崩しゲーム。",
    imageUrl: blickbreaker,
  },
  {
    id: 2,
    title: "シミュレーションゲーム",
    description: "複雑な戦略と計画を要するシミュレーションゲーム。",
    imageUrl: sharehouse,
  },
  {
    id: 3,
    title: "パズルゲーム",
    description: "頭脳を駆使する刺激的なパズルゲーム。",
    imageUrl: puzzle,
  },
  {
    id: 4,
    title: "アドベンチャーゲーム",
    description: "壮大な物語と探索を楽しめるアドベンチャーゲーム。",
    imageUrl: adventure,
  },
  {
    id: 5,
    title: "レーシングゲーム",
    description: "高速レースとスリリングな追い越しを体験。",
    imageUrl: racing,
  },
  {
    id: 6,
    title: "ストラテジーゲーム",
    description: "深い戦略と戦術を駆使するストラテジーゲーム。",
    imageUrl: strategy,
  },
  {
    id: 7,
    title: "ロールプレイングゲーム",
    description: "キャラクターを育成しながら冒険するRPG。",
    imageUrl: rpg,
  },
  {
    id: 8,
    title: "サバイバルゲーム",
    description: "厳しい環境下での生存を目指すサバイバルゲーム。",
    imageUrl: survival,
  },
  {
    id: 9,
    title: "スポーツゲーム",
    description: "様々なスポーツを楽しめるスポーツゲーム集。",
    imageUrl: sports,
  },
  {
    id: 10,
    title: "音楽ゲーム",
    description: "リズム感を試す楽しい音楽ゲーム。",
    imageUrl: music,
  },
];

const Products: React.FC = () => {
  return (
    <section id="products" className="products">
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="product-image"
            />
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
