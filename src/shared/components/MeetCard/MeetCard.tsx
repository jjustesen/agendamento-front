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
  useDisclosure,
  useToast
} from '@chakra-ui/react'
import moment from 'moment'
import React from 'react'
import { FiTrash, FiMoreVertical } from 'react-icons/fi'
import { iMeetsControllerResponse, useMutationMeetsControllerCancel } from 'shared/service/MeetsController'

interface iProps {
  item: iMeetsControllerResponse
  color: 'whatsapp' | 'gray' | 'instagram'
}

const RstMeetCard = ({ item, color = 'gray' }: iProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { mutate: cancelTime } = useMutationMeetsControllerCancel({ employe_id: item.id })

  const toast = useToast()

  const handleOpenAndClose = () => {
    if (isOpen) {
      onClose()
    } else {
      onOpen()
    }
  }

  const handleCancelTime = () => {
    cancelTime(undefined, {
      onSuccess: () => {
        toast({
          title: 'Horário cancelado',
          description: 'Este horário foi cancelado com sucesso',
          status: 'success'
        })
        onClose()
      },
      onError: () => {
        toast({
          title: 'Erro ao cancelar horário',
          description: 'Ocorreu um erro ao cancelar este horário',
          status: 'error'
        })
      }
    })
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
          <Text color="white" fontSize="3xl" mb={-1} fontWeight="medium">
            {moment(item.start_meet).format('HH:mm')}
          </Text>
          <Text color="white" fontSize="md" fontWeight="light">
            {moment(item.end_meet).format('HH:mm')}
          </Text>
        </Box>
        <Divider orientation="vertical" mx={4} />
        <Box>
          <Text color="white" fontSize="lg" fontWeight="medium">
            {item.title}
          </Text>
          <Text color="white" fontSize="md" fontWeight="light">
            {item.client?.name}
          </Text>
        </Box>
        <Box ml="auto">
          <Menu>
            <MenuButton as={IconButton} icon={<FiMoreVertical />} colorScheme="blackAlpha" variant="ghost" h="100%" />
            <MenuList>
              <MenuItem icon={<FiTrash />} onClick={handleCancelTime} disabled={!item.client_id}>
                Cancelar
              </MenuItem>
              {/* <MenuItem icon={<FiRepeat />}>Remarcar</MenuItem> */}
            </MenuList>
          </Menu>
        </Box>
      </GridItem>
    </Grid>
  )
}

export default RstMeetCard
