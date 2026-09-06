import blickbreaker from '../assets/appicon/blickbreaker.webp';

export type ProductEntry = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  href?: string;
  external?: boolean;
};

export const products: ProductEntry[] = [
  {
    id: 'fincal',
    title: 'Fincal',
    description: '計算機ツールアプリ',
    imageUrl: blickbreaker.src,
  },
  {
    id: 'flyor',
    title: 'Flyor',
    description: 'フライヤー共有SNS',
    imageUrl: '/products/Flyor_logo.png',
    href: 'https://flyor.net',
    external: true,
  },
  {
    id: 'friend-memo',
    title: 'ともメモ',
    description: 'フレンド管理アプリ',
    imageUrl: '/products/FriMemo_logo.png',
    href: '/apps/friend-memo',
  },
  {
    id: 'todon',
    title: 'TodoN',
    description: 'タスク管理アプリ',
    imageUrl: '/products/TodoN_logo.png',
    href: '/apps/todon',
  },
];
