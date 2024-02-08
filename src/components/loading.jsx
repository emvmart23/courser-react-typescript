import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import { Box, Center, CircularProgress } from '@chakra-ui/react'

export const Loading = (  {isLoading}  ) => {
  return (
    <Center justifyItems={"end"} mx="auto" >
        {
            isLoading && (<CircularProgress isIndeterminate color='green.300' pos={"relative"} mt={"50%"}/> )
        }
    </Center>
  )
}
