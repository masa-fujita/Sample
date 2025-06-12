import { NextRequest, NextResponse } from 'next/server';
import { Order } from '@/types/order';
import { v4 as uuidv4 } from 'uuid';

let orders: Order[] = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const newOrder: Order = {
      id: uuidv4(),
      tableNumber: body.tableNumber,
      items: body.items,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    orders.push(newOrder);

    return NextResponse.json({ message: '注文を受け付けました', order: newOrder }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: '注文の送信に失敗しました' }, { status: 500 });
  }
}
