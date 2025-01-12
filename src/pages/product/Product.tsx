import { request } from '@/api'
import CreateCS from '@/components/create-cs/CreateCS'
import ProductTable from '@/components/productRow/productRow'
import { Box, Button, Typography, CircularProgress } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const Product = () => {
  const [open, setOpen] = useState<null | string>(null)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await request.get('/get/products')
      return response.data
    }
  })

  const handleOpenModal = () => setOpen('product')
  const handleCloseModal = () => setOpen(null)

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h6" component="h2">
          Products
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOpenModal}>
          Create
        </Button>
      </Box>

      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <CircularProgress />
        </Box>
      ) : isError ? (
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography color="error">Failed to load products. Please try again.</Typography>
        </Box>
      ) : (
        <ProductTable data={data?.innerData || []} />
      )}

      <CreateCS open={open} close={handleCloseModal} />
    </div>
  )
}

export default Product
