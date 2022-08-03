// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/deploy-settings/Table'

function DeploySettings({ data }) {
    return (
        <ApexChartWrapper>
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Typography variant='h5'>
                        Deployment Result
                    </Typography>
                    <Typography variant='body2'>List of Settings</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Table data={data} />
                </Grid>
            </Grid>
        </ApexChartWrapper>
    )
}

export async function getServerSideProps(context) {
    const appId = context.params.id
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }
    const res = await fetch(`https://authsettings.azurewebsites.net/api/applications/${appId}/deploy`, requestOptions)
    const data = await res.json()
    console.log(data)

    return {
        props: {
            data
        }
    }
}

export default DeploySettings
