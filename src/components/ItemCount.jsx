import React from 'react'
import { useState } from 'react'
import { Button } from '@chakra-ui/react'

const ItemCount = ({ producto }) => {
    const [contador, setContador] = useState(0)
    const mostrarMensaje = () => {
        contador != 0 ? alert(`${contador} producto/s agregado/s al carrito de compras`) : alert(`Tienes ${contador} producto/s en tu lista`)
    }
    const resta = () => contador > 0 && setContador(contador - 1)


    const suma = () => contador < producto.stock && setContador(contador + 1)

    return (
        <div>
            <Button colorScheme={contador ? 'red' : 'gray'} size='sm' disabled={!contador} onClick={resta}>-</Button>
            <Button colorScheme='blue' size='md' onClick={mostrarMensaje}>
                Agregar al Carrito {contador}
            </Button>
            <Button colorScheme={contador < producto.stock ? 'green' : 'gray'} size='sm' disabled={contador >= producto.stock} onClick={suma}>+</Button>
        </div>
    )
}

export default ItemCount;