import { Input, InputProps } from '@chakra-ui/react'
import React from 'react'

type iProps = InputProps

const RstInput = ({ ...props }: iProps) => {
  return (
    <div>
      <Input colorScheme="whatsapp" {...props} />
    </div>
  )
}

export default RstInput
