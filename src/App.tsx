import Header from "./components/Header"
import Carros from "./components/Carros"
import { useCar } from "./hooks/useCar"
import CarrosSelect from "./components/CarrosSelect";

function App() {
  const {carro, data, addCarrito, removeFromCart, carroTotal, ClearCarro } = useCar();

  return (
    <>
      <Header/>
      <div className="bg-slate-400 p-4">
      <h1 className="text-center mb-8 font-bold  text-xl">Nuestros Autos Más demandados</h1>
      <div className=" grid md:grid-cols-2fr-1fr gap-3 ">
        
      <main className="grid sm:grid-cols-2 gap-3 ">
      {data.map((carros) => (
        <Carros
        key={carros.id}
        addCarrito={addCarrito}
        carros = {carros}
        />
      ))}
          </main>
          <CarrosSelect
           carro={carro}
           removeFromCart={removeFromCart}
           carroTotal={carroTotal}
           clearCarro={ClearCarro}
          />



      </div>
      </div>
    </>
  )
}

export default App
