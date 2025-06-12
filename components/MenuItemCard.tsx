'use client';

import { MenuItem } from '@/types/menu';

interface Props {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
}

export default function MenuItemCard({ item, onAdd }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
      {item.imageUrl && (
        <img src={item.imageUrl} alt={item.name} className="w-full h-40 object-cover rounded" />
      )}
      <h2 className="text-lg font-bold mt-2">{item.name}</h2>
      <p className="text-gray-600">￥{item.price}</p>
      <button
        onClick={() => onAdd(item)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        追加
      </button>
    </div>
  );
}
