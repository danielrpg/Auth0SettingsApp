import React from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Swal from 'sweetalert2'


interface AppRow {
  clientId: string;
  name: string;
}

const DashboardTable = ({ data }) => {

  const handleDeployApplicationChange = async (clinetId: string) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    }
    const res = await fetch(`https://authsettings.azurewebsites.net/api/applications/${clinetId}/deploy`, requestOptions)
    const data = await res.json()

    processResponseMessage(data)
  }

  const processResponseMessage = async (data: any) => {
    if (data) {
      Swal.fire(
        'Good job!',
        'Was successfully deployed',
        'success'
      )
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Is your information correct?</a>'
      })
    }
  }

  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in Auth0 Settings'>
          <TableHead>
            <TableRow>
              <TableCell>Number</TableCell>
              <TableCell>Application</TableCell>
              <TableCell>Validate</TableCell>
              <TableCell>Deploy</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: AppRow, index: number) => (
              <TableRow hover key={row.clientId} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='caption'>{index + 1}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  <Button
                    target='_self'
                    rel='noreferrer'
                    component={Link}
                    variant='contained'
                    href={`/validate-settings/${row.clientId}`}
                    style={{ color: 'white' }}>
                    Validate
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    target='_self'
                    rel='noreferrer'
                    component={Link}
                    variant='contained'
                    style={{ color: 'white' }}
                    color='success'
                    onClick={() => handleDeployApplicationChange(row.clientId)}>
                    Deploy
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
