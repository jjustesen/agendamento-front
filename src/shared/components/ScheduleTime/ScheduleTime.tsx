import {
  Box,
  Divider,
  Grid,
  GridItem,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import React from 'react'
import { FiRepeat, FiTrash, FiMoreVertical } from 'react-icons/fi'
import { IHorariosControllerResponse } from 'shared/service/HorariosController'

interface iProps {
  item: IHorariosControllerResponse
  color: 'whatsapp' | 'gray' | 'instagram'
}

const RstScheduleTime = ({ item, color = 'gray' }: iProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleOpenAndClose = () => {
    if (isOpen) {
      onClose()
    } else {
      onOpen()
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const selectColor: any = {
    whatsapp: { bg: 'whatsapp.500', boxShadow: 'green' },
    instagram: { bg: 'instagram.500', boxShadow: 'green' },
    gray: { bg: 'gray.500', boxShadow: 'gray' }
  }

  return (
    <Grid w="100%" gap={2} onClick={handleOpenAndClose}>
      <GridItem p={4} {...selectColor[color]} borderRadius={16} display="flex">
        <Box>
          <Text color="white" fontSize="3xl" mb={-2} fontWeight="medium">
            {item.horario_atend}
          </Text>
          <Text color="white" fontSize="md" fontWeight="light">
            {item.horario_atend}
          </Text>
        </Box>
        <Divider orientation="vertical" mx={4} />
        <Box>
          <Text color="white" fontSize="lg" fontWeight="medium">
            {item.horario_atend}
          </Text>
          <Text color="white" fontSize="md" fontWeight="light">
            {item.cliente?.nome}
          </Text>
        </Box>
        <Box ml="auto">
          <Menu>
            <MenuButton as={IconButton} icon={<FiMoreVertical />} colorScheme="blackAlpha" variant="ghost" h="100%" />
            <MenuList>
              <MenuItem icon={<FiTrash />}>Cancelar</MenuItem>
              <MenuItem icon={<FiRepeat />}>Remarcar</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </GridItem>
    </Grid>
  )
}

export default RstScheduleTime
