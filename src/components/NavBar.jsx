import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer , Box , Menu , MenuButton , MenuList , MenuItem } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
      <Flex>
  <Box p='4' >
      PowerEcommerce
  </Box>
  <Spacer />

  <Menu>
  <MenuButton >
    Categorías
  </MenuButton>
  <MenuList>
    <MenuItem>Proteínas</MenuItem>
    <MenuItem>Creatinas</MenuItem>
    
 
  </MenuList>
</Menu>



<Spacer />



  <Box p='4' >
      <CartWidget />
  </Box>
</Flex>
      </div>
  )
}

export default NavBar