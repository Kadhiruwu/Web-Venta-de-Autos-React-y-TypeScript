

export default function Header() {
  return (
    <>
    <header className="bg-blue-400 py-5 px-10 flex justify-between items-center sm:flex-row flex-col text-center">
    <h1 className="text-white font-black text-3xl">Cars Shop</h1>
    <nav className=" text-white font-bold flex flex-col sm:flex-row">
      <a className="p-3 hover:bg-blue-800 rounded-md " href="">Nosotros</a>
      <a className="p-3 hover:bg-blue-800 rounded-md " href="">Contactanos</a>
      <a className="p-3 hover:bg-blue-800 rounded-md " href="">Mi Perfil</a>
    </nav>
  </header>
  </>
  )
}
