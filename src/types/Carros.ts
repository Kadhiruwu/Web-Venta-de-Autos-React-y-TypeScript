export type CarrosVenta = {
    id: number,
    name: string,
    description: string,
    marca: string,
    price: number,
    img: string

}

export type CarrosCompra = CarrosVenta &{
    quantity: number
}