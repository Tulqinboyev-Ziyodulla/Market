import CreateCS from '@/components/create-cs/CreateCS'
import Table from '@/components/table/Table'
import { Box, Button, Typography } from '@mui/material'
import { FC, useState } from 'react'
import { request } from '@/api'
import { useQuery } from '@tanstack/react-query'

const Customer: FC = () => {
  const [open, setOpen] = useState<null | string>(null)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['customers', { skip: 0, limit: 5 }],
    queryFn: () =>
      request.get('/get/customers', {
        params: { skip: 0, limit: 5 },
      }),
  })

  console.log(data?.data?.innerData)

  if (isLoading) return <Typography>Loading...</Typography>
  if (isError) return <Typography>Error loading customer data.</Typography>

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '20px' }}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Customer
        </Typography>
        <Button variant="contained" color="primary" onClick={() => setOpen('customer')}>Create</Button>
      </Box>

      <Table data={data?.data?.innerData || []} />

      <CreateCS open={open} close={() => setOpen(null)} />
    </div>
  )
}

export default Customer
