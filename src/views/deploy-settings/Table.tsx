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

interface AppRow {
  clientId: number;
  name: string;
}

const DashboardTable = ({ data }) => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in Auth0 Settings'>
          <TableHead>
            <TableRow>
              <TableCell>Number</TableCell>
              <TableCell>Application</TableCell>
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
                    style={{ color: 'white' }}
                    color='success'>
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
