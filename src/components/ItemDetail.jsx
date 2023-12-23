import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Button } from '@chakra-ui/react'
import ItemCount from './ItemCount'


const ItemDetail = ({ producto }) => {
  return (
    <Card maxW='sm'>
      <CardBody>
        <Stack mt='6' spacing='3'>
          <Heading size='md' color='green'>
            <img src={producto.imagen} alt={producto.nombre} />
            <br />
            <br />
            <p>Producto: {producto.nombre}</p>
          </Heading>
          <Text color='blue'>Categoría: {producto.tipo}</Text>
          <Text color='blue'>Descripción: {producto.descripcion}</Text>
          <Text color='blue'>Precio: ${producto.precio}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ItemCount producto={producto} />
      </CardFooter>
      <Divider />
    </Card>
  )
}

export default ItemDetail;