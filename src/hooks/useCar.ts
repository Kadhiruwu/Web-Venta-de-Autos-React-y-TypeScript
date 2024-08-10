
import {useState} from 'react';
import { carItems } from './../data/data';
import { CarrosVenta, CarrosCompra } from '../types/Carros';

const initialCart = () : CarrosCompra[] => {
    const localStorageCart = localStorage.getItem('carro');
    return localStorageCart ? JSON.parse(localStorageCart) : [];
}

export function useCar() {
    const [data] = useState(carItems)
    const [carro, SetCarro] = useState(initialCart);


    function addCarrito(item: CarrosVenta){
        const itemExist = carro.findIndex((car) => car.id === item.id);
        if(itemExist >= 0){
            if(carro[itemExist].quantity >= 9) return;
            const updateCarro = [...carro];
            updateCarro[itemExist].quantity ++
            SetCarro(updateCarro);
        }else{
            const newItem : CarrosCompra = {...item, quantity: 1}
            SetCarro([...carro, newItem])
        }
    }

    function removeFromCart(id : CarrosVenta['id']){
        SetCarro(prevCart => prevCart.filter(car => car.id !== id));
      }

      const carroTotal = () => carro.reduce((total, item) => total + (item.quantity * item.price), 0);

      function ClearCarro(){
        SetCarro([]);
      }

    return{
        carro,
        data,
        addCarrito,
        removeFromCart,
        carroTotal,
        ClearCarro
    }
}

