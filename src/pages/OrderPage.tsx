import { useParams } from "react-router-dom"

const OrderPage = () => {
  const { id } = useParams<{ id: string }>()
  return (
    <div>{id}</div>
  )
}

export default OrderPage