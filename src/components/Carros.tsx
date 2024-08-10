import { CarrosVenta } from "../types/Carros"
type CarrosProps = {
    carros: CarrosVenta, 
    addCarrito: (item: CarrosVenta) => void
}
export default function Carros ({carros, addCarrito} : CarrosProps)  {
    const {name, description, marca, price, img} = carros;
  return (
    <>

            <div className="bg-violet-700 text-white rounded-md p-3 grid md:grid-cols-2 gap-3 text-sm hover:cursor-pointer grid-cols-1
            " >
                <div className="flex content-center items-center flex-col space-y-5 justify-center">
                <img className="img-fluid max-h-24" src={`/img/${img}.webp`} alt="imagen carros" />
                <p className="font-bold">Nombre: <span className="font-normal">{name}</span></p>
                </div>
                <div className="space-y-2">
                
                <p className="font-bold ">Marca: <span className="font-normal">{marca}</span> </p>
                <p className="font-bold">Descripcion: <span className="font-normal">{description}</span> </p>
                <p className="font-bold">Precio: <span className="font-normal text-lg"> ${price}</span> </p>
                <button className="p-2 bg-slate-950 font-bold rounded-md hover:bg-slate-700" onClick={() => addCarrito(carros)}
                    >Enviar al carrito</button>
                </div>

          </div>


    </>
  )
}
