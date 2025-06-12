export interface OrderItem {
  menuItemId: string;
  quantity: number;
}

export interface Order {
  id: string;
  tableNumber: number;
  items: OrderItem[];
  status: 'pending' | 'preparing' | 'served';
  createdAt: string;
}
