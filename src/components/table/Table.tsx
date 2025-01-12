import { FC } from 'react'
import { Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

interface ITableProps {
  data: { innerData: { _id: string; title: string; category: string; price: number }[] } 
}

const BasicTable: FC<ITableProps> = ({ data }) => {
  const tableData = data?.innerData || []

  return (
    <TableContainer>
      <MuiTable>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.length > 0 ? (
            tableData.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.price}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3}>No data</TableCell>
            </TableRow>
          )}
        </TableBody>
      </MuiTable>
    </TableContainer>
  )
}

export default BasicTable
