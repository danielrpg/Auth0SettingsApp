// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import Alert from '@mui/material/Alert'
import { Grid } from '@mui/material'

interface ErrorDetail {
  propertyName: string
  errorMessage: string
  attemptedValue: string
  customState: string
  severity: number
  errorCode: string
}

const DashboardTable = ({ data }) => {
  const { isValid, errors } = data

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          {isValid ?
            (<Alert severity="success">Settings are valid — thanks!</Alert>) :
            (<Alert severity="error">Settings are Invalid — please correct them!</Alert>)}
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <TableContainer>
            <Table sx={{ minWidth: 800 }} aria-label='table in validate'>
              <TableHead>
                <TableRow>
                  <TableCell>Property Name</TableCell>
                  <TableCell>Error Message</TableCell>
                  <TableCell>Error Code</TableCell>
                  <TableCell>Severity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {errors.map((row: ErrorDetail, index: number) => (
                  <TableRow hover key={index} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                    <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.propertyName}</Typography>

                      </Box>
                    </TableCell>
                    <TableCell>{row.errorMessage}</TableCell>
                    <TableCell>{row.errorCode}</TableCell>
                    <TableCell>
                      <Chip
                        label={row.severity === 0 ? 'high' : 'low'}
                        color={'error'}
                        sx={{
                          height: 24,
                          fontSize: '0.75rem',
                          textTransform: 'capitalize',
                          '& .MuiChip-label': { fontWeight: 500 }
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Grid>
    </Grid>
  )
}

export default DashboardTable
