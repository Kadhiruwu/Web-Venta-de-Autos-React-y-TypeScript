import type { CarrosVenta, CarrosCompra } from "../types/Carros"

type CompraProps = {
    carro: CarrosCompra[];
    removeFromCart: (id: CarrosVenta['id']) => void
    carroTotal: () => number;
    clearCarro: () => void;
}

export default function CarrosSelect({carro, removeFromCart,carroTotal, clearCarro} : CompraProps) {
  return (
    <>
    <div className="bg-gray-600 p-5">
    <h2 className="font-bold text-lg text-white text-center">Tus Pedidos Seleccinados</h2>
    <div>
        {carro.map(car => (
            <div key={car.id} className="bg-blue-700 p-2 mt-5 rounded-lg text-white grid grid-cols-2 gap-3">
                <div className="text-center">
                    <img src={`/img/${car.img}.webp`} alt="" />
                    <p className="font-bold">Carro: {car.name}</p>
                </div>
                <div className="text-center flex flex-col justify-between">
                <p className="font-bold">Carro: <span className="font-normal">{car.marca}</span></p>
                <p className="font-bold">Precio: <span className="font-normal">{car.price}</span></p>
                <p className="font-bold">Cantidad: <span className="font-normal">{car.quantity}</span></p>
                <button className="bg-red-600 p-2 rounded-md hover:bg-red-800" onClick={() => removeFromCart(car.id)}>Eliminar</button>
                </div>

            </div>
        ))}
    </div>
    <div >
    {carro.length === 0 ? <h3 className="text-white text-center mt-2">Aun no haz seleccionado nada en tu carrito</h3> : <h3 className="text-white text-center mt-2">Gracias por tu preferencia</h3>}
        


      <div className="bg-slate-500 p-2 mt-2 rounded-lg">
        <p className="text-white font-normal">Total a Pagar:<span className="font-black text-white"> ${carroTotal()}</span></p>
      </div>
      <div className="flex  justify-evenly mt-8 text-white">
        <button  className="bg-red-600 font-bold p-2 rounded-md hover:bg-red-900" onClick={clearCarro}>Cancelar Compra</button>
        <button className="bg-green-700 font-bold p-2 rounded-md hover:bg-green-900" onClick={clearCarro}>Confirmar Compra</button>
      </div>
    </div>
  </div>
  </>
  )
}
