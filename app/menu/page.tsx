'use client';

import { useEffect, useState } from 'react';
import MenuItemCard from '@/components/MenuItemCard';
import { MenuItem } from '@/types/menu';

export default function MenuPage() {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const res = await fetch('/api/menu');
      const data = await res.json();
      setMenu(data);
    };
    fetchMenu();
  }, []);

  const handleAdd = (item: MenuItem) => {
    console.log('追加されたメニュー:', item);
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">メニュー一覧</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menu.map((item) => (
          <MenuItemCard key={item.id} item={item} onAdd={handleAdd} />
        ))}
      </div>
    </main>
  );
}
