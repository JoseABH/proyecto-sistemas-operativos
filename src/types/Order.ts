export interface OrderItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
}

export interface Order {
    mesaId: number;
    items: OrderItem[];
}