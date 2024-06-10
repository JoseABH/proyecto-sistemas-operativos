
export interface Mesas {
    id: string;
    mesaId:number;
  personas: number;
    status: boolean;
    statusPedido: number;
    pedido: Pedido[];
    createdAt: string;
  }
  
  interface Pedido {
    pedido: string;
    cant: number;
    precio: number;
}
