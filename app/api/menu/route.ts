import { NextResponse } from 'next/server';
import { MenuItem } from '@/types/menu';

const menuData: MenuItem[] = [
  { id: '1', name: '唐揚げ定食', price: 850, imageUrl: '/images/karaage.jpg' },
  { id: '2', name: '焼き魚定食', price: 900, imageUrl: '/images/yakizakana.jpg' },
  { id: '3', name: 'とんかつ定食', price: 950, imageUrl: '/images/tonkatsu.jpg' },
];

export async function GET() {
  return NextResponse.json(menuData);
}
