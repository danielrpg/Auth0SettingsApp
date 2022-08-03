// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import fetch from 'isomorphic-unfetch'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/auth0-settings/Table'

function Auth0Settings({ data }: any) {
    return (
        <ApexChartWrapper>
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Typography variant='h5'>
                        Applications
                    </Typography>
                    <Typography variant='body2'>List of Applications</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Table data={data} />
                </Grid>
            </Grid>
        </ApexChartWrapper>
    )
}


export async function getServerSideProps() {
    const res = await fetch('https://authsettings.azurewebsites.net/api/applications')
    const data = await res.json()

    return {
        props: {
            data
        }
    }
}
export default Auth0Settings
